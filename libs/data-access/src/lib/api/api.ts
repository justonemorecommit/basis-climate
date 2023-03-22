import axios from "axios";

import { config } from "../config";

export const api = axios.create({
  baseURL: config.apiUrl,
});

export function setAccessToken(accessToken: string) {
  api.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

export function fetcher<T = unknown>(url: string) {
  return api.get<T>(url).then((res) => res.data);
}
