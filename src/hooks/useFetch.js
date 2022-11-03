import { useState, useEffect } from "react";
import { getDataFetch, checkLocalStorage } from "./utils/customHookUtils";

const useFetch = (url, group, flag) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let recipe;
    const fetchData = async () => {
      recipe = await getDataFetch(url);
      if (!recipe.ok) {
        console.log("error fetching useFetch");
        return setData([]);
      }
      if (!flag) {
        setData(recipe);
        localStorage.setItem(group, JSON.stringify(recipe));
        localStorage.setItem("time", new Date().toDateString());
        return;
      }
      localStorage.setItem(group, JSON.stringify(recipe.data.recipes));
      setData(recipe.data.recipes);
      localStorage.setItem("time", new Date().toDateString());
    };
    const checkData = checkLocalStorage(group);

    if (
      checkData.ok &&
      localStorage.getItem("time") === new Date().toDateString()
    ) {
      setData(JSON.parse(checkData.data));
      // if (localStorage.getItem("time") == new Date().toDateString()) {
      //   console.log("time true");
      // } else {
      //   console.log("time false");
      // }
    } else {
      if (flag) {
        localStorage.clear();
      }
      fetchData();
    }
  }, [url, group, flag]);

  return { data };
};

export default useFetch;
