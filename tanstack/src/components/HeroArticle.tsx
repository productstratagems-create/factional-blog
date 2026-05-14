import { CategoryBadge } from './CategoryBadge';
import { ArticleMeta } from './ArticleMeta';

interface Props {
  title: string;
  excerpt: string;
  href: string;
  heroImage?: string;
  heroImageAlt?: string;
  category: string;
  pubDate: string;
  author?: string;
  readingTime?: number;
  lang?: string;
}

export function HeroArticle({
  title,
  excerpt,
  href,
  heroImage,
  heroImageAlt = '',
  category,
  pubDate,
  author = 'Redaksjonen',
  readingTime,
  lang = 'no',
}: Props) {
  return (
    <div className="w-full">
      <a
        href={href}
        className="relative block w-full min-h-[clamp(360px,50vw,620px)] overflow-hidden rounded-md no-underline group"
        aria-label={title}
      >
        {heroImage ? (
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="eager"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-heading via-[#3D1515] to-navy" />
        )}

        {/* gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-end h-full min-h-[inherit] p-8 sm:p-12 gap-3">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-ui text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/65 border border-white/30 px-2 py-0.5 rounded-sm">
              Fremhevet
            </span>
            <CategoryBadge
              category={category}
              href={`/categories/${category}`}
            />
          </div>

          <h1 className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] font-extrabold uppercase tracking-[0.04em] leading-[1.1] text-white m-0 max-w-[22em]">
            {title}
          </h1>

          <p className="hidden sm:block font-body text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-white/80 m-0 max-w-[60ch] line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-3 mt-2">
            <div className="[&_.article-meta]:text-white/65">
              <ArticleMeta
                pubDate={pubDate}
                author={author}
                readingTime={readingTime}
                lang={lang}
              />
            </div>
            <span className="font-ui text-sm font-semibold text-teal tracking-[0.04em] whitespace-nowrap group-hover:text-white transition-colors">
              Les mer →
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
