import { useState } from "react";
import { Project } from "@prisma/client";
import { Layout } from "@basis-climate/design-system";

import { ProjectForm } from "../components/project-form";

export function Index() {
  const [firstRecord] = useState<Project>();

  return (
    <Layout
      main={
        <>
          <ProjectForm initialValues={firstRecord} />
        </>
      }
    />
  );
}

export default Index;
