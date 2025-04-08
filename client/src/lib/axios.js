import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fallon-studio-task.onrender.com/api/v1",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
