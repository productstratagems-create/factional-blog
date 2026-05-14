import { ArticleCard } from './ArticleCard';
import type { Article } from '../types/article';

interface Props {
  articles: Article[];
  columns?: 2 | 3;
}

export function ArticleGrid({ articles, columns = 3 }: Props) {
  const colCls =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${colCls} gap-8`}>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
