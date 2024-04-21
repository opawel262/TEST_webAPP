import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const backendApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

backendApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default backendApi;
