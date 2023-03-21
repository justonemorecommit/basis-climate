import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "@basis-climate/design-system";
import { Center, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "../../services/api";

export function AuthCallback() {
  const router = useRouter();
  const { user, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: process.env.NX_AUTH0_AUDIENCE,
        },
      });

      localStorage.setItem("basisClimateJwtToken", token);

      api.defaults.headers.common["Authorization"] = "Bearer " + token;
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
            <p>Success!</p>
          </>
        )
      }
    />
  );
}

export default AuthCallback;
