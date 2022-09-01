import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import RequestSignUpArea from './RequestSignUp';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Sign Up" subtitle="Sign Up" />
      <RequestSignUpArea/>
      <FooterTwo/>
    </>
  );
};

export default index;