import { useProjectSubmissionsQuery } from "@basis-climate/data-access";
import { Center, Spinner } from "@chakra-ui/react";

import { Layout } from "../../components/layout";
import { ProjectSubmissionsTable } from "../../components/project-submissions-table";
import { auth0 } from "../../auth0";

export function ProjectSubmissions() {
  const { data: projectSubmissions = [], isLoading } =
    useProjectSubmissionsQuery();

  return (
    <Layout
      main={
        isLoading ? (
          <Center minWidth="100%" minHeight="600px">
            <Spinner variant="page" />
          </Center>
        ) : (
          <>
            <ProjectSubmissionsTable projects={projectSubmissions} />
          </>
        )
      }
    />
  );
}

export const getServerSideProps = auth0.withPageAuthRequired();

export default ProjectSubmissions;
