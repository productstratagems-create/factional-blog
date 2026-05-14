import { createFileRoute } from '@tanstack/react-router';
import { getAllArticles } from '../lib/articles';
import { HeroArticle } from '../components/HeroArticle';
import { ArticleGrid } from '../components/ArticleGrid';
import { Divider } from '../components/Divider';

export const Route = createFileRoute('/')({
  loader: () => getAllArticles(),
  head: () => ({
    meta: [
      { title: 'Norsk Luftvern — Nyheter og analyser' },
      {
        name: 'description',
        content:
          'Nyheter og analyser om norsk luftvern, missilforsvar og sikkerhetspolitikk.',
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const articles = Route.useLoaderData();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const grid = articles.filter((a) => a.slug !== featured?.slug);

  if (!featured) {
    return (
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="font-ui text-muted">Ingen artikler funnet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
      <HeroArticle
        title={featured.title}
        excerpt={featured.excerpt}
        href={`/articles/${featured.slug}`}
        heroImage={featured.heroImage}
        heroImageAlt={featured.heroImageAlt}
        category={featured.category}
        pubDate={featured.date}
        author={featured.author}
        readingTime={featured.readingTime}
        lang={featured.lang}
      />

      {grid.length > 0 && (
        <>
          <Divider spacing="none" />
          <ArticleGrid articles={grid} />
        </>
      )}
    </div>
  );
}
