import React from 'react';
import ProfileArea from '@components/ProfileArea'
import SEO from '@components/seo';
import { isAuthenticatedUser } from '@utils/isAuthenticated';


const Profile = ({access_token}) => {
  return (
    <>
      <SEO pageTitle="User Profile" />
      <ProfileArea access_token={access_token}/>
    </>
  );
};

export default Profile;


export async function getServerSideProps({req}){
  const access_token = req.cookies.access;
  const user = await isAuthenticatedUser(access_token);

  if (!user){
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false
      }
    }
  }

    return {
      props: {
        access_token
      }
    }
}