import * as React from "react";

import { Button } from "@chakra-ui/react";
import {
  testApiOne,
  testApiThree,
  testApiTwo,
  testApiFourth,
} from "../services/api/auth";
import { useAuth0 } from "@auth0/auth0-react";

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
              audience: process.env.NX_AUTH0_AUDIENCE,
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
