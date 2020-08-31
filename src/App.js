import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import useFetchPost from "./hooks/useFetchPost";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import UserProfile from "./pages/User/UserProfile";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Post from "./pages/Post/Post";

import "./App.css";

const App = () => {
  // const { isLoading, result, error } = useFetchPost("http://localhost:3005/");

  // const [onInitialLoad] = useState(false);
  // useEffect(() => {}, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" render={()=> (<Home />)} />
        <Route exact path="/post" render={()=> (<Post />)} />
        <Route exact path="/register" render={()=> (<Register />)} />
        <Route exact path="/signin" render={()=> (<SignIn />)} />
        <Route exact path="/user" render={()=> (<UserProfile />)} />
      </Switch>
    </div>
  );
};

export default App;
