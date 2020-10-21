import React from "react";
import { useHistory } from "react-router-dom";

import "./PostPanelMini.css";

const PostPanelMini = ({ post, enableFullView }) => {
  const history = useHistory();

  const handleUsernameClick = (e) => {
    e.stopPropagation();
    history.push(`/user/${post.username}`);
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      className="post-panel-mini-container"
      onClick={() => enableFullView(post)}
    >
      <header className="post-panel-mini-header">
        <span className='tag tag-uncategorized' onClick={(e) => {handleCategoryClick(e);}}>Uncategorized</span>
        <h1 className="post-panel-mini-title">{post.title}</h1>
        <span className="post-panel-mini-publish-wrapper">
          <span>
            By: <a className="post-panel-mini-username" onClick={(e) => {handleUsernameClick(e);}}>
              {post.username}
            </a>
            <span> @ <time>{post.post_date}</time></span>
          </span>
        </span>
      </header>
      <p className="post-panel-mini-snippet">{post.body}</p>
    </article>
  );
};

export default PostPanelMini;
