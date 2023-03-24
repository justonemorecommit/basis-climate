// TODO
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ProfileUpdateDto, UserDto } from "@basis-climate/contract";
import { api, fetcher } from "./api";

export async function updateProfile(nextProfile: ProfileUpdateDto) {
  return (await api.put<UserDto>("/profile", nextProfile)).data;
}
