import React, { useState, useEffect, useRef } from "react";
import { unstable_batchedUpdates } from "react-dom";

import PostPanelMini from "./PostPanelMini";
import { fetchHomeInitial, fetchPosts } from "../../helpers/getData";
import PostOverlay from "./PostOverlay";

import "./PostDisplayMulti.css";

const PostDisplayMulti = ({ query }) => {
  console.log("Post Multi");

  const firstLoad = useRef(true); //useRef used to prevent rerender on change

  //Removal test
  // const [initialLoad] = useState(true);
  useEffect(() => {
    console.log("initial Load");
    if (firstLoad.current) {
      console.log("useRef: ", firstLoad);
      console.log("useRef current: ", firstLoad.current);
      const initialDataFetch = async () => {
        const result = await fetchHomeInitial("http://localhost:3005/" + (query ? query : ""));
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
    let result = await fetchPosts(`http://localhost:3005/getPosts/${page}` + (query ? query : ""));
    if (result) {
      return result;
    }
  };

  const renderPosts = (enableFullView) => {
    return postList.map((post) => {
      // console.log('post render');
      return (
        <PostPanelMini
          key={post.post_id}
          post={post}
          enableFullView={enableFullView}
        />
      );
    });
  };

  const handlePrevPage = async (page) => {
    if (page !== 1) {
      let result = await getPosts(page - 1);
      unstable_batchedUpdates(() => {
        setPage((page) => page - 1);
        setPostList(result);
      });
    } else if (page === 1) {
      //Do nothing
    }
  };

  const handleNextPage = async (page, postCount) => {
    if (postCount / 5 > page) {
      let result = await getPosts(page + 1);
      unstable_batchedUpdates(() => {
        setPage((page) => page + 1);
        setPostList(result);
      });
    } 
    // else {
    //   //Do nothing
    // }
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
          onClick={() => handlePrevPage(page)}
          disabled={page !== 1 ? false : true}
        >
          Previous
        </button>
        {/* <button className="post-button-refresh" onClick={refreshPosts}>
          Refresh
        </button> */}
        <input className='post-display-page' type="number" value={page} readonly disabled/>
        <button
          className="post-button-next"
          onClick={() => handleNextPage(page, postCount)}
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
