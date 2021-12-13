import axios from "axios";
import authHeader from "../utils/authHeader";

const API_URL = process.env.VUE_APP_API_URL;

export const day = () => {
  return axios.get(API_URL + "analytics/day/", { headers: authHeader() });
};

export const heatmapData = () => {
  return axios.get(API_URL + "analytics/heatmap/", { headers: authHeader() });
};

export const seriesData = (t) => {
  return axios.get(API_URL + "analytics/series/" + t + "/", { headers: authHeader() });
};




