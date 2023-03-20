import { Module } from "@nestjs/common";

import { AuthzModule } from "../authz/authz.module";
import { AppController } from "./app.controller";
import { ProjectService } from "../services/project.service";
import { PrismaService } from "../services/prisma.service";
import { FormStackService } from "../services/form-stack.service";

@Module({
  imports: [AuthzModule],
  controllers: [AppController],
  providers: [PrismaService, ProjectService, FormStackService],
})
export class AppModule {}
