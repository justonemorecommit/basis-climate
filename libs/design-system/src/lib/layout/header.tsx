import { Box, Text, Image, Avatar } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "../link";

export function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Box
      as="header"
      px={3}
      py={2}
      display="flex"
      bgColor="#0f0766"
      boxShadow="lg"
    >
      <Image w="14" h="14" src="https://uploads-ssl.webflow.com/6332fe20f701c905fdd30077/641a5b103ed75902203d2d2b_basis-mark.png"></Image>

      {!isAuthenticated ? (
        <Box ml="auto">
          <Link
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              loginWithRedirect();
            }}
          >
            Login
          </Link>
        </Box>
      ) : (
        <Box ml='auto' display='flex' alignItems='center'>
        <Avatar size='md' name='Derek Silverman' src='https://bit.ly/broken-link' />
      </Box>
      )}
    </Box>
  );
}
