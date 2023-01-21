import { Divider, Heading } from "@chakra-ui/react";
import Head from "next/head";

type ContentLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const ContentLayout = ({ title, children }: ContentLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | tools</title>
      </Head>
      <Heading mb={1}>{title}</Heading>
      <Divider mb={12} />
      {children}
    </>
  );
};

export default ContentLayout;
