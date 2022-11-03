export const getDataFetch = async (url) => {
  const api = await fetch(url);
  const data = await api.json();
  if (!data) {
    return {
      ok: false,
      message: "error firts IF",
    };
  }
  if (data.status === "falure") {
    return {
      ok: false,
      message: "error second IF getData",
    };
  }

  return { ok: true, data: data };
};

export const checkLocalStorage = (groupName) => {
  const dataFromLocalStorage = localStorage.getItem(groupName);
  if (!dataFromLocalStorage) {
    return false;
  }
  return { ok: true, data: dataFromLocalStorage };
};
