import React from "react";
import { Link } from "react-router-dom";

import NavItemEffect from './NavItemEffect';

import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "./Navbar.css";

const Navbar = ({ isLoggedIn, user, handleLogout }) => {

  return (
    <nav className={!isLoggedIn ? "navbar-container" : "navbar-container-loggedin"} >
      <div className="navbar-username"><span className="navbar-test">Username<ArrowDropDownIcon color="secondary"/></span></div>
      <div className="navbar-search">Search</div>
      <MenuIcon className="navbar-menu-icon" color="secondary"/>

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
