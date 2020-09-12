const URL_API = "http://localhost:3005/";
// const URL_API = "https://blog-api-1123.herokuapp.com/";

const fetchIsLoggedIn = async () => {
  let user;
  await fetch(URL_API + "auth/", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        user = data;
      }
    });
  return user;
};

const fetchHomeInitial = async (query) => {
  let result;
  await fetch(URL_API + query, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (result = data));
  return result;
};

const fetchPosts = async (page, query) => {
  let result;
  await fetch(URL_API + "getPosts/" + page + query, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json()) //Extracts the json body content from the response
    .then((data) => {
      if (data.status) {
        result = data.data;
      } else {
        console.log("Error: ", data.comment);
      }
    });

  return result;
};

const fetchSignIn = async (username, password) => {
  let response;
  await fetch(URL_API + 'signin', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
    });

  return response;
};

const fetchRegister = async (username, password) => {
  let response;
  await fetch(URL_API + "register", {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => (response = data));
  return response;
};

const fetchLogout = async () => {
  await fetch(URL_API + "logout", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(console.log);
};

const fetchSubmitPost = async (post) => {
  let response;
  await fetch(URL_API + "submitPost/", {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => (response = data));

  return response;
};

const fetchUserProfile = async (username) => {
  let response;
  await fetch(URL_API + "user/" + username, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (response = data));

  return response;
};

// module.exports = {
//   fetchIsLoggedIn,
//   fetchHomeInitial,
//   fetchPosts,
//   fetchSignIn,
//   fetchRegister,
//   fetchLogout,
//   fetchSubmitPost,
//   fetchUserProfile,
// };

export {
  fetchIsLoggedIn,
  fetchHomeInitial,
  fetchPosts,
  fetchSignIn,
  fetchRegister,
  fetchLogout,
  fetchSubmitPost,
  fetchUserProfile
};