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

  const renderCategorySwitch = (category_id) => {
    switch(category_id) {
      case 0:
        return 'uncategorized';
      case 1:
        return 'update';
      case 2:
        return 'important';
      case 11:
        return 'entertainment';
      case 12:
        return 'food';
      case 13:
        return 'general';
      case 14:
        return 'health';
      case 15:
        return 'life';
      case 16:
        return 'music';
      case 17:
        return 'news';
      case 18:
        return 'politics';
      case 19:
        return 'science';
      case 20:
        return 'sports';
      case 21:
        return 'technology';
      case 22:
        return 'medicine';
        // return 'uncategorized';
      default:
        return 'uncategorized';
    }
  };

  console.log('post: ', post.category);

  return (
    <article
      className="post-panel-mini-container"
      onClick={() => enableFullView(post)}
    >
      <header className="post-panel-mini-header">
        <span className={'tag ' + `tag-${renderCategorySwitch(post.category_id)}`} onClick={(e) => {handleCategoryClick(e);}}>{post.category_name}</span>
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
