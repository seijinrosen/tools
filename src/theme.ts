// https://chakra-ui.com/docs/styled-system/color-mode#updating-the-theme-config

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
