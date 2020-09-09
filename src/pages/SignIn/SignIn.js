import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { useHistory } from "react-router-dom";

import { fetchSignIn } from "../../helpers/getData";

import "./SignIn.css";

const URL_SIGNIN = "http://localhost:3005/signin";

const SignIn = ({ setIsLoggedIn, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //disables default form behavior
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    if (usernameValidation(username) && passwordValidation(password)) {
      let result = await fetchSignIn(URL_SIGNIN, username, password);
      if (result.status) {
        unstable_batchedUpdates(() => {
          setIsLoggedIn(true);
          setUser({ username: result.username, user_id: result.user_id });
          resetUsernamePassword();
        });
        history.push("/");
      } else {
        alert(result.comment);
      }
    }
  };

  const resetUsernamePassword = () => {
    setUsername("");
    setPassword("");
  };

  const handleClear = (e) => {
    if (username !== "" || password !== "") {
      resetUsernamePassword();
    }
  };

  const usernameValidation = (str) => {
    if (str.length < 6) {
      alert("Username Must be longer than 6 characters");
      return false;
    } else if (/[^a-zA-Z0-9]/.test(str)) {
      alert("Username can only be alphanumeric");
      return false;
    }
    return true;
  };

  const passwordValidation = (str) => {
    if (str.length === 0) {
      alert("Password cannot be blank");
      return false;
    } else if (str.length < 8) {
      alert("Password Minimum 8 characters");
      return false;
    } else if (str.length > 64) {
      alert("Password Surpassed the 64 character limit");
      return false;
    }
    return true;
  };

  return (
    <section className="signin-section">
      <div className="signin-container">
        <h1>Sign in to your Blog</h1>

        <form className="signin-form" onSubmit={onFormSubmit}>
          <label className="signin-label-username" for="username">
            Username
          </label>
          <input
            className="signin-input-username"
            type="text"
            id="username"
            maxLength="20"
            value={username}
            onChange={onUsernameChange}
            autoFocus
            required
          />

          <label className="signin-label-password" for="password">
            Password
          </label>
          <input
            className="signin-input-password"
            type="text"
            id="password"
            maxLength="60"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <span className="signin-button-wrapper">
            <input
              className="signin-button button sign-button-submit"
              type="Submit"
              value="Log In"
              onClick={handleSubmit}
            />
            <input
              className="signin-button button"
              type="button"
              value="Clear"
              onClick={handleClear}
            />
          </span>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
