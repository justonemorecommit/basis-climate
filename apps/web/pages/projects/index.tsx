import { useProjectsQuery } from "@basis-climate/data-access";

import { ProjectTable } from "../../components/project-table";
import { Layout } from "../../components/layout";

export function Index() {
  const { data: projects = [] } = useProjectsQuery();

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
