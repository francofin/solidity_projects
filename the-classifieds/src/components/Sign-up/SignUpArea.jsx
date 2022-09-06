import React, {useEffect, useState, useContext} from "react";
import Link from 'next/link';
import swal from 'sweetalert';
import { signInWithEmailLink, updatePassword, getIdTokenResult, getAuth } from "firebase/auth";
import { AuthContext, DjangoAuthContext } from '@context/authContext';
import {fireBaseAuth} from '@utils/fireBaseUtility';
import {useRouter} from "next/router";


const SignUpArea = () => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const {loading:djangoLoader, user, isAuthenticated, error, clearErrors, register, dispatch} = useContext(DjangoAuthContext);
  // const {dispatch} = useContext(AuthContext)

  const router = useRouter();
  
  
  useEffect(() => {
    const userEmail = window.localStorage.getItem("clasifiedSignInEmail");
    setEmail(userEmail);
  }, []);

  // console.log(signInWithEmailLink)

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
  }, [isAuthenticated, error, loading]);

  // console.log(router)

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const auth = getAuth();
      console.log(auth)
      // console.log(getAuth())

      
      
      if(!email || !password){
        swal({
            title:"Email and password are required to complete the registration",
            icon:"error"
        });
        }
      else if(password !== confirmPassword){
          swal({
              title:"Your Passwords do no match, please try again.",
              icon:"error"
          });
      } else if (agree == false){
        swal({
          title:"Please Agree to the Terms and COnditions",
          icon:"error"
      });
      }
      console.log(window.location.href);
      
    
      try{
        const result = await signInWithEmailLink(auth, email, window.location.href);
        
        if (result){
          console.log(result);
         
        }
       
        if(result.user.emailVerified){
            window.localStorage.removeItem('clasifiedSignInEmail');
            let user = fireBaseAuth.currentUser;
            console.log("User", user);
            await updatePassword(user, password);
            console.log(password);
        
            const idTokenResult = await getIdTokenResult(user);
            console.log("Token", idTokenResult);
            dispatch({
                type:'LOGGED_IN_USER',
                payload:{email: user.email, token:idTokenResult.token}
            });

            register({firstName, lastName, email, password, confirmPassword}); 

            //save or update user in mongodb

            
            router.push("/")
        }

    } catch (err){
        console.log("Error with registering your information", err);
        setLoading(false);
        swal({
            title:`Error with registration: ${err.message}` ,
            icon:"error"
        })

      }
  }




  return (
    <>
      <div className="sign-area pt-140 pb-140">
        <div className="container">
          <div className="sign-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <div className="sign-image w-img">
                  <img src="images/my-pages/sunsetCity.jpg" alt="sign-image" />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="sign-content">
                  <h5 className="sign-title mb-30"><b>Create your</b> Account</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12">
                        <div className='row'>
                          <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className='sign-input'>
                              <label className="sign-label mb-10">First Name</label>
                              <input id='name' value={firstName} onChange={(e) => setFirstName(e.target.value)} 
                              type="text" placeholder="First Name" />
                            </div>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className='sign-input'>
                              <label className="sign-label mb-10">Last Name</label>
                              <input id='name' value={lastName} onChange={(e) => setLastName(e.target.value)}
                              type="text" placeholder="Last Name" />
                            </div>
                          </div>
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Your Email</label>
                          <input id='email' value={email} type="email" placeholder="Your Email" readOnly={true}/>
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Password</label>
                          <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" minLength={8}/>
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Confirm Password</label>
                          <input id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                        </div>
                      </div>
                    </div>
                    <div className="sign__action d-sm-flex justify-content-between mt-15 mb-20">
                      <div className="sign__agree d-flex align-items-center">
                        <input type="checkbox" hidden="hidden" id="remember-me" onChange={(e) => setAgree(e.target.checked)}/>
                        <label className="switch" htmlFor="remember-me"></label>
                        <p>Agree to terms & conditions</p>
                      </div>
                    </div>
                    <div className="defult-sign">
                      <button type="submit" className="tp-sqbtn-active-2 w-100">{loading && djangoLoader ? 'Loading': 'Sign Up'}</button>
                    </div>
                    <div className="sign-line"></div>
                    {/* <div className="sign-in-with-google mb-25">
                      <a href="#" className="tp-btn-black w-100">
                        <img src="assets/img/icon/google.png" alt="" />Or sign up with Google</a>
                    </div> */}
                  </form>
                  <div className="sign__new text-center">
                    <p>Already have an account? <Link href="/sign-in"> Sign In</Link></p>
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

export default SignUpArea;