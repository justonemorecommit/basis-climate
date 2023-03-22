import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import { ProjectDto } from "@basis-climate/contract";

export type ProjectTableProps = {
  projects: ProjectDto[];
};

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <TableContainer p={20}>
      <Heading as="h5" padding={4}>
        Your Projects
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Owner</Th>
            <Th>FMV</Th>
            <Th>Completion Date</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            <Tr key={project.id}>
              <Td>{project.projectName}</Td>
              <Td>{project.owner}</Td>
              <Td>{'$' + project.fmv}</Td>
              <Td>12-31-2023</Td>
              <Td>{project.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
