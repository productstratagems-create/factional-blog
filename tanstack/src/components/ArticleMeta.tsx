interface Props {
  pubDate: string;
  updatedDate?: string;
  author?: string;
  readingTime?: number;
  lang?: string;
}

export function ArticleMeta({
  pubDate,
  author = 'Redaksjonen',
  readingTime,
  lang = 'no',
}: Props) {
  const locale = lang === 'en' ? 'en-GB' : lang === 'sv' ? 'sv-SE' : 'nb-NO';
  const formatted = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(pubDate));

  return (
    <div className="article-meta font-ui text-sm text-muted flex gap-1 flex-wrap items-center">
      <span>{author}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={pubDate}>{formatted}</time>
      {readingTime != null && (
        <>
          <span aria-hidden="true">·</span>
          <span>{readingTime} min</span>
        </>
      )}
    </div>
  );
}
