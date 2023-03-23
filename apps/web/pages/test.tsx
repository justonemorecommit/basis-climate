import * as React from "react";
import {
  testApiOne,
  testApiThree,
  testApiTwo,
  testApiFourth,
  useAuth,
} from "@basis-climate/data-access";
import { Button } from "@basis-climate/design-system";

export default function TestPage() {
  const { loginUrl } = useAuth();

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
      <Button href={loginUrl}>Login</Button>
      <Button onClick={handleCallPublic}>Public</Button>
      <Button onClick={handleCallAuthenticated}>Authenticated</Button>
      <Button onClick={handleCallUnauthorized}>Authorized</Button>
      <Button onClick={handleCallAuthorized}>Authorized</Button>
    </>
  );
}
