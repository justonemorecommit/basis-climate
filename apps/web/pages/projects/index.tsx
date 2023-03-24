import { useProjectsQuery } from "@basis-climate/data-access";

import { ProjectTable } from "../../components/project-table";
import { Layout } from "../../components/layout";
import { auth0 } from "../../auth0";

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

export const getServerSideProps = auth0.withPageAuthRequired();

export default Index;
