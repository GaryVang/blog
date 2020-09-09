import React from "react";
import { Link } from "react-router-dom";

import NavItemEffect from './NavItemEffect';

import "./Navbar.css";

const Navbar = ({ isLoggedIn, user, handleLogout }) => {

  return (
    <nav className={!isLoggedIn ? "navbar-container" : "navbar-container-loggedin"} >
      {isLoggedIn ? (
        <li className="nav-item-username nav-item">
          <Link className="nav-link" exact to={`/user/${user.username}`} >{user.username}</Link>
        </li>
      ) : null}
      <ul className="navbar">
        <li className="nav-item">
          <Link className="nav-link" exact to="/" ><NavItemEffect />Home</Link>
        </li>
        {!isLoggedIn ? (
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" exact to="/signin" ><NavItemEffect />Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/register" ><NavItemEffect />Register</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" exact to="/post" ><NavItemEffect />Create a Post</Link>
            </li>
            <li className="nav-item" onClick={() => { handleLogout(); }}>
              <Link className="nav-link" ><NavItemEffect />Signout</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
