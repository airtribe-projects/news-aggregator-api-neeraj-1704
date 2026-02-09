import axios from "axios";
import { newsApiBaseUrl } from "../../cofig/env.js";

const apiClient = axios.create({
  baseURL: newsApiBaseUrl,
  timeout: 5000,
});

// Request Logger
apiClient.interceptors.request.use((req) => {
  console.log("API Request:", req.baseURL + req.url);
  return req;
});

export default apiClient;
