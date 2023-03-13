import { Injectable } from "@nestjs/common";
import { Project } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  getFirstProject(): Promise<Project> {
    return this.prisma.project.findFirst();
  }
}
