import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '@common/VideoModal';
import Image from 'next/image';
const VideoAreaFour = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <div className="tpbs-video-area position-relative grey-bg">
        <div className="tpbsvideo-left text-center p-relative">
          <div className="tpbs-left-image">
              <Image 
            src='/images/my-pages/frontside.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}/>
          </div>

          <div className="tpbs-vnoise-bg" data-background="assets/img/testimonial/tpbs-vnoise-bg.png"></div>
          <div className="tpbs-shape">
            <img src="assets/img/video/video-shape-1.png" alt="" />
          </div>
        </div>
        <div className="tpbs-video-wrapper">
          <div className="container-fluid">
            <div className="row g-0 justify-content-end align-items-center">
              <div className="col-lg-6 ">
                <div className="tpbsvideo-box">
                  <div className="tpbsvideo-content">
                    <div className="tpbs-section-wrapper mb-40">
                      <span className="tpbs-sub-title mb-15">Sell and Buy with Ease</span>
                      <h3 className="tpbs-title">Creating an online Selling Space with <br /> <span> exclusive features.</span></h3>
                    </div>
                    <p>Easily set up your account and store with us.<br /> 
                    We use Stripe's payment platform to securly and safely manage your transactions. <br /> 
                    Read our How to for more Information</p>
                    <div className="tpbs-video-button mt-50">
                      <Link href="/portfolio-details">
                        <a className="tpbs-btn-2">How To <i className="fa-solid fa-arrow-right"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal show={show} handleClose={handleClose} videoId="CMLSrheE5rU" />
    </>
  );
};

export default VideoAreaFour;