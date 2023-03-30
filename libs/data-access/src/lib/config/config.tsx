export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  auth0: {
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
  },
};

export type Config = typeof config;
