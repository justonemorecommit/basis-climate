import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "@basis-climate/design-system";
import { Button, Center, Spinner } from "@chakra-ui/react";
import { api } from "apps/web/services/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  testApiOne,
  testApiTwo,
  testApiThree,
  testApiFourth,
} from "../../services/api/auth";

export function AuthCallback() {
  const router = useRouter();
  const { user, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();

      console.log({ token });

      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    })();
  }, [user, getAccessTokenSilently]);

  function handleCallApis() {
    testApiOne();
    testApiTwo();
    testApiThree();
    testApiFourth();
  }

  return (
    <Layout
      main={
        isLoading ? (
          <Center minWidth="100%" minHeight="600px">
            <Spinner variant="page" />
          </Center>
        ) : (
          <>
            <p>Success!</p>
            <Button onClick={handleCallApis}>Button</Button>
          </>
        )
      }
    />
  );
}

export default AuthCallback;
