import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

import { fetchSubmitPost } from "../../helpers/getData";

import "./CreatePost.css";

const URL_SUBMITPOST = "http://localhost:3005/submitPost/";

const CreatePost = (
  {
    // user
  }
) => {
  const x = console.log("Create Post");

  //-------Test Variables------------
  const user = "TestUser";
  //---------------------------------

  const [title, setTitle] = useState("");
  const [textarea, setTextarea] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if ( typeof title === 'string' && typeof textarea === 'string' &&
      title &&
      textarea &&
      (await fetchSubmitPost(URL_SUBMITPOST, {
        title: title,
        content: textarea,
        user_id: user.user_id,
      }))
    ) {
      console.log("submission successful");
      resetFields();
    } else {
      console.log("submission failed");
    }
  };

  const resetFields = () => {
    unstable_batchedUpdates(() => {
      setTitle("");
      setTextarea("");
    });
  };

  return (
    <article className="post-create-container">
      <h1>Create a Blog Post</h1>
      <form className="post-create-form" onSubmit={onFormSubmit}>
        <span className="post-create-title-wrapper">
          <label for="title">Title: </label>
          <input
            className="post-create-title"
            type="text"
            placeholder="title"
            id="title"
            maxLength="50"
            value={title}
            onChange={onTitleChange}
          />
        </span>

        <textarea
          className="post-create-textarea"
          placeholder="content..."
          value={textarea}
          onChange={onTextareaChange}
        ></textarea>

        <span className="button-wrapper">
          <input
            className="post-button button"
            type="Submit"
            value="Submit"
            onClick={handleSubmit}
          />
          <input className="post-button button" type="button" value="Clear" />
        </span>
      </form>
    </article>
  );
};

export default CreatePost;
