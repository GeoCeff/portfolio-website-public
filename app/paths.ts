export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string) {
  if (!basePath || path.startsWith("#") || /^[a-z][a-z\d+.-]*:/i.test(path)) {
    return path;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  const hasExtension = /\/[^/?#]+\.[^/?#]+(?:[?#].*)?$/.test(path);
  const isRoute = path !== "/" && !path.includes("#") && !hasExtension;

  return `${basePath}${isRoute && !path.endsWith("/") ? `${path}/` : path}`;
}
