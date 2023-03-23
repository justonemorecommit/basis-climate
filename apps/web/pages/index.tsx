import { Center, Heading } from "@chakra-ui/react";

import { Layout } from "../components/layout";

export function Index() {
  return (
    <Layout
      main={
        <>
          <Center mt={10}>
            <Heading size="lg">Welcome!</Heading>
          </Center>
        </>
      }
    />
  );
}

export default Index;
