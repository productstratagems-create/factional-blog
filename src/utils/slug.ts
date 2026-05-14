export function articleSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, '');
}

export function articleHref(id: string): string {
  return `/articles/${articleSlug(id)}`;
}
