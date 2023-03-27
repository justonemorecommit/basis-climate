import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { forwardRef } from "react";

export type LinkProps = ChakraLinkProps & { children?: React.ReactNode };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  return <ChakraLink as={NextLink} ref={ref} {...props} />;
});
