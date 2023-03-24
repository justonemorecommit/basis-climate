import { Module } from "@nestjs/common";

import { AuthzModule } from "../authz/authz.module";
import { AppController } from "./app.controller";
import { ProjectService } from "../services/project.service";
import { PrismaService } from "../services/prisma.service";
import { FormStackService } from "../services/form-stack.service";
import { ProjectController } from "./project.controller";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [AuthzModule, AuthModule],
  controllers: [AppController, ProjectController],
  providers: [PrismaService, ProjectService, FormStackService],
})
export class AppModule {}
