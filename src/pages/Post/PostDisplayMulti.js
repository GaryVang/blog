import React, { useState, useEffect, useRef, useReducer } from "react";
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

  // const fetchTest =  async (page) => {
  //     await fetchPosts(`http://localhost:3005/getPosts/${page}`)
  //     .then(result => );
  //     // console.log('x: ', x);
  //     return x;
  // }

  // const reducer =   (state, action) => {
  //     const { page, postList } = state;
  //      switch (action.type) {
  //         case 'increment':
  //             // console.log(7777,  {page: page + 1, postList:  await fetchTest(page+1)});
  //           return {page: page + 1, postList:   fetchTest(page+1)};
  //         case 'decrement':
  //         //   return {count: state.count - 1};
  //           return {page: page - 1, postList:   fetchTest(page-1)};
  //         default:
  //           throw new Error();
  //       }
  // };

  // const [state, dispatch] = useReducer(reducer, {page: 1, postList: false});
  // useEffect(() => {
  //     console.log('state: ', state);
  //     console.log('postList: ', state.postList);
  // }, [state.page]);

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
  //   useEffect(() => {
  //     console.log("page outer: ", postCount);
  //     if (!firstLoad.current) {
  //       console.log("page inner");
  //       const getPosts = async () => {
  //         let result = await fetchPosts(`http://localhost:3005/getPosts/${page}`);
  //         if (result) {
  //           setPostList(result);
  //         }
  //       };
  //       getPosts();
  //     } else {
  //       firstLoad.current = false;
  //     }
  //   }, [page]);

  const [postCount, setPostCount] = useState(0);
  const [postList, setPostList] = useState(false);

  //----------------------------------

  const getPosts = async (page) => {
    let result = await fetchPosts(`http://localhost:3005/getPosts/${page}`);
    if (result) {
      return result;
    }
  };

  const renderPosts = () => {
    return postList.map((post) => {
      // console.log('post render');
      // return state.postList.map((post) => {
      return <PostPanelMini key={post.post_id} post={post} />;
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
    } else {
      //Do nothing
    }
  };

  //   const handleNext = () => {
  //       dispatch({type: "increment"});
  //   };

  //   const handlePrev = () => {
  //     dispatch({type: 'decrement'});
  //   };

  return (
    <section className="post-display-multi-container">
      <div className="post-button-wrapper">
        <button
          className="post-button-previous"
          onClick={() => handlePrevPage(page)}
          disabled={page !== 1 ? false : true}
          //   onClick={() => handlePrev()}
          //   disabled={state.page !== 1 ? false : true}
        >
          Previous
        </button>
        {/* <button className="post-button-refresh" onClick={refreshPosts}>
          Refresh
        </button> */}
        <label>{page}</label>
        {/* <label>{state.page}</label> */}
        <button
          className="post-button-next"
          onClick={() => handleNextPage(page, postCount)}
          disabled={postCount / 5 > page ? false : true}
          //   onClick={() => handleNext()}
          //   disabled={postCount / 5 > state.page ? false : true}
        >
          Forward
        </button>
      </div>
      {postList ? renderPosts() : null}
      {/* {state.postList ? renderPosts() : console.log(4, state)} */}
    </section>
  );
};

export default PostDisplayMulti;
