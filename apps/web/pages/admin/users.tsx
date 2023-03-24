import { UserDto } from "@basis-climate/contract";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@basis-climate/design-system";

import { getUsers } from "@basis-climate/data-access";
import { Layout } from "../../components/layout";

export type UsersManagementPageProps = {
  users: UserDto[];
};

export function UsersManagementPage({ users }: UsersManagementPageProps) {
  return (
    <Layout
      main={
        <>
          <Heading size="lg" mt={3} mb={5}>
            Users
          </Heading>

          <Table>
            <Thead>
              <Tr>
                <Th>User ID</Th>
                <Th>Username</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.user_id}>
                  <Td>{user.user_id}</Td>
                  <Td>{user.name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
      }
    />
  );
}

export async function getServerSideProps() {
  const users = await getUsers();

  return {
    props: {
      users,
    },
  };
}

export default UsersManagementPage;
