import { Layout } from "@basis-climate/design-system";
import { useEffect, useState } from "react";

import { ProjectForm } from "../components/project-form";
import { Project } from "@prisma/client";

export function Index() {
  const [firstRecord, setFirstRecord] = useState<Project>();

  return <Layout main={<ProjectForm initialValues={firstRecord} />} />;
}

export default Index;
