import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import FooterTwo from '@common/Footers/FooterTwo';
import Header from '@common/Header';
import ContactArea from './ContactArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Get in Touch" subtitle="Send us a message" />
      <ContactArea/>
      <FooterTwo/>
    </>
  );
};

export default index;