/**
 * Returns a basePath-aware URL for public folder assets.
 * E.g., if NEXT_PUBLIC_BASE_PATH is '/edwradio-website',
 * `/logo.png` becomes `/edwradio-website/logo.png`.
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!basePath || !path.startsWith('/')) {
    return path;
  }
  return basePath + path;
}
