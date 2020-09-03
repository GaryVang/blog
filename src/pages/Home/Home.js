import React from "react";

// import useFetchPost from "../../hooks/useFetchPost";
// import { fetchHomeInitial, fetchPosts } from "../../helpers/getData";
import PostDisplayMulti from "../Post/PostDisplayMulti";

import './Home.css';

const Home = ({}) => {
  // const { isLoading, result, error } = useFetchPost("http://localhost:3005/");
  const x = console.log("Home");

  return (
    <section className="home-container">
      <PostDisplayMulti />
    </section>
  );
};

// export default React.memo(Home);
export default Home;
