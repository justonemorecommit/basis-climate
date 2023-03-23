"use client";

import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ConfigProvider, config } from "@basis-climate/data-access";
import { setAccessToken } from "@basis-climate/data-access";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

import { getAppUrl } from "../helpers/uri";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAccessToken(localStorage.getItem("basisClimateJwtToken"));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Basis Climate</title>
      </Head>
      <main className="app">
        <ConfigProvider>
          <Auth0Provider
            domain={config.auth0.domain}
            clientId={config.auth0.clientId}
            authorizationParams={{
              redirect_uri:
                typeof window === "undefined"
                  ? ""
                  : getAppUrl("/auth/callback"),
            }}
          >
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </Auth0Provider>
        </ConfigProvider>
      </main>
    </>
  );
}

export default CustomApp;
