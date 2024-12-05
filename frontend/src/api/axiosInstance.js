import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(config => {
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config ;
},(error) => Promise.reject(error))

export default axiosInstance;
