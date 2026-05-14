import { ReadingProgress } from './ReadingProgress';
import { ArticleGrid } from './ArticleGrid';
import { Divider } from './Divider';
import { CategoryBadge } from './CategoryBadge';
import { ArticleMeta } from './ArticleMeta';
import type { Article } from '../types/article';

interface Props {
  article: Article;
  related: Article[];
}

export function ArticleLayout({ article, related }: Props) {
  return (
    <>
      <ReadingProgress />

      {/* Hero image */}
      {article.heroImage && (
        <div className="w-full max-h-[480px] overflow-hidden mb-8">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt ?? ''}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      <div className="max-w-[45rem] mx-auto px-4 sm:px-6">
        {/* Article header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge
              category={article.category}
              href={`/categories/${article.category}`}
            />
          </div>
          <h1 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase tracking-[0.04em] leading-[1.1] text-heading mb-4">
            {article.title}
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed mb-4">
            {article.excerpt}
          </p>
          <ArticleMeta
            pubDate={article.date}
            author={article.author}
            readingTime={article.readingTime}
            lang={article.lang}
          />
        </header>

        <Divider spacing="sm" />

        {/* Article body */}
        <div
          id="article-body"
          className={[
            'prose prose-lg max-w-none mt-8',
            'prose-headings:font-display prose-headings:uppercase prose-headings:text-heading prose-headings:tracking-[0.04em]',
            'prose-a:text-navy prose-a:underline-offset-4',
            'prose-p:font-body prose-p:leading-[1.8]',
            // drop cap on first paragraph
            '[&>p:first-of-type::first-letter]:float-left',
            '[&>p:first-of-type::first-letter]:text-5xl',
            '[&>p:first-of-type::first-letter]:font-display',
            '[&>p:first-of-type::first-letter]:text-heading',
            '[&>p:first-of-type::first-letter]:mr-1',
            '[&>p:first-of-type::first-letter]:leading-none',
            '[&>p:first-of-type::first-letter]:mt-1',
          ].join(' ')}
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16">
            <Divider spacing="none" className="mb-8" />
            <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-heading mb-6">
              Relaterte artikler
            </h2>
            <ArticleGrid articles={related} columns={related.length > 2 ? 3 : 2} />
          </section>
        )}
      </div>
    </>
  );
}
