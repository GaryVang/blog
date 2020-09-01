import React, { useState, useEffect, useLayoutEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import useFetchPost from "./hooks/useFetchPost";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import UserProfile from "./pages/User/UserProfile";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Post from "./pages/Post/Post";

import { fetchIsLoggedIn } from "./helpers/getData";

import "./App.css";

const App = () => {
  console.log('App');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // useLayoutEffect(() => {
    const checkIsLoggedIn = async () => {
      const username = await fetchIsLoggedIn("http://localhost:3005/auth/");
      if (username) {
        setUser(username);
        setIsLoggedIn(true);
      }
    };
    checkIsLoggedIn();
  }, []);

  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(false);
    setIsLoggedIn(false);
  };


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/post" render={() => <Post />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/signin" render={() => <SignIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route exact path="/user" render={() => <UserProfile />} />
      </Switch>
    </div>
  );
};

export default App;
