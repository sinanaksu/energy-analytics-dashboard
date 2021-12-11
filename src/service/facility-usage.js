import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = process.env.VUE_APP_API_URL;

export const getAll = (params) => {
  return axios.post(API_URL + "facility/usage/list", params, { headers: authHeader() });
};

export const create = (params) => {
  return axios.post(API_URL + "facility/usage/", params, { headers: authHeader() });
};

export const update = (params) => {
  return axios.put(API_URL + "facility/usage/", params, { headers: authHeader() });
};

export const remove = (params) => {
  return axios.delete(API_URL + "facility/usage/", { data: params, headers: authHeader() });
};
