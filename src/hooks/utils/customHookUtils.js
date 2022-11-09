export const getDataFetch = async (url) => {
  try {
    const api = await fetch(url);
    const data = await api.json();
    if (!data) {
      return {
        ok: false,
        message: "Error Server 502",
      };
    }
    if (data.status === "failure") {
      return {
        ok: false,
        message:
          "Problemas con el internet o has exedido el limite de peteciones al servidor",
      };
    }

    return { ok: true, data: data };
  } catch (e) {
    return { ok: false, message: "error Server catch" };
  }
};

export const checkLocalStorage = (groupName) => {
  const dataFromLocalStorage = localStorage.getItem(groupName);
  if (!dataFromLocalStorage) {
    return false;
  }
  return { ok: true, data: dataFromLocalStorage };
};
