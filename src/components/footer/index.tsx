import {
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <VStack as="footer" bg={bgColor} mt="auto" py={6}>
      <Stack direction="row" spacing={6}>
        <Link href="https://github.com/seijinrosen/tools" isExternal>
          <IconButton
            aria-label="GitHub link"
            bg={bgColor}
            icon={<Icon as={FaGithub} />}
            isRound
          />
        </Link>
        <Link href="https://twitter.com/seijinrosen" isExternal>
          <IconButton
            aria-label="Twitter link"
            bg={bgColor}
            color="#1DA1F2"
            icon={<Icon as={FaTwitter} />}
            isRound
          />
        </Link>
      </Stack>
      <Text>
        Copyright ©{" "}
        <Link color="teal.500" href="https://seijinrosen.github.io" isExternal>
          seijinrosen
        </Link>{" "}
        {new Date().getFullYear()}.
      </Text>
    </VStack>
  );
};

export default Footer;
