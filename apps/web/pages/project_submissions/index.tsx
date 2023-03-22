import { Layout } from "@basis-climate/design-system";
import { useProjectSubmissionsQuery } from "@basis-climate/data-access";
import { Center, Spinner, Textarea } from "@chakra-ui/react";

export function AuthCallback() {
  const { data: projectSubmissions, isLoading } = useProjectSubmissionsQuery();

  const jsonString = JSON.stringify(projectSubmissions, null, 2);

  return (
    <Layout
      main={
        isLoading ? (
          <Center minWidth="100%" minHeight="600px">
            <Spinner variant="page" />
          </Center>
        ) : (
          <>
            <Textarea height="600px" value={jsonString} />
          </>
        )
      }
    />
  );
}

export default AuthCallback;
