import React, { useState, useContext, useMemo,useEffect } from 'react';
import { DjangoAuthContext } from '@context/authContext';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useDropzone } from "react-dropzone";
import Resizer from 'react-image-file-resizer';
import { Row, Col, Form, Button } from "react-bootstrap";
import 'antd/dist/antd.css';
import {Badge} from 'antd';

const defaultImage = "images/profile/profile-template.jpg";
const TabOne = (props) => {

    const {user, loading, logout, updated, imageData,
            clearErrors, updateUser, setUpdated, avatar,
            error, handleImageUpload, handleImageRemove} = useContext(DjangoAuthContext);
    const [userInfo, setUserInfo] = useState(null);
    const [updateInfo, setUpdateInfo] = useState(false);
    const [firstName, setFirstName] = useState("")
    const [password, setPassword] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [preview, setPreview] = useState(defaultImage);
    const [userImage, setUserImage] = useState([]);
    const [profilePictureUrl, setProfilePictureUrl] = useState(null)

    
    const router = useRouter();
    
    useEffect(() => {
        setUserInfo(user);
        setFirstName(user?.first_name);
        setLastName(user?.last_name);
        setPassword(user?.password);
        setEmail(user?.email)
        
    }, [user]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setUserImage(acceptedFiles.map((file) => {
                // fileResizerAndUpload(file);
                
                setProfilePictureUrl(file);
                handleImageUpload(file);
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                  })
                  setPreview(file["preview"]);
                  
                } 
            ),
          )
        },
      })


    

    useEffect(() => {
        if(updated){
            setUpdated(false);
            router.push('/profile')  
        }
        console.log(user?.profile_picture)
    }, [error, user, loading]);


    const handleSubmit = (e) => {
        e.preventDefault();
     
        const formData = new FormData();
        
        formData.append("profile_picture_cs", avatar);
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("password", password);
        console.log("Avatar", avatar)
        updateUser(formData, props.access_token)
    }




    const removeImage = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append("profile_picture_cs", "");
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("password", password);
        console.log("Avatar", avatar)
        updateUser(formData, props.access_token)

        handleImageRemove()
    }


    return(
        <div className="tab-pane fade show active" id="started" role="tabpanel" aria-labelledby="started-tab">
            <div className="aboutme-area pt-40 pb-100">
                <div className="container">
                <form onSubmit={handleSubmit}>
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="aboutme-image mb-40">
                            <a href="#">
                                <Badge count='X' onClick={removeImage} />
                            </a>
                            <img src={userInfo?.profile_picture_cs ? userInfo.profile_picture_cs : preview} alt="about-me img" />
                        </div>
                        {updateInfo &&
                        <div {...getRootProps({ className: "dropzone dz-clickable" })}>
                            <input {...getInputProps()}/>
                    
                            <div className="dz-message text-muted">
                            <p>Give your Post Life With an image</p>
                            <p>
                                <span className="note">
                                (Click to Upload{" "}
                                <strong>Your Profile Picture</strong>.)
                                </span>
                            </p>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="col-xl-7 col-lg-6">
                    {userInfo &&
                        <div className="aboutme-wrapper mb-40">
                            
                            <div className="aboutme-content">
                                <h3 className="tpabout-xd-title mb-50"><b>{userInfo.first_name} </b>{userInfo.last_name}</h3>
                                {updateInfo &&
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
                                }
                            </div>
                                <div className="aboutme-feature-list mt-25">
                                    <ul>
                                        <li><p>Current Status:<a href="#"> {userInfo.role}</a></p></li>
                                        <li><p>User Identification:<a href="#">{`*********${userInfo?.user_security_identifier?.toString().slice(userInfo.user_security_identifier.length-8)}`}</a></p></li>
                                        <li><p>E-mail:<a href="mailto:nerox490@gmail.com">{userInfo.email}</a></p></li>
                                        <li><p>Phone:<a href="tel:507-452-1254"> 507-452-1254</a></p></li>
                                        {updateInfo &&
                                            <div className="sign-input">
                                            <label className="sign-label mb-10">New Phone Number</label>
                                            <input id='email' type="number" placeholder="Phone Number"/>
                                            </div>
                                        }
                                        <li><p>Password:{`*******${password.toString().slice(userInfo.password.length-5)}`}</p></li>
                                </ul>
                                </div>
                                <div className="aboutme-social mt-40">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                        </div>
                    }   
                    </div>
                    
                </div>
                {updateInfo && 
                    <div className="defult-sign">
                        <button type="submit" className="tp-sqbtn-active-2 w-100">Save Updated Info</button>  
                    </div>
                    }
                </form>
                <hr/>
                    <div className="defult-sign">
                        <button type="click" className="tp-sqbtn-active-2 w-100" onClick={(e) => setUpdateInfo(!updateInfo)}>{updateInfo ? "Cancel": "Update Profile"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TabOne;