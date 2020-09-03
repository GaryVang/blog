import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchUserProfile } from "../../helpers/getData";

import UserInfoPanel from "./UserInfoPanel";
import PostDisplayMulti from '../Post/PostDisplayMulti';

import "./UserProfile.css";

const URL_USERPROFILE = "http://localhost:3005/user/";

const UserProfile = ({}) => {
  const username = useParams().username;
  const x = console.log("User Profile: ", username);

  //   const testName = "bartsimpson";

  const [userProfile, setUserProfile] = useState(false);
  useEffect(() => {
    const getUserProfile = async () => {
      const user = await fetchUserProfile(URL_USERPROFILE, username);
    //   if (user) {
        console.log("userprofile user: ", user);
        setUserProfile(user);
    //   }
    };
    getUserProfile();
  }, []);

  const renderSwitch = () => {
    if (userProfile === null) {
      return render404();
    } else if (userProfile) {
      return renderUserProfile();
    } else {
      //   return renderLoading();
      return null;
    }
  };

  const renderLoading = () => {
    // return <article>Fetching User Profile...</article>;
    return <div>rendering</div>;
  };

  const renderUserProfile = () => {
    // return <article>{userProfile.username}</article>;
    return (
      <article className='user-profile-container'>
        <UserInfoPanel user={userProfile} />
        <PostDisplayMulti query={`?username=${userProfile.username}`}/>
      </article>
    );
  };

  const render404 = () => {
    //   console.log('404');
    return <article>Sorry, no Blogger goes by that name.</article>;
  };

  return renderSwitch();
};

export default UserProfile;
