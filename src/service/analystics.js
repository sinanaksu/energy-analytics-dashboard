import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = process.env.VUE_APP_API_URL;

export const day = () => {
  console.log(authHeader());
  return axios.get(API_URL + "analytics/day/", { headers: authHeader() });
};
