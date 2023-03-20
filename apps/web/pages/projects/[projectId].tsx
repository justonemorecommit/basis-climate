import { Project } from "@prisma/client";
import { Layout } from "@basis-climate/design-system";

import { ProjectForm } from "../../components/project-form";
import { getProjectById } from "../../services/api/project";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <Layout
      main={
        <>
          <ProjectForm initialValues={project} />
        </>
      }
    />
  );
}

export async function getServerSideProps({ params: { projectId } }) {
  const res = await getProjectById(projectId);

  return { props: { project: res.data } };
}

export default ProjectDetail;
