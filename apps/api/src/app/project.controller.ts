import { Controller, Get, Param } from "@nestjs/common";
import { ProjectSubmissionDto } from "@basis-climate/contract";

import { ProjectService } from "../services/project.service";

@Controller("projects")
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get("/")
  async getProjects() {
    const projects = await this.projectService.getProjects();
    return projects;
  }

  @Get("/submissions")
  async getProjectIntakeSubmissions(): Promise<ProjectSubmissionDto[]> {
    return await this.projectService.getProjectSubmissions();
  }

  @Get("/:projectId")
  async getProjectById(@Param("projectId") projectId: string) {
    const project = await this.projectService.getProjectById(Number(projectId));

    return project;
  }
}
