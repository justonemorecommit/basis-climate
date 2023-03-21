declare namespace Express {
  export interface Request {
    user?: {
      auth0Id: string;
      permissions: string[];
    };
  }
}
