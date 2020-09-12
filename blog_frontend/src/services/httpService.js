import axios from "axios";
import config from "../config/default.json";

import auth from "./authservices";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.status < 500;
  if (!expectedError) {
    console.log("logging the error", error.response);
    if (
      (error.response.status === 401 &&
        error.response.statusText === "Unauthorized") ||
      (error.response.status === 403 &&
        error.response.statusText === "Forbidden")
    ) {
      // invalid token
      auth.logout();
      alert("Some error occurred Please login again");
      window.location = "/";
    }
  }
  return Promise.reject(error);
});
export function setToken(token) {
  if (token !== null)
    axios.defaults.headers.common[config.AuthTokenHeaderName] =
      config.AuthTokenHeaderAppend + token;
  else axios.defaults.headers.common[config.AuthTokenHeaderName] = "";
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setToken,
};
