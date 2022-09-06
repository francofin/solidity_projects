
import Link from 'next/link';
import {fireBaseAuth} from '@utils/fireBaseUtility';
import { sendSignInLinkToEmail } from "firebase/auth";
import React, { useState } from 'react';
import swal from 'sweetalert';
import Image from 'next/image';

const RequestSignUpArea = () => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    const auth = fireBaseAuth;
    const config = {
      url: process.env.NEXT_PUBLIC_CONFIRMATION_EMAIL_REDIRECT,
      handleCodeInApp: true
    }
   await sendSignInLinkToEmail(auth, email, config);
   window.localStorage.setItem('clasifiedSignInEmail', email);
   swal({
     title: `Success, Email sent to ${email}, Please check your email to complete your registration!`,
     icon: "success",
   });
   setEmail("");
   setLoading(false);    
   }

  return (
    <> 
    <div className="sign-area pt-140 pb-140">
      <div className="container">
        <div className="sign-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="sign-image w-img">
                <img src="images/my-pages/cityscape.jpg" alt="sign-image" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="sign-content">
                <h5 className="sign-title mb-30"><b>Sign Up</b></h5>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="sign-input">
                        <label className="sign-label mb-10">Your Email</label>
                        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)}
                          type="email" placeholder="Your Email" disabled={loading}/>
                      </div>
                    </div>
                  </div>
                  <div className="defult-sign">
                    <button type="submit" className="tp-sqbtn-active-2 w-100" disabled={!email || loading}>Register</button>
                  </div>
                  <div className="sign-line"></div>
                  <div className="sign-in-with-google mb-25">
                    <a href="#" className="tp-btn-black w-100">
                      <img src="assets/img/icon/google.png" alt="" />Or sign in with Google</a>
                  </div>
                  <div className="sign-line"></div>
                  <div className="sign-in-with-google mb-25" style={{paddingLeft:'80px'}}>
                      <Image
                      src={"/images/logo/Classifieds-logos.jpeg"} 
                      height={200}
                      width={240}
                      layout="intrinsic"/>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default RequestSignUpArea;