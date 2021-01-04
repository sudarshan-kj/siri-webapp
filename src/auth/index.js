import axios from "axios";
import config from "../config";

export const authAxios = () =>
  axios.create({
    baseURL: config.API_ENDPOINT,
    headers: {
      "x-req-id": "randomstring",
      "x-client-details": "onemorerandomthing",
    },
  });
