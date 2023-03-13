import axios from "axios";

import { Project } from "./types";

const api = axios.create({
  baseURL: process.env.NX_API_URL,
});

export const getFirstRecord = () => {
  return api.get<Project>("/first");
};
