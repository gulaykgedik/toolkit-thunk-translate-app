import axios from "axios";
const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "12c2022078msh338fda3b256abf8p1a0608jsn879dddf1a854",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
export default api;
