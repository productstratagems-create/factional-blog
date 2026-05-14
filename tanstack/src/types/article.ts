export interface ArticleFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags?: string[];
  heroImage?: string;
  heroImageAlt?: string;
  lang?: 'no' | 'sv' | 'en';
  featured?: boolean;
  author?: string;
  draft?: boolean;
  readingTimeMinutes?: number;
  relatedSlugs?: string[];
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  contentHtml: string;
  readingTime: number;
}
