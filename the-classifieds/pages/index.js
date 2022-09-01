import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import EntrancePage from '@components/Entrance';
import Landing from '@components/Landing';
import SEO from '@components/seo';
import { AuthContext, DjangoAuthContext } from '@context/authContext';
import { useContext } from 'react';

const index = () => {

  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLanding(false)
    }, 1000)
  }, [])

  const {state} = useContext(DjangoAuthContext);
  console.log(state);
;  return (
  <>
  {showLanding ? 
    <>
      <SEO pageTitle="Enter" />
      <Landing />
    </>:
    <>
      <SEO pageTitle="Home Four" />
      <EntrancePage />
    </>
  }
  </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });