import { Injectable } from "@nestjs/common";
import { ManagementClient } from "auth0";

@Injectable()
export class Auth0ManagementClientService {
  private auth0Client: ManagementClient;

  constructor() {
    this.auth0Client = new ManagementClient({
      domain: process.env.NX_AUTH0_DOMAIN,
      token: process.env.NX_AUTH0_MANAGEMENT_API_TOKEN,
    });
  }

  get client() {
    return this.auth0Client;
  }
}
