"use client";

import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
