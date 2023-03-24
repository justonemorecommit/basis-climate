import { ProfileUpdateDto, UserDto } from "@basis-climate/contract";
import { Body, Controller, Put, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

import { Auth0ManagementClientService } from "./auth0-management-client.service";

@Controller("profile")
export class ProfileController {
  constructor(private auth0: Auth0ManagementClientService) {}

  @Put("/")
  @UseGuards(AuthGuard("jwt"))
  async updateProfile(
    @Req() req: Request,
    @Body() profileUpdateDto: ProfileUpdateDto
  ): Promise<UserDto> {
    return this.auth0.client.updateUser(
      {
        id: req.user?.auth0Id,
      },
      profileUpdateDto
    );
  }
}
