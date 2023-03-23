import { Layout } from "@basis-climate/design-system";

import { ProjectTable } from "../components/project-table";

import { useProjectsQuery } from "@basis-climate/data-access";

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
