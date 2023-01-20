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

const links: { href: string; title: string }[] = [
  { href: "/", title: "Home" },
  { href: "/clipboard", title: "clipboard" },
  { href: "/hello-page", title: "hello-page" },
  { href: "/nextjs", title: "nextjs" },
];

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
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </Stack>
      ) : null}
    </Box>
  );
};

export default Navbar;
