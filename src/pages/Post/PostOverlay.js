import React from "react";
import { useHistory } from "react-router-dom";

import "./PostOverlay.css";

const PostOverlay = ({ post, disableFullView }) => {
  const history = useHistory();

  //Prevents overlay from closing due to parent's onClick event
  const handleArticleClick = (e) => {
    e.stopPropagation();
  };

  const handleUsernameClick = (e) => {
    e.stopPropagation();
    history.push(`/user/${post.username}`);
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
            <span>
              By <a className="post-overlay-mini-username" onClick={(e) => {handleUsernameClick(e);}}>
                {post.username}
              </a>
            </span>
            <time>Published {post.post_date}</time>
          </span>
        </header>
        <p className="post-overlay-content">{post.body}</p>
      </article>
    </div>
  );
};

export default PostOverlay;
