import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";

export type ButtonProps = {
  href?: string;
} & Chakra.ButtonProps;

export function Button({ href, ...buttonProps }: ButtonProps) {
  const linkProps = href
    ? {
        as: NextLink,
        href,
      }
    : {};

  return <Chakra.Button colorScheme="blue" {...linkProps} {...buttonProps} />;
}
