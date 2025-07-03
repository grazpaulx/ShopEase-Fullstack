// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7008/api", // change if needed
});

export default api;
