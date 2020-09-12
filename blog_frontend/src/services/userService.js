import http from "./httpService";
import config from "../config/default.json";
import authservices from "./authservices";
import axios from "axios";

export async function register(username, password1, password2) {
  await http.post(config.apiEndPoint + "/auth/registration/", {
    username,
    password1,
    password2,
  });
  // after successful registration login user
  await authservices.login(username, password1);
}
export async function getProfile(id) {
  return await http.get(`${config.apiEndPoint}/user/${id}/`);
}
export async function updateProfile(id, data) {
  const form = new FormData();
  for (let key in data) form.append(key, data[key]);

  return await http.put(`${config.apiEndPoint}/user/${id}/`, form);
}
export async function updateProfilePic(id, data) {
  const form = new FormData();
  form.append("profile.image", data["profile.image"]["current"].files[0]);

  return await axios({
    method: "put",
    url: `${config.apiEndPoint}/user/${id}/`,
    data: form,
    headers: {
      "content-type": `multipart/form-data; boundary=${form._boundary}`,
    },
  });
}

export default {
  register,
  getProfile,
  updateProfile,
  updateProfilePic,
};
