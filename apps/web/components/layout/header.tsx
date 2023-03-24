import { useAuth } from "@basis-climate/data-access";
import {
  Box,
  Image,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Link,
} from "@basis-climate/design-system";

export function Header() {
  const { user, loginUrl, logoutWithRedirect } = useAuth();

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
        alt="Logo"
      ></Image>

      {!user ? (
        <Box ml="auto">
          <Link href={loginUrl} color="white">
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
              <MenuGroup title="Profile">
                <MenuItem as={Link} href="/auth/profile">
                  Profile
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="Actions">
                <MenuItem onClick={logoutWithRedirect}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Box>
  );
}
