import http from "./httpService";
import config from "../config/default.json";

const apiEndPoint = config.apiEndPoint + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(username, password) {
  const { data: token } = await http.post(apiEndPoint + "/login", {
    username,
    password,
  });
  localStorage.setItem(tokenKey, token);
}

export function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
