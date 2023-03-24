// TODO: Resolve following lint error
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserDto } from "@basis-climate/contract";

import { fetcher } from "../api";

export function getUsers() {
  return fetcher<UserDto[]>("/users");
}
