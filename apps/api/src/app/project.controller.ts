import { Controller, Get, Param } from "@nestjs/common";

import { ProjectService } from "../services/project.service";

@Controller("projects")
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get("/:projectId")
  async getProjectById(@Param("projectId") projectId: string) {
    const project = await this.projectService.getProjectById(Number(projectId));

    return project;
  }
}
