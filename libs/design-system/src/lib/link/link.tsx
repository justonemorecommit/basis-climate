import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { forwardRef } from "react";

export type LinkProps = ChakraLinkProps;

export const Link = forwardRef<HTMLAnchorElement>(function Link(
  props: LinkProps,
  ref
) {
  return <ChakraLink as={NextLink} ref={ref} {...props} />;
});
