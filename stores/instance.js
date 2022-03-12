import axios from "axios";

export const baseURL = "http://192.168.74.114:5000";
export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

// export default instance;
