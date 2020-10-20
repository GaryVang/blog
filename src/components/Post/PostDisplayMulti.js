import React, { useState, useEffect, useRef } from "react";
import { unstable_batchedUpdates } from "react-dom";

import PostPanelMini from "./PostPanelMini";
import { fetchHomeInitial, fetchPosts } from "../../helpers/getData.js";
import PostOverlay from "./PostOverlay";

import "./PostDisplayMulti.css";

// const URL_FETCHPOSTS = "http://localhost:3005/getPosts/";
// const URL_INITIALFETCH = "http://localhost:3005/";
const URL_INITIALFETCH = "https://blog-api-1123.herokuapp.com/";
const URL_FETCHPOSTS = "https://blog-api-1123.herokuapp.com/getPosts/";


const PostDisplayMulti = ({ query }) => {

  const firstLoad = useRef(true); //useRef used to prevent rerender on change

  useEffect(() => {
    if (firstLoad.current) {
      const initialDataFetch = async () => {
        const result = await fetchHomeInitial((query ? query : ""));
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
  const [postCount, setPostCount] = useState(0);
  const [postList, setPostList] = useState(false);
  const [fullViewOverlay, setFullViewOverlay] = useState({
    flag: false,
    post: null,
  });

  const getPosts = async (page) => {
    let result = await fetchPosts(page, (query ? query : ""));
    if (result) {
      return result;
    }
  };

  const renderPosts = (enableFullView) => {
    return postList.map((post) => {
      return (
        <PostPanelMini
          key={post.post_id}
          post={post}
          enableFullView={enableFullView}
        />
      );
    });
  };

  // const handlePrevPage = async (page) => {
  const handlePrevPage = async () => {
    if (page > 1) {
      let result = await getPosts(page - 1);
      unstable_batchedUpdates(() => {
        // setPage((page) => page - 1);
        setPage((page) => { return (page > 1) ? page -1 : page });
        setPostList(result);
      });
    } 
  };

  // const handleNextPage = async (page, postCount) => {
  const handleNextPage = async (postCount) => {
    if (postCount / 5 > page) {
      let result = await getPosts(page + 1);
      unstable_batchedUpdates(() => {
        // setPage((page) => page + 1);
        setPage((page) => {return (postCount / 5 > page) ? page +1 : page});
        setPostList(result);
      });
    } 
  };

  const renderPostFullView = (post) => {
    return <PostOverlay post={post} disableFullView={disableFullView} />;
  };

  const enableFullView = (post) => {
    setFullViewOverlay({ flag: true, post: post });
    document.body.style.overflow = "hidden";
  };

  const disableFullView = () => {
    setFullViewOverlay({ flag: false, post: null });
    document.body.style.overflow = "auto";
  };

  return (
    <section className="post-display-multi-container">
      {fullViewOverlay.flag ? renderPostFullView(fullViewOverlay.post) : null}
      <div className="post-button-wrapper">
        <button
          className="post-button-previous"
          // onClick={() => handlePrevPage(page)}
          onClick={() => handlePrevPage()}
          disabled={page > 1 ? false : true}
        >
          Previous
        </button>
        <input className='post-display-page' type="number" value={page} readonly disabled/>
        <button
          className="post-button-next"
          // onClick={() => handleNextPage(page, postCount)}
          onClick={() => handleNextPage(postCount)}
          disabled={postCount / 5 > page ? false : true}
        >
          Forward
        </button>
      </div>
      {postList ? renderPosts(enableFullView) : null}
    </section>
  );
};

export default PostDisplayMulti;
