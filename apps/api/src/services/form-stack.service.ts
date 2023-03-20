import { Injectable } from "@nestjs/common";
import { DateTime } from "luxon";

@Injectable()
export class FormStackService {
  static readonly formIds = {
    projectIntake: "5207922",
  };

  static parseDate(dateString: string) {
    return DateTime.fromFormat(dateString, "DD", {
      zone: "UTC",
    });
  }
}
