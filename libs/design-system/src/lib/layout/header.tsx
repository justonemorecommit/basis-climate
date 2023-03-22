import {
  Box,
  Text,
  Image,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { useAuth } from "@basis-climate/data-access";

import { Link } from "../link";

export function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth();

  return (
    <Box
      as="header"
      px={3}
      py={2}
      display="flex"
      bgColor="#0f0766"
      boxShadow="lg"
      alignItems="center"
    >
      <Image
        w="14"
        h="14"
        src="https://uploads-ssl.webflow.com/6332fe20f701c905fdd30077/641a5b103ed75902203d2d2b_basis-mark.png"
      ></Image>

      {!isAuthenticated ? (
        <Box ml="auto">
          <Link
            href="/login"
            color="white"
            onClick={(e) => {
              e.preventDefault();
              loginWithRedirect();
            }}
          >
            Login
          </Link>
        </Box>
      ) : (
        <Box ml="auto" display="flex" alignItems="center">
          <Menu>
            <MenuButton>
              {user && <Avatar my="auto" src={user.picture} />}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => logout({})}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Box>
  );
}
