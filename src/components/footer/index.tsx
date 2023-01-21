import { IconButton, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack as="footer" mt="auto" mb={12}>
      <Stack mt={4} direction="row" spacing={6}>
        <Link href="https://github.com/seijinrosen/tools" isExternal>
          <IconButton
            aria-label="GitHub link"
            icon={<FaGithub fontSize={20} />}
            isRound
          />
        </Link>
        <Link href="https://twitter.com/seijinrosen" isExternal>
          <IconButton
            aria-label="Twitter link"
            icon={<FaTwitter fontSize={20} color="#1DA1F2" />}
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
