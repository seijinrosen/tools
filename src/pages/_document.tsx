// https://chakra-ui.com/docs/styled-system/color-mode#for-nextjs

import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import theme from "../theme";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
