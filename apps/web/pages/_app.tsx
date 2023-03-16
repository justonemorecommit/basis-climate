"use client";

import { AppProps } from "next/app";
import Head from "next/head";
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
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <Auth0Provider
          domain={process.env.NX_AUTH0_DOMAIN}
          clientId={process.env.NX_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri:
              typeof window === "undefined" ? "" : getAppUrl("/auth/callback"),
          }}
        >
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </Auth0Provider>
      </main>
    </>
  );
}

export default CustomApp;
