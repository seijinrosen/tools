// https://chakra-ui.com/docs/styled-system/color-mode#usecolormode

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ColorToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      bg={useColorModeValue("gray.100", "gray.900")}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ColorToggleButton;
