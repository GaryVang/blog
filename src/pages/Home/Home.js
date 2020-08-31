import React, { useState, useEffect } from "react";
// import useFetchPost from "../../hooks/useFetchPost";
import { fetchPosts } from "../../helpers/getData";

const Home = ({}) => {
  // const { isLoading, result, error } = useFetchPost("http://localhost:3005/");
  // const x = console.log('1111');

  const [test, setTest] = useState(false);
  useEffect(() => {
    console.log("test: ", test);
  }, [test]);

  const [initialLoad] = useState(false);
  useEffect(() => {
    console.log("initial load");
    const getPosts = async () => {
      setTest(await fetchPosts("http://localhost:3005/"));
    };
    getPosts();
  }, []);

  // useFetchPost(() => {

  // }, []);

  return <div>Hello</div>;
};

export default Home;
