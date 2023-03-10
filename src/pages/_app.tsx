import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import Layout from "@/src/components/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
