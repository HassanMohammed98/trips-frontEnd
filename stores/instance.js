import axios from "axios";

export const baseURL = "http://192.168.8.147:5000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

// export default instance;
