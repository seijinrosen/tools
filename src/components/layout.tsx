// https://nextjs.org/docs/basic-features/layouts

import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
