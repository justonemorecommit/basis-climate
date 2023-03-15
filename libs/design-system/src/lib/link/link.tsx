import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";

export type LinkProps = ChakraLinkProps;

export function Link(props: LinkProps) {
  return <ChakraLink as={NextLink} {...props} />;
}
