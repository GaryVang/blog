import React, { useState, useEffect, useRef } from "react";
import { unstable_batchedUpdates } from "react-dom";
// import useFetchPost from "../../hooks/useFetchPost";
import { fetchHomeInitial, fetchPosts } from "../../helpers/getData";
import PostDisplayMulti from "../Post/PostDisplayMulti";

const Home = ({}) => {
  // const { isLoading, result, error } = useFetchPost("http://localhost:3005/");
  const x = console.log("Home");
  // const firstLoad = useRef(true);

  // const [initialLoad] = useState(true);
  // useEffect(() => {
  //   console.log("initial Load");
  //   if (firstLoad.current) {
  //     console.log("useRef: ", firstLoad);
  //     console.log("useRef current: ", firstLoad.current);
  //     const initialDataFetch = async () => {
  //       const result = await fetchHomeInitial("http://localhost:3005/");
  //       if (result.postList) {
  //         unstable_batchedUpdates(() => {
  //           setPostCount(result.postCount);
  //           setPostList(result.postList);
  //         });
  //       }
  //     };

  //     initialDataFetch();
  //   }
  // }, []);

  // const [postCount, setPostCount] = useState(0);
  // const [postList, setPostList] = useState(false);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   console.log("page outer: ", postCount);
  //   if (!firstLoad.current) {
  //     console.log("page inner");
  //     const getPosts = async () => {
  //       let result = await fetchPosts(`http://localhost:3005/getPosts/${page}`);
  //       if (result) {
  //         setPostList(result);
  //       }
  //     };
  //     getPosts();
  //   } else {
  //     firstLoad.current = false;
  //   }
  // }, [page]);

  return (
    <section className="home-container">
      <PostDisplayMulti
        // postList={postList}
        // page={page}
        // setPage={setPage}
        // postCount={postCount}
      />
    </section>
  );
};

// export default React.memo(Home);
export default Home;
