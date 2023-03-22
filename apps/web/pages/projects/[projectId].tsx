import { Project } from "@prisma/client";
import { Layout } from "@basis-climate/design-system";
import { getProjectById } from "@basis-climate/data-access";

import { ProjectForm } from "../../components/project-form";

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
