import { NextPageContext } from "next";
import { auth0 } from "../auth0";

export async function getUserFromSession(ctx: NextPageContext) {
  const session = await auth0.getSession(ctx.req, ctx.res);

  return session.user ?? null;
}
