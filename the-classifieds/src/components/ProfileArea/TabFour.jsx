import React, {useContext, useEffect, useState} from "react";
import { Row, Col, Form } from "react-bootstrap";
import Image from 'next/image';
import { DjangoAuthContext } from '@context/authContext';
import { Button, Radio } from 'antd';
import {
    LoadingOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
const TabFour = (props) => {
    const {user, loading, logout, userProfile} = useContext(DjangoAuthContext);
    const [userInfo, setUserInfo] = useState(null)
    const [userProfileInfo, setUserProfileInfo] = useState(null)



    
    useEffect(() => {
        setUserInfo(user)
        setUserProfileInfo(userProfile)
    }, [user, userProfile])

    console.log(userProfileInfo)


    const becomeVendor = () => {
        console.log("Clicked")
    }


    return(
        <div className="tab-pane fade" id="meeting" role="tabpanel" aria-labelledby="meeting-tab">
            <div className="privacy-item mb-55">
                <h4 className="privacy-title mb-20"><b>Set Up </b> A Seller Profile</h4>
                <p>The Classifieds allows you to set up an online store to sell your whatchmacallits and "I cant believe I still have this in my place" items.</p>
            </div>
            <div className="sign-line"></div>
                  <div className="sign-in-with-google mb-25" style={{paddingLeft:'80px'}}>
                      <Image
                      src={"/images/logo/Classifieds-logos.jpeg"} 
                      height={200}
                      width={240}
                      layout="intrinsic"/>
                  </div>
            <div className="privacy-item mb-55">
                <h4 className="privacy-title mb-20"><b>It's Super Simple</b></h4>
                <p>The Classifieds uses the Stripe Platform to seamlessly help our users set up a seller's profile and link your account for payments. Click on the link below and get started.</p>
                <p>Click the link below to get started with Stripe Onboarding.</p>
            </div>
            <Button className="mb-3" 
            block 
            shape="round" 
            type="primary" 
            icon={loading ? <LoadingOutlined /> : <SettingOutlined/>}
            size="large"
            onClick={becomeVendor}
            >
            Set Up Stripe Payout
            </Button>
        </div>
    )
}


export default TabFour;