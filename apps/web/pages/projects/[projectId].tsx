import { Project } from "@prisma/client";
import { getProjectById } from "@basis-climate/data-access";

import { Layout } from "../../components/layout";
import { ProjectForm } from "../../components/project-form";
import { auth0 } from "../../auth0";

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

export const getServerSideProps = auth0.withPageAuthRequired({
  async getServerSideProps({ params: { projectId } }) {
    const res = await getProjectById(Number(projectId));

    return { props: { project: res } };
  },
});

export default ProjectDetail;
