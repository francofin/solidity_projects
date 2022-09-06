import React, {useContext, useEffect, useState} from "react";
import { useDropzone } from "react-dropzone";
import Resizer from 'react-image-file-resizer';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from '@common/ErrorMsg';
import schema from '@common/schema';

const TabTwo = () => {

    const [selectedImage, setSelectedImage] = useState({
        profilePicture: "",
        cover: "",
    });

    const handleOnSubmit = (values,{ resetForm }) => {
        alert(`${values.name + "\n" + values.email + "\n" + values.subject + "\n" + values.msg}`);
        resetForm()
      }
      const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: {
          name: '',
          email: '',
          subject: '',
          msg: ''
        },
        validationSchema: schema,
        onSubmit: handleOnSubmit,
      })


    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
          console.log(acceptedFiles);
          
          setUserImages([...userImages, acceptedFiles])
          setPreviewImages([...previewImage, acceptedFiles.map((file) => {
            
            fileResizerAndUpload(file);
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          }
            ),
          ])
        },
      })


    

    return(
        <div className="tab-pane fade" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
            <div className="privacy-item mb-55">
                <h4 className="privacy-title mb-20"><b>Add </b> Post</h4>
                <div className="contact__wrapper">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-md-12">
                        <div className="contact__form-input">
                          <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Title" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Write  Your Message"></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                    </div>
                    <div
                        {...getRootProps({ className: "dropzone dz-clickable" })}
                    >
                        <input {...getInputProps()} />
                        <div className="dz-message text-muted">
                        <p>Give your Post Life With an image</p>
                        <p>
                            <span className="note">
                            (Selected files are{" "}
                            <strong>uploaded</strong>.)
                            </span>
                        </p>
                    </div>
                    <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button type='submit' className="tp-solid-btn">Send your message</button>
                        </div>
                      </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
            <div className="privacy-item mb-55">
                
            </div>
        </div>
    )
}


export default TabTwo;