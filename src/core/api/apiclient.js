import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://example.com/api",
  timeout: 5000
});

export default apiClient;