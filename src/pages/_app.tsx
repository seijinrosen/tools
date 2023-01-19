// https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app
// https://chakra-ui.com/getting-started/nextjs-guide#provider-setup

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
