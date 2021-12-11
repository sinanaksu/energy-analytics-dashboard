import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = process.env.VUE_APP_API_URL;

export const getAll = () => {
  return axios.get(API_URL + "facility/", { headers: authHeader() });
};

export const create = (facility) => {
  return axios.post(API_URL + "facility/", facility, { headers: authHeader() });
};

export const update = (facility) => {
  return axios.put(API_URL + "facility/", facility, { headers: authHeader() });
};

export const remove = (facility) => {
  return axios.delete(API_URL + "facility/", { data: facility, headers: authHeader() });
};

