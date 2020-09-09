//---------Comments-------------------------------------------------
//Maybe just set isLoggedIn to false to allow the user to copy
// the blog post's content before it is lost during transition to the sign in page
//A single console.log was purposely left intact as a placeholder for a more appropriate response handling
// for the frontend's rejection of the post submission.
//-----------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { useHistory } from "react-router-dom";

import { fetchSubmitPost, fetchIsLoggedIn } from "../../helpers/getData";

import "./CreatePost.css";

// const URL_SUBMITPOST = "http://localhost:3005/submitPost/";
// const URL_AUTH = "http://localhost:3005/auth/";

const URL_SUBMITPOST = "https://blog-api-1123.herokuapp.com/" + "submitPost/";
const URL_AUTH = "https://blog-api-1123.herokuapp.com/" + "auth/";

const CreatePost = ({ user, setIsLoggedIn }) => {
  const history = useHistory();
  //-----------Auth------------------
  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const username = await fetchIsLoggedIn(URL_AUTH);
      if (!username) {
        alert("Please Sign in again.");
        setIsLoggedIn(false);
        history.push("/signin");
      }
    };
    checkIsLoggedIn();
  }, []);
  //----------------------------------------

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
    if (
      typeof title === "string" &&
      typeof textarea === "string" &&
      title &&
      textarea &&
      user //In case state was access illegally
    ) {
      let response = await fetchSubmitPost(URL_SUBMITPOST, {
        title: title,
        content: textarea,
        user_id: user.user_id,
      });
      if (response.status) {
        alert("Submission Successful");
        resetFields(e);
      } else {
        alert("Submission Failed: " + response.comment);
        setIsLoggedIn(false);
      }
    } else {
      // console.log("Submission Failed: Please Fill All Fields");
    }
  };

  const resetFields = (e) => {
    e.preventDefault();
    if (title !== "" || textarea !== "") {
      unstable_batchedUpdates(() => {
        setTitle("");
        setTextarea("");
      });
    }
  };

  return (
    <section className="post-create-section">
      <article className="post-create-container">
        <h1 className="post-create-header">Create a Blog Post</h1>
        <form className="post-create-form" onSubmit={onFormSubmit}>
          <span className="post-create-title-wrapper">
            <label className="post-create-title-label" for="title">
              Title:{" "}
            </label>
            <input
              className="post-create-title"
              type="text"
              placeholder="title"
              id="title"
              maxLength="50"
              value={title}
              onChange={onTitleChange}
              autoFocus
              required
            />
          </span>

          <textarea
            className="post-create-textarea"
            placeholder="content..."
            value={textarea}
            onChange={onTextareaChange}
            required
          />

          <span className="post-create-button-wrapper">
            <input
              className="post-button button post-button-submit"
              type="Submit"
              value="Submit"
              onClick={handleSubmit}
            />
            <input
              className="post-button button"
              type="button"
              value="Clear"
              onClick={resetFields}
            />
          </span>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
