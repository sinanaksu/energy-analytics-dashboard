import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = "http://localhost:5000/v1/";

export const login = (user) => {
  return axios.post(API_URL + "user/login", {
    email: user.email,
    password: user.password,
  });
};

export const logout = () => {
  localStorage.removeItem("user");
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
