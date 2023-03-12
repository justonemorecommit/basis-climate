import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Button>Hello</Button>
    </StyledPage>
  );
}

export default Index;
