const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function articleSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, '');
}

export function articleHref(id: string): string {
  return `${base}/articles/${articleSlug(id)}`;
}

export function siteHref(path: string): string {
  if (path === '/') return import.meta.env.BASE_URL;
  return base + path;
}

// Prefix local image paths (starting with /) with the base URL.
// External URLs (https://) are returned unchanged.
export function assetSrc(src: string): string {
  if (src.startsWith('/') && !src.startsWith('//')) return base + src;
  return src;
}
