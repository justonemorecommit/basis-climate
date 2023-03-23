import { useProjectSubmissionsQuery } from "@basis-climate/data-access";
import { Center, Spinner } from "@chakra-ui/react";

import { Layout } from "../../components/layout";
import { ProjectSubmissionsTable } from "../../components/project-submissions-table";

export function AuthCallback() {
  const { data: projectSubmissions, isLoading } = useProjectSubmissionsQuery();

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

export default AuthCallback;
