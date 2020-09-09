import React from "react";
import { useHistory } from "react-router-dom";

import "./PostPanelMini.css";

const PostPanelMini = ({ post, enableFullView }) => {
  const history = useHistory();

  const handleUsernameClick = (e) => {
    e.stopPropagation();
    history.push(`/user/${post.username}`);
  };

  return (
    <article
      className="post-panel-mini-container"
      onClick={() => enableFullView(post)}
    >
      <header>
        <h1 className="post-panel-mini-title">{post.title}</h1>
        <span className="post-panel-mini-publish-wrapper">
          <span>
            By <a className="post-panel-mini-username" onClick={(e) => {handleUsernameClick(e);}}>
              {post.username}
            </a>
          </span>
          <time>Published {post.post_date}</time>
        </span>
        <p className="post-panel-mini-snippet">{post.body}</p>
      </header>
    </article>
  );
};

export default PostPanelMini;
