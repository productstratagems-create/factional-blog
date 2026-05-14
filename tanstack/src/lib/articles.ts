import matter from 'gray-matter';
import { marked } from 'marked';
import type { Article, ArticleFrontmatter } from '../types/article';

const files = import.meta.glob('/content/articles/*.md', {
  query: '?raw',
  as: 'raw',
  eager: true,
});

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.mdx?$/, '');
}

export function getAllArticles(): Article[] {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, content } = matter(raw as string);
      const wordCount = content.split(/\s+/).length;
      const readingTime =
        (data as ArticleFrontmatter).readingTimeMinutes ??
        Math.max(1, Math.ceil(wordCount / 200));
      return {
        ...(data as ArticleFrontmatter),
        slug: slugFromPath(path),
        contentHtml: marked(content) as string,
        readingTime,
      } as Article;
    })
    .filter((a) => !a.draft)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(getAllArticles().map((a) => a.category))];
}
