// TODO: Remove the following eslint problem
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProjectSubmissionDto, ProjectDto } from "@basis-climate/contract";
import { Project } from "@prisma/client";
import useSWR from "swr";

import { fetcher } from "./api";

export const getProjectById = (id: number) =>
  fetcher<Project>(`/projects/${id}`);

export const getProjectSubmissions = () =>
  fetcher<ProjectSubmissionDto[]>("/form/submissions");

export const getProjects = () => fetcher<ProjectDto[]>("/projects");

export const useProjectSubmissionsQuery = () =>
  useSWR<ProjectSubmissionDto[]>("project-submissions", getProjectSubmissions);

export const useProjectQuery = (id: number) =>
  useSWR<Project>(["projects", id], (_: string, id: number) =>
    getProjectById(id)
  );

export const useProjectsQuery = () => useSWR("projects", getProjects);
