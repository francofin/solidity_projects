import React from 'react';
import Image from 'next/image';
const NewsHero = () => {
  return (
    <>
      <div className="tp-photograper-portfolio p-relative" style={{backgroundImage:'url(images/my-pages/cityworld.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
        <div className="container">
          <div className="col-xl-12">
            <div className="tp-photograper-portfolio-wrapper text-center">
              <span className="tp-pg-portfoli-ts-text mb-55">Whats Happening </span>
              <h2 className="tp-photograper-portfolio-title">In the World Today?</h2>
              <p className="tp-photograper-portfolio-text">Closer to the truth</p>
            </div>
          </div>
        </div>
        <div className="tpbs-scroll tpbs-scroll-3">
          <a href="#tp-creative" className="tpbs-scroll-btn animate"><i className="fa-light fa-arrow-down-long"></i></a>
          <span><a href="#tp-creative">Scrool Down</a></span>
        </div>
      </div>
    </>
  );
};

export default NewsHero;