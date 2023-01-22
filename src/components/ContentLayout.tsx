import { Divider, Heading } from "@chakra-ui/react";
import Head from "next/head";

type ContentLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const ContentLayout = ({ title, children }: ContentLayoutProps) => {
  const fullTitle = `${title} | tools`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <Heading mb={1}>{title}</Heading>
      <Divider mb={12} />
      {children}
    </>
  );
};

export default ContentLayout;
