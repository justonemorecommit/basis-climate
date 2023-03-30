import { initAuth0 } from "@auth0/nextjs-auth0";

export const auth0 = initAuth0({
  secret: process.env.NX_APP_SECRET,
  issuerBaseURL: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.NX_AUTH0_CLIENT_SECRET,
});
