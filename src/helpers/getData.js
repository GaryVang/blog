const AjaxHelper = (str) => {
  // return ('Ajax Helper');
  console.log(str);
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
    .then((res) => res.json())
    .then((data) => result = data);
    // .then((data) => {
    //   if (data.username) {
    //     setResult(data);
    //   } else {
    //     console.log("Error On Initial Load: ", data.comment);
    //   }
    // });

    return result;
};

module.exports = {
  AjaxHelper,
  fetchPosts,
};
