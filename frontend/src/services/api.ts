import axios from "axios";

const URL =
  process.env.REACT_APP_URL_PRODUCTION ?? process.env.REACT_APP_BASE_URL;

export const api = axios.create({
  baseURL: `${URL}`,
});
