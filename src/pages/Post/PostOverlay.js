import React from "react";

import "./PostOverlay.css";

//------------------------------
// To-do:
//      - Disable body scroll
//--------------------------------
const PostOverlay = ({ post, disableFullView }) => {

  //Prevents overlay from closing due to parent's onClick event
  const handleArticleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="post-overlay-container" onClick={() => disableFullView()}>
      <article
        className="post-overlay-article-container"
        onClick={(e) => handleArticleClick(e)}
      >
        <header>
          <h3 className="post-overlay-title">{post.title}</h3>
          <span className="post-overlay-publish-wrapper">
            <a>By {post.username}</a>
            <time>Published {post.post_date}</time>
          </span>
        </header>
        <p className="post-overlay-content">{post.body}</p>
      </article>
    </div>
  );
};

export default PostOverlay;
