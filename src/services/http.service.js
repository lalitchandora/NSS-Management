import axios from "axios";
import authService from './auth.service';
axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.response.use(null, (error) => {
    return Promise.reject(error);
});

const setJwt = (jwt) => {
    axios.defaults.headers.common["x-auth-token"] = jwt;
};
const setAuthHeader = () => {
    const token = authService.getJwt();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };
  
  // Call this function before each request
  axios.interceptors.request.use((config) => {
    setAuthHeader();
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};
