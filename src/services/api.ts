import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

const api = axios.create({
  baseURL: API_URL,
  timeout: 12000,
});

export default api;
