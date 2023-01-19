// https://nextjs.org/docs/api-reference/next/link
// https://chakra-ui.com/docs/styled-system/color-mode#usecolormode

import { Button, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/hello-page">hello-page</Link>
        </li>
        <li>
          <Link href="/clipboard">clipboard</Link>
        </li>
      </ul>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}

export default Navbar;
