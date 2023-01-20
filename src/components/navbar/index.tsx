// https://nextjs.org/docs/api-reference/next/link
// https://chakra-templates.dev/navigation/navbar

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import ColorToggleButton from "../ColorToggleButton";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>tools</Box>
        <ColorToggleButton />
      </Flex>

      {isOpen ? (
        <Stack as={"nav"} spacing={4}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/clipboard">clipboard</Link>
            </li>
            <li>
              <Link href="/hello-page">hello-page</Link>
            </li>
            <li>
              <Link href="/nextjs">nextjs</Link>
            </li>
          </ul>
        </Stack>
      ) : null}
    </Box>
  );
};

export default Navbar;
