import axios from "axios";
const API_KEY = "api_key=f2276557f452d5e4f3dac26aab188cd0";
const BASE_URL = "https://api.themoviedb.org/3";

export const API = {
  async fetchTrendingMovies() {
    const response = await axios(`${BASE_URL}/trending/all/week?${API_KEY}`);
    return response.data;
  },

  async fetchMovieById(movieId) {
    const response = await axios(`${BASE_URL}/movie/${movieId}?${API_KEY}`);
    return response.data;
  },
};

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE4Nzk1ZDU5OWVmNTJhZTRjM2FhNiIsImlhdCI6MTY4MzMxMjE0NywiZXhwIjoxNjgzMzk0OTQ3fQ.soPy5B3Onad73TT3PLrDeOdIE0xEGMdVQUNc4vX9LgI";

// export async function getContacts() {
//   const response = await axios.get("http://localhost:3000/api/contacts", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// }
// export async function getContactsById(id) {
//   const response = await axios.get(`http://localhost:3000/api/contacts/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// }
