import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@common/Sidebar';
import useGlobalContext from '@hooks/useGlobalContext';

const HeaderComingSoon = () => {
  const {setShowSidebar} = useGlobalContext();
  return (
    <>
      <header>
        <div className="tp-header-area tp-header-area-df pt-30">
          <div className="tp-header-area-inner">
            <div className="container">
              <div className="mega-menu-wrapper">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-6">
                    <div className="logo">
                      <Link href="/">
                      <a >
                      <Image 
                        src={"/" + "images/logo/Classifieds-logos_transparent.png"} 
                        alt="logo" 
                        height={100}
                        width={140}
                        layout="intrinsic"/>
                      </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-6">
                    <div className="tp-header-action tp-header-action-coming-soon">
                      <ul>
                        <li>
                          <button onClick={() => setShowSidebar(true)} className="info-toggle-btn sidebar-toggle-btn">
                            <i className="fas fa-bars"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Sidebar  */}
      <Sidebar headerMenu={true} />
      {/* Sidebar  */}
    </>
  );
};

export default HeaderComingSoon;