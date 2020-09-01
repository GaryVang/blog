const AjaxHelper = (str) => {
  // return ('Ajax Helper');
  console.log(str);
};

const fetchIsLoggedIn = async (url) => {
  let username;
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
        username = data;
      }
    });
  return username;
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
  // .then((data) => {
  //   if (data.username) {
  //     setResult(data);
  //   } else {
  //     console.log("Error On Initial Load: ", data.comment);
  //   }
  // });

  return result;
};

const initHomeFetch = async (url) => {
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
  // .then((data) => {
  //   if (data.username) {
  //     setResult(data);
  //   } else {
  //     console.log("Error On Initial Load: ", data.comment);
  //   }
  // });

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
    // .then(console.log);
    // .then((data) => setPostArr(data));
    .then((data) => {
      if (data.status) {
        // setPostArr(data.data);
        result = data.data;
      } else {
        console.log("Error: ", data.comment);
      }
    });

  return result;
};

const fetchSignIn = async (url, username, password) => {
  let response;
  // const signin = await fetch("http://localhost:3005/signin", {
  await fetch(url, {
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
    .then((res) => res.json()) //Extracts the json body content from the response
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
    .then((res) => res.json()) //Extracts the json body content from the response
    .then((data) => (response = data));
  // .then(data => {return data})
  // console.log('res: ', res);
  return response;
};

module.exports = {
  fetchIsLoggedIn,
  AjaxHelper,
  fetchHomeInitial,
  fetchPosts,
  fetchSignIn,
  fetchRegister
};
