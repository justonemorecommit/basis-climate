import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export function useAuth() {
  const auth = useUser();
  const router = useRouter();

  const loginUrl = "/api/auth/login";
  const logoutUrl = "/api/auth/logout";

  const loginWithRedirect = () => {
    router.push(loginUrl);
  };

  const logoutWithRedirect = () => {
    router.push(logoutUrl);
  };

  return {
    ...auth,
    loginUrl,
    logoutUrl,
    loginWithRedirect,
    logoutWithRedirect,
  };
}
