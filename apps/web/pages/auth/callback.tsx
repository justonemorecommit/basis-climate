import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "@basis-climate/design-system";
import { Center, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function AuthCallback() {
  const router = useRouter();
  const { user, isLoading } = useAuth0();

  return (
    <Layout
      main={
        isLoading ? (
          <Center minWidth="100%" minHeight="600px">
            <Spinner variant="page" />
          </Center>
        ) : (
          <p>Success!</p>
        )
      }
    />
  );
}

export default AuthCallback;
