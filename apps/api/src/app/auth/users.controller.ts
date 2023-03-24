import { UserDto } from "@basis-climate/contract";
import { Controller, Get } from "@nestjs/common";

import { Auth0ManagementClientService } from "./auth0-management-client.service";

@Controller("users")
export class UsersController {
  constructor(private auth0: Auth0ManagementClientService) {}

  @Get("/")
  async getUsers(): Promise<UserDto[]> {
    return this.auth0.client.getUsers();
  }
}
