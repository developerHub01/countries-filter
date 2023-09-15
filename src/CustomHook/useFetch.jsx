// ========= customFetch ============
// ======== fetch data using async await ===========

import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [getError, setGetError] = useState(null);
  const fetchData = async () => {
    setIsloading((prev) => true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setData((prev) => data);
      setIsloading((prev) => false);
      setGetError((prev) => null);
    } catch (err) {
      setGetError((prev) => err);
      setIsloading((prev) => false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, getError };
};

export default useFetch;
