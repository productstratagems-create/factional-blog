import { createFileRoute, notFound } from '@tanstack/react-router';
import { getArticleBySlug, getAllArticles } from '../lib/articles';
import { ArticleLayout } from '../components/ArticleLayout';

export const Route = createFileRoute('/articles/$slug')({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();

    const all = getAllArticles();
    const related = article.relatedSlugs
      ? article.relatedSlugs
          .map((s) => all.find((a) => a.slug === s))
          .filter(Boolean)
      : all
          .filter(
            (a) => a.category === article.category && a.slug !== article.slug
          )
          .slice(0, 3);

    return { article, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — Norsk Luftvern` },
        { name: 'description', content: article.excerpt },
        { property: 'og:title', content: article.title },
        { property: 'og:description', content: article.excerpt },
        ...(article.heroImage
          ? [{ property: 'og:image', content: article.heroImage }]
          : []),
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();
  return (
    <div className="py-8">
      <ArticleLayout article={article} related={related as any[]} />
    </div>
  );
}
