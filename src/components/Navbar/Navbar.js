import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ isLoggedIn, user, handleLogout }) => {

  return (
    <nav
      className={!isLoggedIn ? "navbar-container" : "navbar-container-loggedin"}
    >
      {isLoggedIn ? (
        <li className="nav-item-username nav-item">
          <Link className="nav-link" to={`/user/${user.username}`}>{user.username}</Link>
        </li>
      ) : null}
      <ul className="navbar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/blog">
            Create a Post
          </Link>
        </li> */}

        {!isLoggedIn ? (
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/user">
                User Profile
              </Link>
            </li> */}

            {/* Remove after testing */}
            <li className="nav-item">
              <Link className="nav-link" to="/post">
                Create a Post
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/post">
                Create a Post
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLogout();
              }}
            >
              {/* //consider removing the redirect */}
              <Link className="nav-link" to="/signin">
                Signout
              </Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
