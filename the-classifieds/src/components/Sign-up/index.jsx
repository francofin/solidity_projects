import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import Footer from '@common/Footers/Footer';
import Header from '@common/Header';
import SignUpArea from './SignUpArea';
// import FooterThree from '@components/common/Footers/FooterThree';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Sign Up" subtitle="Sign Up" />
      <SignUpArea/>
      <Footer/>
    </>
  );
};

export default index;