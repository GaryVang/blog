import React from "react";

const PostPanelMini = ({ post }) => {
    console.log(post);

  return (
    <article className="post-panel-mini">
      <header>
        <h1 className="post-title">{post.title}</h1>
        <span className="post-wrapper">
          <a>By {post.username}</a>
          {/* <div className="blog-post-seperator"> - </div> */}
          <time>Published {post.post_date}</time>
        </span>
        <p className="post-snippet">{post.body}</p>
      </header>
    </article>
  );
};

export default PostPanelMini;
