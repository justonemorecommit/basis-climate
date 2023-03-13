import { Layout } from "@basis-climate/design-system";
import { useEffect, useState } from "react";

import { ProjectForm } from "../components/project-form";
import { getFirstRecord } from "../services/api";
import { Project } from "@prisma/client";

export function Index() {
  const [firstRecord, setFirstRecord] = useState<Project>();

  useEffect(() => {
    getFirstRecord().then(({ data }) => setFirstRecord(data));
  }, []);

  return <Layout main={<ProjectForm initialValues={firstRecord} />} />;
}

export default Index;
