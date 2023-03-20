export class ProjectSubmissionDto {
  id: number;
  assetTypes: string[];
  costToConstruct: string;
  emailAddress: string;
  estimatedCompletionDate: string;
  fairMarketValue: string;
  name: {
    firstName: string;
    lastName: string;
  };
  projectSponsor: {
    firstName: string;
    lastName: string;
  };
}
