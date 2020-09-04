import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { unstable_batchedUpdates } from "react-dom";

import { fetchRegister } from "../../helpers/getData";

import "./Register.css";

const URL_REGISTER = "http://localhost:3005/register";

const Register = ({}) => {
  const x = console.log("Register");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    console.log("Username: " + username, "Password: " + password);
    if (usernameValidation(username) && passwordValidation(password)) {
      let result = await fetchRegister(URL_REGISTER, username, password);
      if (result.status) {
        resetUsernamePassword();
        history.push("/signin");
      } else {
        alert(result.comment);
        setPassword("");
      }
    }
  };

  const resetUsernamePassword = () => {
    unstable_batchedUpdates(() => {
      setUsername("");
      setPassword("");
    });
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
    <section className="register-section">
      <div className="register-container">
        <h1>Create your Blog Account</h1>

        <form className="register-form" onSubmit={onSubmit}>
          <label className="label-username" for="username">
            Username
          </label>
          <input
            className="register-input-username"
            type="text"
            id="username"
            maxLength="20"
            value={username}
            onChange={onUsernameChange}
            autoFocus
            required
          />

          <label className="register-label-password" for="password">
            Password
          </label>
          <input
            className="register-input-password"
            type="text"
            id="password"
            maxLength="60"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <span className="register-button-wrapper">
            <input
              className="register-button-submit button"
              type="Submit"
              value="Create Account"
              onClick={handleSubmit}
            />
          </span>
        </form>
      </div>
    </section>
  );
};

export default Register;
