import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn, user }) => {
  return (
    <nav
      className={!isLoggedIn ? "navbar-container" : "navbar-container-loggedin"}
    >
      {isLoggedIn ? (
        <li className="nav-item-username">{user.username}</li>
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
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                User Profile
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
                setIsLoggedIn(false);
              }}
            >
              <Link className="nav-link" to="/signin">
                Signout
              </Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>

    // <nav
    //   className={!isLoggedIn ? "navbar-container" : "navbar-container-loggedin"}
    // >
    //   {isLoggedIn ? <li className="nav-item-username">{user}</li> : null}
    //   <ul className="navbar">
    //     <li className="nav-item">Home</li>
    //     <li className="nav-item">Blog</li>

    //     {!isLoggedIn ? (
    //       <React.Fragment>
    //         <li className="nav-item">SignIn</li>
    //         <li className="nav-item">Register</li>
    //       </React.Fragment>
    //     ) : null}

    //     {isLoggedIn ? (
    //       <li
    //         className="nav-item"
    //         onClick={() => {
    //           setIsLoggedIn(false);
    //         }}
    //       >
    //         Signout
    //       </li>
    //     ) : null}
    //   </ul>
    // </nav>
  );
};

export default Navbar;
