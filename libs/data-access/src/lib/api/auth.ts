import { api } from "./api";

export function testApiOne() {
  return api.get("/public");
}

export function testApiTwo() {
  return api.get("/first");
}

export function testApiThree() {
  return api.post("/second");
}

export function testApiFourth() {
  return api.post("/third");
}
