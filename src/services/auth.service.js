import http from "./http.service";

const tokenKey = "token";

const loginWithJwt = (jwt) => {
    localStorage.setItem(tokenKey, jwt);
};

const getJwt = () => localStorage.getItem(tokenKey);

const signup = async (data) => {
    try {
        const response = await http.post("auth/signup", data);
        loginWithJwt(response.data);
        http.setJwt(getJwt());
        return response.data;
    } catch (error) {
        return Promise.reject(error.response.data);
    }
};

const login = async (email, password) => {
    try {
        const response = await http.post("auth/login", { email, password });
        loginWithJwt(response.data);
        http.setJwt(getJwt());
        return response.data;
    } catch (error) {
        return Promise.reject(error.response.data);
    }
};

const logout = () => {
    localStorage.removeItem(tokenKey);
};

export default {
    signup,
    login,
    logout,
    getJwt,
    loginWithJwt,
};
