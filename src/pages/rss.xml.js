import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { articleSlug } from '../utils/slug.ts';

export async function GET(context) {
  const articles = await getCollection('articles', (e) => !e.data.draft);
  const sorted = articles.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Norsk Luftvern',
    description: 'Nyheter og analyser om norsk luftvern og missilforsvar.',
    site: context.site,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.excerpt,
      link: `/articles/${articleSlug(entry.id)}/`,
      categories: [entry.data.category, ...(entry.data.tags ?? [])],
      author: entry.data.author ?? 'Redaksjonen',
    })),
    customData: '<language>no</language>',
  });
}
