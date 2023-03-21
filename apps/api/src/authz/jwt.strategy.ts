import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { passportJwtSecret } from "jwks-rsa";

const auth0IssuerUrl = `https://${process.env.NX_AUTH0_DOMAIN}/`;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${auth0IssuerUrl}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.NX_AUTH0_AUDIENCE,
      issuer: auth0IssuerUrl,
      algorithms: ["RS256"],
    });
  }

  validate(payload: any): unknown {
    const user = {
      auth0Id: payload.sub,
      jwtPayload: payload,
      permissions: payload.permissions,
    };

    return user;
  }
}
