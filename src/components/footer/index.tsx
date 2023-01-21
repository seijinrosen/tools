import { Link, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack as="footer" mt="auto" mb={12}>
      <Text>
        Copyright ©{" "}
        <Link href="https://seijinrosen.github.io/" isExternal>
          seijinrosen
        </Link>{" "}
        {new Date().getFullYear()}.
      </Text>
    </VStack>
  );
};

export default Footer;
