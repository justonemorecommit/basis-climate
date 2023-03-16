import { api } from "./api";

export function loginWithAuth0Code(code: string) {
  return api.post("/auth/login", {
    code,
  });
}
