// import axios
import axios from "axios";

export const APIv1 = axios.create({
  baseURL: "http://localhost:4001/api/v1",
});

export const APIExp = axios.create({
  baseURL: "http://localhost:4001/api/exp",
});

export const setAuthToken = (token) => {
  if (token) {
    APIv1.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete APIv1.defaults.headers.common["Authorization"];
  }
};
