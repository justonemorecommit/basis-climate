export const config = {
  apiUrl: process.env.NX_API_URL,
  auth0: {
    domain: process.env.NX_AUTH0_DOMAIN,
    clientId: process.env.NX_AUTH0_CLIENT_ID,
    audience: process.env.NX_AUTH0_AUDIENCE,
  },
};

export type Config = typeof config;
