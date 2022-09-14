import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import React, { useState, useContext, useMemo,useEffect } from 'react';
import { DjangoAuthContext } from '@context/authContext';
import TabFour from './TabFour';

const PrivacyContent = (props) => {
    const {user, loading, logout} = useContext(DjangoAuthContext);
    const [userInfo, setUserInfo] = useState(null)
    console.log(props)
    
    useEffect(() => {
        setUserInfo(user)
    }, [user])

    console.log(userInfo)

  return (
    <>
      <div className="privacy-content-area pt-135 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="privacy-nav mb-55">
                <div className="privacy-nav-wrapper">
                  {userInfo && 
                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="started-tab" data-bs-toggle="tab" data-bs-target="#started" type="button" role="tab" aria-controls="started" aria-selected="true">{`@${userInfo.first_name}'s Profile's`}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Blog Something</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profession-tab" data-bs-toggle="tab" data-bs-target="#profession" type="button" role="tab" aria-controls="login" aria-selected="false">Professonal Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="meeting-tab" data-bs-toggle="tab" data-bs-target="#meeting" type="button" role="tab" aria-controls="meeting" aria-selected="false">Set up a seller profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="job-tab" data-bs-toggle="tab" data-bs-target="#job" type="button" role="tab" aria-controls="job" aria-selected="false">Post a Job</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="company-tab" data-bs-toggle="tab" data-bs-target="#company" type="button" role="tab" aria-controls="company" aria-selected="false">Set up a Company Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="nerox-tab" data-bs-toggle="tab" data-bs-target="#nerox" type="button" role="tab" aria-controls="nerox" aria-selected="false">Financial News Portal</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="privacy-tab" data-bs-toggle="tab" data-bs-target="#privacy" type="button" role="tab" aria-controls="privacy" aria-selected="false">Privacy Policy</button>
                    </li>
                  </ul>
                  }
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="privacy-content-wrapper">
                <div className="tab-content" id="privacy-nav-content">
                  <TabOne access_token={props.access_token}/>
                  <TabTwo />
                  <TabThree />
                  <TabFour />
                  <div className="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Professional </b>Profile</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>What are </b>Qualifications?</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="company" role="tabpanel" aria-labelledby="company-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>About </b> Company</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Our </b> Journey</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Our </b> Achivements</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nerox" role="tabpanel" aria-labelledby="nerox-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Owner </b>Nerox</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>My </b>Journey</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>How I started </b>Nerox</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Privacy </b> Policy</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Company </b> Terms </h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
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

export default PrivacyContent;