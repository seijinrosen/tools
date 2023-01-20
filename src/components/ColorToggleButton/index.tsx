// https://chakra-ui.com/docs/styled-system/color-mode#usecolormode

import { Button, useColorMode } from "@chakra-ui/react";

const ColorToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ColorToggleButton;
