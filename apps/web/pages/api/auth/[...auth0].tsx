import auth0 from "../../../auth0";

export default auth0.handleAuth({
  login: auth0.handleLogin({
    authorizationParams: {
      audience: process.env.NX_AUTH0_AUDIENCE,
    },
  }),
  logout: auth0.handleLogout({
    returnTo: process.env.NX_APP_URL,
  }),
});
