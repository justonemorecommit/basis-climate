import { Injectable } from "@nestjs/common";
import { Project, ProjectSubmission } from "@prisma/client";
import { ProjectSubmissionDto } from "@basis-climate/contract";

import { PrismaService } from "./prisma.service";

export type ProjectSubmissionCreateDto = Omit<ProjectSubmission, "id">;

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  // TODO: Remove the following method when you refactor
  getFirstProject(): Promise<Project> {
    return this.prisma.project.findFirst();
  }

  getProjectById(id: number): Promise<Project> {
    return this.prisma.project.findUnique({
      where: {
        id,
      },
    });
  }

  createProjectSubmission(
    input: ProjectSubmissionCreateDto
  ): Promise<ProjectSubmission> {
    return this.prisma.projectSubmission.create({
      data: input,
    });
  }

  async getProjectSubmissions(): Promise<ProjectSubmissionDto[]> {
    const projectSubmissions = await this.prisma.projectSubmission.findMany();

    return projectSubmissions.map((i) => this.projectSubmissionToDto(i));
  }

  projectSubmissionToDto(
    projectSubmission: ProjectSubmission
  ): ProjectSubmissionDto {
    const projectSubmissionDto: ProjectSubmissionDto = {
      id: projectSubmission.id,
      emailAddress: projectSubmission.emailAddress,
      assetTypes: projectSubmission.assetTypes as string[],
      costToConstruct: projectSubmission.costToConstruct.toString(),
      estimatedCompletionDate:
        projectSubmission.estimatedCompletionDate.toISOString(),
      fairMarketValue: projectSubmission.fairMarketValue.toString(),
      name: {
        firstName: projectSubmission.firstName,
        lastName: projectSubmission.lastName,
      },
      projectSponsor: {
        firstName: projectSubmission.firstName,
        lastName: projectSubmission.lastName,
      },
    };

    return projectSubmissionDto;
  }
}
