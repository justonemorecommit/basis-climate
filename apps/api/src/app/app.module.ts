import { Module } from "@nestjs/common";

import { AuthzModule } from "../authz/authz.module";
import { AppController } from "./app.controller";
import { ProjectService } from "../services/project.service";
import { PrismaService } from "../services/prisma.service";

@Module({
  imports: [AuthzModule],
  controllers: [AppController],
  providers: [PrismaService, ProjectService],
})
export class AppModule {}
