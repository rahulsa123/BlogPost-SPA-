import http from "./httpService";
import { setToken } from "./httpService";
import config from "../config/default.json";

const apiEndPoint = config.apiEndPoint + "/auth";
const tokenKey = "token";
const userId = "user_id";
const userName = "username";
if (getToken() !== null) setToken(getToken());

export async function login(username, password) {
  const { data } = await http.post("http://localhost:8000/api/v1/login/", {
    username,
    password,
  });
  localStorage.setItem(tokenKey, data[tokenKey]);
  localStorage.setItem(userId, data[userId]);
  localStorage.setItem(userName, data[userName]);
}

export function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

export async function logout() {
  await http.post(apiEndPoint + "/logout/");
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userId);
  localStorage.removeItem(userName);
}
export function getCurrentUserId() {
  const user_id = localStorage.getItem(userId);
  return user_id;
}

export function getCurrentUserName() {
  return localStorage.getItem(userName);
}
export function getToken() {
  return localStorage.getItem(tokenKey);
}
export default {
  login,
  logout,
  getCurrentUserId,
  getToken,
  getCurrentUserName,
};
