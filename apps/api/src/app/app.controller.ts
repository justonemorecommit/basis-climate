import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Permissions } from "../permissions.decorator";
import { PermissionsGuard } from "../permissions.guard";

import { ProjectService } from "../services/project.service";

@Controller()
export class AppController {
  constructor(private readonly projectService: ProjectService) {}

  @Get("/public")
  async getPublic() {
    return "public";
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/first")
  async getData() {
    return await this.projectService.getFirstProject();
  }

  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Post("/second")
  @Permissions("one")
  async postAuthOne() {
    return "authone";
  }

  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Post("/third")
  @Permissions("two")
  async postAuthTwo() {
    return "authtwo";
  }
}
