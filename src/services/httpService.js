import axios from "axios";
import config from "../config/default.json";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.status < 500;
  if (!expectedError) {
    console.log("logging the error", error);
    // alert("An unexpected error occurred");
  }
  return Promise.reject(error);
});
function setToken(token) {
  axios.defaults.headers.common[config.AuthTokenHeaderName] =
    config.AuthTokenHeaderName + token;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken,
};
