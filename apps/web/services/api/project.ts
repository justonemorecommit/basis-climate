import { ProjectSubmissionDto } from "@basis-climate/contract";
import { api } from "./api";

export const getProjectSubmissions = () => {
  return api.get<ProjectSubmissionDto[]>("/form/submissions");
};
