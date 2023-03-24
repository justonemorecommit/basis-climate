import { Module } from "@nestjs/common";

import { UsersController } from "./users.controller";
import { Auth0ManagementClientService } from "./auth0-management-client.service";

@Module({
  providers: [Auth0ManagementClientService],
  controllers: [UsersController],
})
export class AuthModule {}
