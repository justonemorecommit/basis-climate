import { SubresourceIntegrityAlgorithm } from "next/dist/build/webpack/plugins/subresource-integrity-plugin";

export class ProjectIntakeSubmissionDto {
  FormID: string;
  UniqueID: string;
  project_summary_details: {
    value: string;
    type: string;
  };
  project_sponsor: {
    value: {
      first: string;
      last: string;
    };
    type: string;
  };
  name: {
    value: {
      first: string;
      last: string;
    };
    type: string;
  };
  email_address: {
    value: string;
    type: string;
  };
  project_type: {
    value: string[];
    type: SubresourceIntegrityAlgorithm;
  };
  asset_types: {
    value: string[];
    type: string;
  };
  total_dc_capacity_: { value: string; type: string };
  fair_market_value: { value: string; type: string };
  cost_to_construct: { value: string; type: string };
  estimated_completion_date: { value: string; type: string };
}
