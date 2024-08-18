import axios from "axios";

const api = axios.create({
  baseURL: "https://66bca28a24da2de7ff6b4f47.mockapi.io/api/cars",
});

export default api;
