import React from 'react';
import PortfolioBreadcrumb from '@common/PortfolioBreadcrumb';
import FooterTwo from '@common/Footers/FooterTwo';
import Header from '@common/Header';
import PrivacyContent from './PrivacyContent';


const index = (props) => {
  return (
    <>
      <Header/>
      <PortfolioBreadcrumb title="User Portfolio" subtitle="User Name" />
      <PrivacyContent access_token={props.access_token}/>
      <FooterTwo/>
    </>
  );
};

export default index;