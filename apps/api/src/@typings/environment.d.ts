declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_AUTH0_DOMAIN: string;
    NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    NEXT_PUBLIC_AUTH0_AUDIENCE: string;
    NX_AUTH0_CLIENT_SECRET: string;
    NX_APP_URL: string;
    NX_AUTO_NGROK: string;
    NX_APP_SECRET: string;
    NX_AUTH0_MANAGEMENT_API_TOKEN: string;
  }
}
