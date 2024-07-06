import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.response.use(null, (error) => {
    return Promise.reject(error);
});

const setJwt = (jwt) => {
    axios.defaults.headers.common["x-auth-token"] = jwt;
};

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};
