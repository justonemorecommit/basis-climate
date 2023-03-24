import * as Chakra from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export type CardProps = Chakra.CardProps & {
  title: string;
  children?: React.ReactNode;
};

export function Card({ title, children, ...cardProps }: CardProps) {
  return (
    <Chakra.Card {...cardProps}>
      <Chakra.CardHeader>
        <Heading>{title}</Heading>
      </Chakra.CardHeader>

      <Chakra.CardBody>{children}</Chakra.CardBody>
    </Chakra.Card>
  );
}
