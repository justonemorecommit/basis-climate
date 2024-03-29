import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";

import { ProjectDto } from "@basis-climate/contract";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export type ProjectFormProps = {
  initialValues: ProjectDto;
};

export function ProjectForm({ initialValues }: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useForm<ProjectDto>();

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  function handleSubmitForm(values: ProjectDto) {}

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Heading as="h5" padding={4}>
        Project Details
      </Heading>
      <FormControl isInvalid={!!errors.projectName} mb={3} pl={4}>
        <FormLabel>Project Name</FormLabel>
        <Input type="text" {...register("projectName", { required: true })} />
        <FormErrorMessage>
          {errors.projectName?.message.toString()}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.owner} mb={3} pl={4}>
        <FormLabel>Owner</FormLabel>
        <Input type="text" {...register("owner", { required: true })} />
        <FormErrorMessage>{errors.owner?.message.toString()}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.fmv} mb={3} pl={4}>
        <FormLabel>FMV</FormLabel>
        <Input
          type="text"
          {...register("fmv", { required: true, valueAsNumber: true })}
        />
        <FormErrorMessage>{errors.fmv?.message.toString()}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.completionDate} mb={3} pl={4}>
        <FormLabel>Completion Date</FormLabel>
        <Input
          type="date"
          {...register("completionDate", {
            required: true,
          })}
        />
        <FormErrorMessage>
          {errors.completionDate?.message.toString()}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.completionDate} mb={3} pl={4}>
        <FormLabel>Type</FormLabel>
        <Input
          type="text"
          {...register("type", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <FormErrorMessage>{errors.type?.message.toString()}</FormErrorMessage>
      </FormControl>
    </form>
  );
}
