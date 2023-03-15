import { Box, Text } from "@chakra-ui/react";
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
      bgColor="gray.100"
      boxShadow="lg"
    >
      <Text fontWeight="bold">BasisClmiate</Text>

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
        <Box></Box>
      )}
    </Box>
  );
}
