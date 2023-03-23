import { Project } from "@prisma/client";
import { getProjectById } from "@basis-climate/data-access";

import { Layout } from "../../components/layout";
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

  return { props: { project: res } };
}

export default ProjectDetail;
