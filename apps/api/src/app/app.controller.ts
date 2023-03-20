import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Decimal } from "@prisma/client/runtime";
import { ProjectSubmissionDto } from "@basis-climate/contract";

import { ProjectIntakeSubmissionDto } from "../dtos/project-intake-submission.dto";
import { Permissions } from "../permissions.decorator";
import { PermissionsGuard } from "../permissions.guard";
import { FormStackService } from "../services/form-stack.service";
import {
  ProjectService,
  ProjectSubmissionCreateDto,
} from "../services/project.service";

function getProjectSubmissionCreateDto(
  input: ProjectIntakeSubmissionDto
): ProjectSubmissionCreateDto {
  return {
    formId: Number(input.FormID),
    submissionId: Number(input.UniqueID),
    assetTypes: input.asset_types.value,
    costToConstruct: new Decimal(input.cost_to_construct.value),
    emailAddress: input.email_address.value,
    estimatedCompletionDate: FormStackService.parseDate(
      input.estimated_completion_date.value
    ).toJSDate(),
    fairMarketValue: new Decimal(input.fair_market_value.value),
    firstName: input.name.value.first,
    lastName: input.name.value.last,
    projectSponsorFirstName: input.project_sponsor.value.first,
    projectSponsorLastName: input.project_sponsor.value.last,
  };
}

@Controller()
export class AppController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly formStackService: FormStackService
  ) {}

  @Get("/public")
  async getPublic() {
    return "public";
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/first")
  async getData() {
    return await this.projectService.getFirstProject();
  }

  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Post("/second")
  @Permissions("one")
  async postAuthOne() {
    return "authone";
  }

  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Post("/third")
  @Permissions("two")
  async postAuthTwo() {
    return "authtwo";
  }

  @Get("/form/submissions")
  async getProjectIntakeSubmissions(): Promise<ProjectSubmissionDto[]> {
    return await this.projectService.getProjectSubmissions();
  }

  @Post("/form/webhook")
  async formWebhook(@Body() input: ProjectIntakeSubmissionDto) {
    if (input.FormID === FormStackService.formIds.projectIntake) {
      await this.projectService.createProjectSubmission(
        getProjectSubmissionCreateDto(input)
      );
      return "Success";
    } else {
      throw new BadRequestException("Unknown form");
    }
  }
}
