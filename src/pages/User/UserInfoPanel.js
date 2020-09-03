import React from "react";

import "./UserInfoPanel.css";

const UserInfoPanel = ({ user }) => {
  console.log('User Info Panel');
  if (user) {
    console.log("user info: ", user);
  }

  return !user ? null : (
    <section className="user-info-container">
      <section className="user-info-top-wrapper">
        <span className='user-info-banner'>Welcome to {user.username}'s Blog!</span>
      </section>
      <section className="user-info-bot-wrapper">
        {/* <span>{user.username}</span> */}
        <span>Join Date: {user.join_date}</span>
        <span>Posts: {user.posts}</span>
      </section>
    </section>
  );
};

export default UserInfoPanel;
