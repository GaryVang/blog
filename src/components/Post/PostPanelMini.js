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
      <header className="post-panel-mini-header">
        <span className='tag test-tag'>Uncategorized</span>
        {/* <span className='tag test-tag'>{String.fromCodePoint('0x1F60A')}</span> */}
        <h1 className="post-panel-mini-title">{post.title}</h1>
        <span className="post-panel-mini-publish-wrapper">
          <span>
            By: <a className="post-panel-mini-username" onClick={(e) => {handleUsernameClick(e);}}>
              {post.username}
            </a>
            <span> @ <time>{post.post_date}</time></span>
          </span>
          {/* <span> On <time>{post.post_date}</time></span> */}
          {/* <time>Published {post.post_date}</time> */}
        </span>
      </header>
      <p className="post-panel-mini-snippet">{post.body}</p>
    </article>
  );
};

export default PostPanelMini;
