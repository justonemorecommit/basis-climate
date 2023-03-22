import axios from "axios";
import { config } from "@basis-climate/data-access";

export const api = axios.create({
  baseURL: config.apiUrl,
});
