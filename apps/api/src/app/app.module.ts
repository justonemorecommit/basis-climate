import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { ProjectService } from "../services/project.service";
import { PrismaService } from "../services/prisma.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, ProjectService],
})
export class AppModule {}
