import axios from "axios";

// let post_data = {
//   count: 4,
//   next: null,
//   previous: null,
//   results: [
//     {
//       id: 1,
//       author: {
//         id: 1,
//         first_name: "rahul last",
//         last_name: "sahu update",
//         profile: {
//           image:
//             "http://localhost:8000/media/static/WhatsApp_Image_2020-05-14_at_10.18.00_AM_qxtYBNO.jpeg",
//         },
//       },
//       title: "First post updated",
//       body:
//         "As of the census[7] of 2000, 15,072 people, 5,583 households, and 4,092 families resided in the county. The population density was 16 people per square mile (6/km²). The 7,331 housing units averaged 8 per square mile (3/km²). The racial makeup of the county was 75.84% White, 20.69% Black, 0.63% Native American, 0.27% Asian, 0.03% Pacific Islander, 1.56% from other races, and 0.98% from two or more races. About 3.79% of the population was Hispanic or Latino of any race.",
//       created_at: "2020-08-31T15:52:14.908281",
//       updated_at: "2020-09-02T20:52:59.932303",
//     },
//     {
//       id: 2,
//       author: {
//         id: 1,
//         first_name: "rahul last",
//         last_name: "sahu update",
//         profile: {
//           image:
//             "http://localhost:8000/media/static/WhatsApp_Image_2020-05-14_at_10.18.00_AM_qxtYBNO.jpeg",
//         },
//       },
//       title: "second post",
//       body:
//         "As of the census[7] of 2000, 15,072 people, 5,583 households, and 4,092 families resided in the county. The population density was 16 people per square mile (6/km²). The 7,331 housing units averaged 8 per square mile (3/km²). The racial makeup of the county was 75.84% White, 20.69% Black, 0.63% Native American, 0.27% Asian, 0.03% Pacific Islander, 1.56% from other races, and 0.98% from two or more races. About 3.79% of the population was Hispanic or Latino of any race.",
//       created_at: "2020-08-31T16:44:18.813800",
//       updated_at: "2020-09-02T20:53:14.601175",
//     },
//     {
//       id: 3,
//       author: {
//         id: 1,
//         first_name: "rahul last",
//         last_name: "sahu update",
//         profile: {
//           image:
//             "http://localhost:8000/media/static/WhatsApp_Image_2020-05-14_at_10.18.00_AM_qxtYBNO.jpeg",
//         },
//       },
//       title: "by post method",
//       body:
//         "As of the census[7] of 2000, 15,072 people, 5,583 households, and 4,092 families resided in the county. The population density was 16 people per square mile (6/km²). The 7,331 housing units averaged 8 per square mile (3/km²). The racial makeup of the county was 75.84% White, 20.69% Black, 0.63% Native American, 0.27% Asian, 0.03% Pacific Islander, 1.56% from other races, and 0.98% from two or more races. About 3.79% of the population was Hispanic or Latino of any race.",
//       created_at: "2020-09-02T10:30:42.561227",
//       updated_at: "2020-09-02T20:53:08.434409",
//     },
//     {
//       id: 4,
//       author: {
//         id: 2,
//         first_name: "rohit",
//         last_name: "sahu",
//         profile: {
//           image:
//             "http://localhost:8000/media/static/zoe-reeve-9hSejnboeTY-unsplash.jpg",
//         },
//       },
//       title: "by post method",
//       body:
//         "As of the census[7] of 2000, 15,072 people, 5,583 households, and 4,092 families resided in the county. The population density was 16 people per square mile (6/km²). The 7,331 housing units averaged 8 per square mile (3/km²). The racial makeup of the county was 75.84% White, 20.69% Black, 0.63% Native American, 0.27% Asian, 0.03% Pacific Islander, 1.56% from other races, and 0.98% from two or more races. About 3.79% of the population was Hispanic or Latino of any race.",
//       created_at: "2020-09-02T10:33:27.692092",
//       updated_at: "2020-09-02T20:53:23.029163",
//     },
//   ],
// };
import http from "./httpService";
const apiEndPoint = "http://localhost:8000/api/v1";
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
