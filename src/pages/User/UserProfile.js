import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchUserProfile } from "../../helpers/getData";

import UserInfoPanel from "./UserInfoPanel";
import PostDisplayMulti from "../../components/Post/PostDisplayMulti";

import "./UserProfile.css";

// const URL_USERPROFILE = "http://localhost:3005/user/";
const URL_USERPROFILE = "https://blog-api-1123.herokuapp.com/" + "user/";

const UserProfile = ({}) => {
  const username = useParams().username;

  const [userProfile, setUserProfile] = useState(false);
  useEffect(() => {
    const getUserProfile = async () => {
      const user = await fetchUserProfile(username);
      setUserProfile(user);
    };
    getUserProfile();
  }, []);

  const renderSwitch = () => {
    if (userProfile === null) {
      return render404();
    } else if (userProfile) {
      return renderUserProfile();
    } else {
      return null;
    }
  };

  const renderUserProfile = () => {
    return (
      <article className="user-profile-container">
        <UserInfoPanel user={userProfile} />
        <PostDisplayMulti query={`?username=${userProfile.username}`} />
      </article>
    );
  };

  const render404 = () => {
    return (
      <article>
        <header>
          <h1 className='user-profile-pnf'>Sorry, no Blogger goes by that name.</h1>
        </header>
      </article>
    );
  };

  return renderSwitch();
};

export default UserProfile;
