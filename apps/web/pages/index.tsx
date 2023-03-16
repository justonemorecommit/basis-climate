import { useEffect, useState } from "react";
import { Project } from "@prisma/client";
import { Button, Layout } from "@basis-climate/design-system";

import { ProjectForm } from "../components/project-form";
import {
  testApiOne,
  testApiTwo,
  testApiThree,
  testApiFourth,
} from "../services/api/auth";

export function Index() {
  const [firstRecord, setFirstRecord] = useState<Project>();

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
