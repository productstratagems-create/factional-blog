import { CategoryBadge } from './CategoryBadge';
import { ArticleMeta } from './ArticleMeta';
import type { Article } from '../types/article';

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  const href = `/articles/${article.slug}`;

  return (
    <article className="group bg-surface rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <a href={href} className="block" aria-label={article.title}>
        <div className="relative aspect-video overflow-hidden bg-navy/20">
          {article.heroImage ? (
            <img
              src={article.heroImage}
              alt={article.heroImageAlt ?? ''}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-heading via-[#3D1515] to-navy" />
          )}
          <div className="absolute top-3 left-3">
            <CategoryBadge
              category={article.category}
              href={`/categories/${article.category}`}
            />
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-display text-lg font-extrabold uppercase tracking-[0.04em] leading-tight text-heading line-clamp-2">
            {article.title}
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <ArticleMeta
            pubDate={article.date}
            author={article.author}
            readingTime={article.readingTime}
            lang={article.lang}
          />
        </div>
      </a>
    </article>
  );
}
