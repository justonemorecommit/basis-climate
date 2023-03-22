import { Box, Flex, Text } from "@chakra-ui/react";

import { Header } from "./header";

export type LayoutProps = {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Layout({ main }: LayoutProps) {
  return (
    <Flex flexDir="column">
      <Header />

      <Box as="main" p={3}>
        {main}
      </Box>

      <Box as="footer" p={3}></Box>
    </Flex>
  );
}
