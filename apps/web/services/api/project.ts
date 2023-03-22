import { ProjectSubmissionDto } from "@basis-climate/contract";
import { Project } from "@prisma/client";
import { api } from "./api";

export const getProjectSubmissions = () => {
  return api.get<ProjectSubmissionDto[]>("/form/submissions");
};

export const getProjectById = async (id: number) => {
  return await api.get<Project>(`/projects/${id}`);
};

//TODO: This should only show projects tied to the user
export const getProjects = async () => {
  return await api.get<Project[]>(`/projectsAll`);
};
