import { Module } from "@nestjs/common";

import { UsersController } from "./users.controller";
import { Auth0ManagementClientService } from "./auth0-management-client.service";
import { ProfileController } from "./profile.controller";

@Module({
  providers: [Auth0ManagementClientService],
  controllers: [UsersController, ProfileController],
})
export class AuthModule {}
