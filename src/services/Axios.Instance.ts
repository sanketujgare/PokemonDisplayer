import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});

axios.interceptors.response.use((response) => {
  try {
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
});
