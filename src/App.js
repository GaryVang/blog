import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { unstable_batchedUpdates } from "react-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import UserProfile from "./pages/User/UserProfile";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import CreatePost from './pages/CreatePost/CreatePost';

import { fetchIsLoggedIn, fetchLogout } from "./helpers/getData";

import "./App.css";

const URL_LOGOUT = "http://localhost:3005/logout";
const URL_AUTH = "http://localhost:3005/auth/";

const App = () => {
  console.log("App");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const username = await fetchIsLoggedIn(URL_AUTH);
      if (username) {
        unstable_batchedUpdates(() => {
          setUser(username);
          setIsLoggedIn(true);
        });
      }
    };
    checkIsLoggedIn();
  }, []);

  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await fetchLogout(URL_LOGOUT);
    unstable_batchedUpdates(() => {
      setUser(false);
      setIsLoggedIn(false);
    });
  };

  return (
    <div className="App">
      <header>
        <Navbar
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogout={handleLogout}
        />
      </header>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/post" render={() => <CreatePost user={user} />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route
          exact path="/signin"
          render={() => (<SignIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />)}
        />
        <Route exact path="/user/:username" render={() => <UserProfile />} />
      </Switch>
    </div>
  );
};

export default App;
