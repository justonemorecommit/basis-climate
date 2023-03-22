import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  config,
  testApiOne,
  testApiThree,
  testApiTwo,
  testApiFourth,
} from "@basis-climate/data-access";

export default function TestPage() {
  const { loginWithRedirect } = useAuth0();

  const handleCallPublic = () => {
    testApiOne();
  };

  const handleCallAuthenticated = () => {
    testApiTwo();
  };

  const handleCallUnauthorized = () => {
    testApiThree();
  };

  const handleCallAuthorized = () => {
    testApiFourth();
  };

  return (
    <>
      <Button
        onClick={() =>
          loginWithRedirect({
            authorizationParams: {
              audience: config.auth0.audience,
            },
          })
        }
      >
        Login
      </Button>
      <Button onClick={handleCallPublic}>Public</Button>
      <Button onClick={handleCallAuthenticated}>Authenticated</Button>
      <Button onClick={handleCallUnauthorized}>Authorized</Button>
      <Button onClick={handleCallAuthorized}>Authorized</Button>
    </>
  );
}
