import { createFileRoute, notFound } from '@tanstack/react-router';
import { getArticlesByCategory } from '../lib/articles';
import { ArticleGrid } from '../components/ArticleGrid';
import { Divider } from '../components/Divider';

const LABELS: Record<string, string> = {
  missilforsvar: 'Missilforsvar',
  anskaffelse: 'Anskaffelse',
  history: 'Historie',
  historie: 'Historie',
  teknologi: 'Teknologi',
  analyse: 'Analyse',
  nato: 'NATO',
  øvelse: 'Øvelse',
};

export const Route = createFileRoute('/categories/$category')({
  loader: ({ params }) => {
    const articles = getArticlesByCategory(params.category);
    if (articles.length === 0) throw notFound();
    return { articles, category: params.category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const label =
      LABELS[loaderData.category.toLowerCase()] ?? loaderData.category;
    return {
      meta: [
        { title: `${label} — Norsk Luftvern` },
        {
          name: 'description',
          content: `Artikler om ${label.toLowerCase()} fra Norsk Luftvern.`,
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { articles, category } = Route.useLoaderData();
  const label = LABELS[category.toLowerCase()] ?? category;

  return (
    <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-display text-3xl font-extrabold uppercase tracking-[0.06em] text-heading mb-2">
        {label}
      </h1>
      <p className="font-ui text-sm text-muted mb-6">
        {articles.length} artikkel{articles.length !== 1 ? 'er' : ''}
      </p>
      <Divider spacing="none" className="mb-8" />
      <ArticleGrid articles={articles} />
    </div>
  );
}
