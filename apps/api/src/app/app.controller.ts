import { Controller, Get } from "@nestjs/common";

import { ProjectService } from "../services/project.service";

@Controller()
export class AppController {
  constructor(private readonly projectService: ProjectService) {}

  @Get("/first")
  async getData() {
    return await this.projectService.getFirstProject();
  }
}
