import axios from "axios";
import http from "./httpService";
import config from "../config/default.json";
const apiEndPoint = config.apiEndPoint;

export async function getPost(id) {
  return http.get(`${apiEndPoint}/post/${id}/`);
}

export async function getPosts(url) {
  if (url === "") return http.get(apiEndPoint + "/");
  else return axios(url);
}
export async function updatePost(post) {
  return http.patch(`${apiEndPoint}/post/${post.id}/`, {
    id: post.id,
    title: post.title,
    body: post.body,
  });
}
export async function deletePost(post_id) {
  return http.delete(`${apiEndPoint}/post/${post_id}/`);
}
export async function createPost(title, body) {
  return http.post(`${apiEndPoint}/post/create/`, { title, body });
}
export default {
  getPost,
  getPosts,
  updatePost,
  deletePost,
  createPost,
};
