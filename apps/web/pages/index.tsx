import { useEffect, useState } from "react";
import { Project } from "@prisma/client";
import { Button, Layout } from "@basis-climate/design-system";

import { ProjectTable } from "../components/project-table";

import { getProjects } from "../services/api/project";


export function Index() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getProjects();
      setProjects(data);
    })();
  }, []);

  console.log("yo: ", projects);

  return (
    <Layout
      main={
        <>
          <ProjectTable projects={projects} />
        </>
      }
    />
  );
}

export default Index;
