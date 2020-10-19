import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavItemEffect from './NavItemEffect';

import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "./Navbar.css";
import { red } from "@material-ui/core/colors";

const Navbar = ({ isLoggedIn, user, handleLogout }) => {

  const [userMenuHover, setUserMenuHover] = useState(false);

  const handleOnUserMenuHover = () => {
    setUserMenuHover(true);
  };

  const handleOnUserMenuExit = () => {
    setUserMenuHover(false);
  };

  return (
    <nav className={!isLoggedIn ? "navbar-container" : "navbar-container-loggedin"} >
      
      {/* -----------Collapsed Nav Menu Icon------------ */}
          {/* <button className='navbar-menu-toggle-nav'>
            <MenuIcon  fontSize="large" className="navbar-menu-icon" color="secondary" aria-label="toggle-navigation" aria-expanded="false" />
          </button>

          <MenuIcon className="navbar-menu-icon" color="secondary" aria-label="toggle-navigation" aria-expanded="false"/> */}
      {/* ----------------------     */}
      
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
            <li className="nav-dropdown">
              <details className="navbar-menu-user" open={userMenuHover} onMouseEnter={handleOnUserMenuHover} onMouseLeave={handleOnUserMenuExit}>
                <summary className="details-summary" >{user.username}<ArrowDropDownIcon color="secondary"/></summary>
                <div className="navbar-dropdown-menu">
                  <ul className='dropdown-menu-ul'>
                    {/* <li><NavItemEffect className="dropdown-menu-effect"/>Effect - OnClick</li> */}
                    <li><Link className="dropdown-menu-link" exact to={`/user/${user.username}`} ><NavItemEffect />My Blog</Link></li>
                    <li>Dashboard - Under Construction</li>
                    <li className="" onClick={() => { handleLogout(); handleOnUserMenuExit();}}>
                      Signout
                    </li>
                  </ul>
                </div>
              </details>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/post" ><NavItemEffect />Create a Post</Link>
            </li>
            {/* <li className="nav-item" onClick={() => { handleLogout(); }}>
              <Link className="nav-link" ><NavItemEffect />Signout</Link>
            </li> */}
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
