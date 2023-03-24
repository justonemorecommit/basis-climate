declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NX_API_URL: string;
    NX_AUTH0_DOMAIN: string;
    NX_AUTH0_CLIENT_ID: string;
    NX_AUTH0_CLIENT_SECRET: string;
    NX_AUTH0_AUDIENCE: string;
    NX_APP_URL: string;
    NX_AUTO_NGROK: string;
    NX_APP_SECRET: string;
    NX_AUTH0_MANAGEMENT_API_TOKEN: string;
  }
}
