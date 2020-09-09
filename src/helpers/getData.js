const fetchIsLoggedIn = async (url) => {
  let user;
  await fetch(url, {
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

const fetchHomeInitial = async (url) => {
  let result;
  await fetch(url, {
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

const fetchPosts = async (url) => {
  let result;
  await fetch(url, {
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

const fetchSignIn = async (url, username, password) => {
  let response;
  await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-site",
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

const fetchRegister = async (url, username, password) => {
  let response;
  await fetch(url, {
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

const fetchLogout = async (url) => {
  await fetch(url, {
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

const fetchSubmitPost = async (url, post) => {
  let response;
  await fetch(url, {
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

const fetchUserProfile = async (url, username) => {
  let response;
  await fetch(url + username, {
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