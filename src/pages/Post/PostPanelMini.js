import React from "react";

import './PostPanelMini.css';

const PostPanelMini = ({ post, enableFullView, disableFullView }) => {
    console.log(post);

  return (
    <article className="post-panel-mini-container" onClick={() => enableFullView(post)} >
      <header>
        <h1 className="post-panel-mini-title">{post.title}</h1>
        <span className="post-panel-mini-publish-wrapper">
          <a>By {post.username}</a>
          <time>Published {post.post_date}</time>
        </span>
        <p className="post-panel-mini-snippet">{post.body}</p>
      </header>
    </article>
  );
};

export default PostPanelMini;
