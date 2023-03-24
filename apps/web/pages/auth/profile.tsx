import { UserDto } from "@basis-climate/contract";
import { updateProfile } from "@basis-climate/data-access";
import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Flex,
  FormErrorMessage,
} from "@basis-climate/design-system";
import { Center } from "@chakra-ui/react";
import { api } from "libs/data-access/src/lib/api/api";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Layout } from "../../components/layout";
import { getUserFromSession } from "../../helpers/auth";

export type ProfilePageProps = {
  user: UserDto;
};

export function ProfilePage({ user }: ProfilePageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDto>({
    defaultValues: user,
  });

  useEffect(() => {
    api.get("/first");
  }, []);

  async function handleSave(formValues: UserDto) {
    const nextProfile = await updateProfile({
      name: formValues.name,
    });
  }

  return (
    <Layout
      main={
        <Center>
          <Card title="Profile" width="100%" maxWidth="lg">
            <FormControl isInvalid={!!errors?.name} mb={2}>
              <FormLabel>Name</FormLabel>
              <Input type="text" {...register("name", { required: true })} />

              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>

            <Flex>
              <Button onClick={handleSubmit(handleSave)}>Save</Button>
            </Flex>
          </Card>
        </Center>
      }
    />
  );
}

export async function getServerSideProps(ctx) {
  const user = await getUserFromSession(ctx);

  return {
    props: {
      user,
    },
  };
}

export default ProfilePage;
