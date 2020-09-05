import React from "react";

import PostDisplayMulti from "../../components/Post/PostDisplayMulti";

import './Home.css';

const Home = ({}) => {
  const x = console.log("Home");

  return (
    <section className="home-container">
      <PostDisplayMulti />
    </section>
  );
};

export default Home;