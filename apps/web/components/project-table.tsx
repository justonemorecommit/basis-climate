import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
} from '@chakra-ui/react'

import { Project } from "../services/types";

export type ProjectTableProps = {
  projects: Project[];
};

export function ProjectTable({ projects }: ProjectTableProps) {

  return (
    <TableContainer p={20}>
      <Heading as='h5' padding={4}>Your Projects</Heading>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Owner</Th>
            <Th isNumeric>FMV</Th>
            <Th isNumeric>Completion Date</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            <Tr key={project.id}>
              <Td>{project.projectName}</Td>
              <Td>{project.owner}</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>{project.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
