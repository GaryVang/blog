//Placeholder for future data fetching hook

import React, { useState, useEffect } from "react";

const useFetchPost = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      console.log('useFetchPost');
    const fetchPost = async () => {
      await fetch(url,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(res => res.json())
        .then(data => {
            if(data.username) {
                setResult(data);
            } else {
                console.log("Error On Initial Load: ", data.comment);
            }
        });
    };
    fetchPost();
  }, []);

  return {
    isLoading,
    result,
    error,
  };
};

export default useFetchPost;
