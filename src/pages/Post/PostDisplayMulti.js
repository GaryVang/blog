import React, { useState, useEffect, useRef } from "react";
import PostPanelMini from "./PostPanelMini";
import { fetchHomeInitial, fetchPosts } from "../../helpers/getData";
import { unstable_batchedUpdates } from "react-dom";

const PostDisplayMulti = (
  {
    //   postList,
    //   page,
    //   postCount,
    //   setPage,
    //   nextPage,
    //   prevPage,
  }
) => {
    console.log("Post Multi");
  //------------------------------------
  const firstLoad = useRef(true);

  const [initialLoad] = useState(true);
  useEffect(() => {
    console.log("initial Load");
    if (firstLoad.current) {
      console.log("useRef: ", firstLoad);
      console.log("useRef current: ", firstLoad.current);
      const initialDataFetch = async () => {
        const result = await fetchHomeInitial("http://localhost:3005/");
        if (result.postList) {
          unstable_batchedUpdates(() => {
            setPostCount(result.postCount);
            setPostList(result.postList);
          });
        }
      };

      initialDataFetch();
    }
  }, []);

  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("page outer: ", postCount);
    if (!firstLoad.current) {
      console.log("page inner");
      const getPosts = async () => {
        let result = await fetchPosts(`http://localhost:3005/getPosts/${page}`);
        if (result) {
        //   setPostList(result);
        }
      };
      getPosts();
    } else {
      firstLoad.current = false;
    }
  }, [page]);

  const [postCount, setPostCount] = useState(0);
  const [postList, setPostList] = useState(false);
  
  //----------------------------------

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
};

  const renderPosts = () => {
    return postList.map((post) => {
      return <PostPanelMini key={post.post_id} post={post} />;
    });
  };

  const handlePrevPage = (page) => {
    if (page !== 1) {
      setPage((page) => page - 1);
    } else if (page === 1) {
      //Do nothing
    }
  };

  const handleNextPage = (page, postCount) => {
    if (postCount / 5 > page) {
      setPage((page) => page + 1);
    } else {
      //Do nothing
    }
  };

  return (
    <section className="post-display-multi-container">
      <div className="post-button-wrapper">
        <button
          className="post-button-previous"
          onClick={() => handlePrevPage(page)}
          disabled={page !== 1 ? false : true}
        >
          Previous
        </button>
        {/* <button className="post-button-refresh" onClick={refreshPosts}>
          Refresh
        </button> */}
        <label>{page}</label>
        <button
          className="post-button-next"
          onClick={() => handleNextPage(page, postCount)}
          disabled={postCount / 5 > page ? false : true}
        >
          Forward
        </button>
      </div>
      {postList ? renderPosts() : null}
    </section>
  );
};

export default PostDisplayMulti;
