import { auth0 } from "../../../auth0";

export default async function accessToken(req, res) {
  const accessToken = await auth0.getAccessToken(req, res);

  res.status(200).json(accessToken.accessToken);
}
