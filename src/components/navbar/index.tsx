// https://nextjs.org/docs/api-reference/next/link
// https://chakra-templates.dev/navigation/navbar

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
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
  { href: "/man-nansai", title: "満何歳？" },
  { href: "/nextjs", title: "nextjs" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg={useColorModeValue("gray.100", "gray.900")}>
      <Container maxW="container.md">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg={useColorModeValue("gray.100", "gray.900")}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Link href="/">tools</Link>
          </Box>
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
      </Container>
    </Box>
  );
};

export default Navbar;
