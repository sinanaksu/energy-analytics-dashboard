import axios from "axios";
import store from "../store";
import authHeader from "../utils/authHeader";

const API_URL = process.env.VUE_APP_API_URL;

export const login = (user) => {
  return axios.post(API_URL + "user/login", {
    email: user.email,
    password: user.password,
  });
};

export const logout = () => {
  localStorage.removeItem("user");
  store.state.user = ''
};

export const register = (user) => {
  return axios.post(API_URL + "user/register", {
    email: user.email,
    password: user.password,
    name: user.name,
  });
};

export const getUser = () => {
  return axios.get(API_URL + "user/me", { headers: authHeader() });
};
