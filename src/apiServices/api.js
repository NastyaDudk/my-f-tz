import axios from "axios";

const api = axios.create({
  baseURL: "https://66617b9563e6a0189fea19b8.mockapi.io/api/leasing",
});

export default api;
