/** Vite/Astro image imports may be a string URL or an object with `src`. */
export function resolveAsset(src: string | { src: string }): string {
  return typeof src === 'string' ? src : src.src;
}
