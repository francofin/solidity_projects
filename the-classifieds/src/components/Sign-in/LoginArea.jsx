import { DjangoAuthContext } from '@context/authContext';
import React, {useState, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import swal from 'sweetalert';
import {fireBaseAuth, googleAuthProvider, facebookAuthProvider} from '@utils/fireBaseUtility';
import { signInWithEmailAndPassword, signInWithPopup, getIdTokenResult, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const LoginArea = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [loading, setLoading] = useState(false)

  const router = useRouter();
  const auth = fireBaseAuth;
  const {loading:DjangoLoader, user, isAuthenticated, error, login, clearErrors, dispatch} = useContext(DjangoAuthContext);
  console.log(error)

  useEffect(() => {
    if(error){
      console.log(error);
      swal({
        title: `Error, Logging In! ${error}`,
        icon: "error",
      });
      clearErrors();
    }

    // if(isAuthenticated && !loading){
    //   router.push("/");
    // }
  }, [isAuthenticated, error, loading])


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
      await signInWithEmailAndPassword(auth, email, password)
      .then( async (result) => {
        const {user} = result;
        const idTokenResult = await getIdTokenResult(user);
        dispatch({
          type:'LOGGED_IN_USER',
          payload:{email: user.email, token:idTokenResult.token}
      });
        
        
      });

    } catch (err){
      console.log(err)
      swal({
        title:"Incorrect details, please review your login Credentials",
        icon: "error"
      })
    }

    login({username:email, password});
     
  }




  return (
    <> 
    <div className="sign-area pt-140 pb-140">
      <div className="container">
        <div className="sign-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="sign-image w-img">
                <img src="images/my-pages/come-in.jpg" alt="sign-image" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="sign-content">
                <h5 className="sign-title mb-30"><b>Login</b> to your account.</h5>
                <form onSubmit={handleOnSubmit}>
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="sign-input">
                        <label className="sign-label mb-10">Your Email</label>
                        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} 
                          type="email" placeholder="Your Email" pattern ='\S+@\S+\.\S+' title='Your email is invalid' required/>
                      </div>
                      <div className="sign-input">
                        <label className="sign-label mb-10">Password</label>
                        <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} 
                        type="password" placeholder="Your password" required/>
                      </div>
                    </div>
                  </div>
                  <div className="sign__action d-sm-flex justify-content-between mt-15 mb-20">
                    <div className="sign__agree d-flex align-items-center">
                      <input type="checkbox" hidden="hidden" id="remember-me" />
                      <label className="switch" htmlFor="remember-me"></label>
                      <p>Remember Me</p>
                    </div>
                    <div className="sign-forgot-password">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="defult-sign">
                    <button type="submit" className="tp-sqbtn-active-2 w-100">{loading ? 'Logging In': 'Log In'}</button>
                  </div>
               
                </form>
                <div className="sign__new text-center">
                  <p>Dont have an account? <Link href="/sign-up"> Sign Up Now</Link></p>
                </div>
                <div className="sign-line"></div>
                  <div className="sign-in-with-google mb-25" style={{paddingLeft:'80px'}}>
                      <Image
                      src={"/images/logo/Classifieds-logos.jpeg"} 
                      height={200}
                      width={240}
                      layout="intrinsic"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default LoginArea;