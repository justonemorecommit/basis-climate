import { GetServerSidePropsContext } from "next";
import { auth0 } from "../auth0";

export async function getUserFromSession(ctx: GetServerSidePropsContext) {
  const session = await auth0.getSession(ctx.req, ctx.res);

  return session.user ?? null;
}
