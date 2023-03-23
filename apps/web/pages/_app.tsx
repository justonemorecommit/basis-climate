"use client";

import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ConfigProvider } from "@basis-climate/data-access";
import { setAccessToken } from "@basis-climate/data-access";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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
  const { user } = pageProps;

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
          <UserProvider user={user}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </UserProvider>
        </ConfigProvider>
      </main>
    </>
  );
}

export default CustomApp;
