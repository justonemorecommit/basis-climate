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
import { ProjectSubmissionDto } from "@basis-climate/contract";
import { formatDate } from "../utils/format";

export type ProjectSubmissionsTableProps = {
  projects: ProjectSubmissionDto[];
};

export function ProjectSubmissionsTable({
  projects,
}: ProjectSubmissionsTableProps) {
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
            <Th isNumeric>FMV</Th>
            <Th>Completion Date</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => (
            <Tr key={project.id}>
              <Td>
                {project.name.firstName} {project.name.lastName}
              </Td>
              <Td>
                {project.projectSponsor.firstName}{" "}
                {project.projectSponsor.lastName}
              </Td>
              <Td>{project.costToConstruct}</Td>
              <Td>{formatDate(project.estimatedCompletionDate)}</Td>
              <Td>{project.assetTypes.join(", ")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
