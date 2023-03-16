export function getAppUrl(path: string) {
  if (path.startsWith("/")) {
    path = path.substring(1);
  }

  return typeof window === "undefined"
    ? ""
    : `${window.location.origin}/${path}`;
}
