import Axios from "axios";
import { BASE_URL } from "../constants/appConstants";

export const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
