import { Controller, Get, Post, UseGuards, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

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

  @Post("/form/webhook")
  async formWebhook(@Req() req: Request) {
    console.log(req.body);
    const { FormId: formId, UniqueId: requestId, ...formValues } = req.body;

    return "Success";
  }
}
