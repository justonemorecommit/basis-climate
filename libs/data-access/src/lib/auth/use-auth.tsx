import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

export function useAuth() {
  const auth = useUser();
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const [isAccessTokenLoading, setIsAccessTokenLoading] = useState(false);

  const loginUrl = "/api/auth/login";
  const logoutUrl = "/api/auth/logout";

  useEffect(() => {
    (async () => {
      try {
        setIsAccessTokenLoading(true);
        setAccessToken(
          await fetch("/api/auth/access-token").then((res) => res.json())
        );
        setIsAccessTokenLoading(false);
      } catch (error) {
        setIsAccessTokenLoading(false);
      }
    })();
  }, []);

  const loginWithRedirect = () => {
    router.push(loginUrl);
  };

  const logoutWithRedirect = () => {
    router.push(logoutUrl);
  };

  return {
    ...auth,
    accessToken,
    isLoading: auth.isLoading || isAccessTokenLoading,
    loginUrl,
    logoutUrl,
    loginWithRedirect,
    logoutWithRedirect,
  };
}
