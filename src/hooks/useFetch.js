import { useState, useEffect } from "react";
import { getDataFetch, checkLocalStorage } from "./utils/customHookUtils";

const useFetch = (url, group, flag) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let recipe;
    const fetchData = async () => {
      // try {
      recipe = await getDataFetch(url);

      if (!recipe.ok) {
        console.log("error fetching useFetch");
        return setData({ ok1: false, message: recipe.message });
      }

      if (!flag) {
        setData(recipe);
        localStorage.setItem(group, JSON.stringify(recipe));
        localStorage.setItem("time", new Date().toDateString());
        setLoading(true);

        return;
      }
      localStorage.setItem(group, JSON.stringify(recipe.data.recipes));
      setData(recipe.data.recipes);
      localStorage.setItem("time", new Date().toDateString());
      setLoading(true);

      // } catch (e) {
      //   console.log("Error usefetch", e);
      // }
    };
    const checkData = checkLocalStorage(group);

    if (
      checkData.ok &&
      localStorage.getItem("time") === new Date().toDateString()
    ) {
      setData(JSON.parse(checkData.data));
      setLoading(true);
    } else {
      if (flag) {
        localStorage.clear();
      }
      fetchData();
    }
  }, [url, group, flag]);

  return { data, loading };
};

export default useFetch;
