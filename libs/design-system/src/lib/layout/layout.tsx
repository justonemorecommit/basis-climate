import { Box, Flex, Text } from "@chakra-ui/react";

export type LayoutProps = {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Layout({ main }: LayoutProps) {
  return (
    <Flex flexDir="column">
      <Box as="header" px={3} py={2} bgColor="gray.100" boxShadow="lg">
        <Text fontWeight="bold">BasisClmiate</Text>
      </Box>
      <Box as="main" p={3}>
        {main}
      </Box>
      <Box as="footer"></Box>
    </Flex>
  );
}
