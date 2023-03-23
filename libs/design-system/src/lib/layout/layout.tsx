import { useAuth } from "@basis-climate/data-access";
import { Box, Center, Flex } from "@chakra-ui/react";
import { Spinner } from "../spinner";

import { Header } from "./header";

export type LayoutProps = {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Layout({ main }: LayoutProps) {
  const { isLoading } = useAuth();

  return isLoading ? (
    <Center w="100vw" h="100vh">
      <Spinner size="xl" />
    </Center>
  ) : (
    <Flex flexDir="column">
      <Header />

      <Box as="main" p={3}>
        {main}
      </Box>

      <Box as="footer" p={3}></Box>
    </Flex>
  );
}
