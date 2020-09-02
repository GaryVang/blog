import React from "react";

import "./UserInfoPanel.css";

const UserInfoPanel = ({ user }) => {
  if (user) {
    console.log("user info: ", user);
  }

  return !user ? null : (
    <section className="user-info-container">
      <section className="user-info-top-wrapper">Top Panel</section>
      <section className="user-info-bot-wrapper">
        <span>{user.username}</span>
        <span>Join Date: {user.join_date}</span>
        <span>Posts: {user.posts}</span>
      </section>
    </section>
  );
};

export default UserInfoPanel;
