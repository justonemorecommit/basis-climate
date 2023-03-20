import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "@basis-climate/design-system";
import { Center, Spinner, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getProjectSubmissions } from "../../services/api/project";

export function AuthCallback() {
  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const [jsonString, setJsonString] = useState("");

  useEffect(() => {
    (async () => {
      const projectSubmissions = await getProjectSubmissions();
      setJsonString(JSON.stringify(projectSubmissions.data, null, 2));
    })();
  }, [user, getAccessTokenSilently]);

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
