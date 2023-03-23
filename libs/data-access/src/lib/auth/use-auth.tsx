import { useAuth0 } from "@auth0/auth0-react";
import { useConfig } from "../config/config.context";

export function useAuth() {
  const auth = useAuth0();
  const config = useConfig();

  const loginWithRedirect = () => {
    auth.loginWithRedirect({
      authorizationParams: {
        audience: config.auth0.audience,
      },
    });
  };

  return {
    ...auth,
    loginWithRedirect,
  };
}
