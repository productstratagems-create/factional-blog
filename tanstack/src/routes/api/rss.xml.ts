import { createAPIFileRoute } from '@tanstack/react-router/server';
import { getAllArticles } from '../../lib/articles';

export const APIRoute = createAPIFileRoute('/api/rss.xml')({
  GET: ({ request }) => {
    const siteUrl = new URL(request.url).origin;
    const articles = getAllArticles();

    const items = articles
      .map((a) => {
        const pubDate = new Date(a.date).toUTCString();
        const link = `${siteUrl}/articles/${a.slug}`;
        const cats = [a.category, ...(a.tags ?? [])]
          .map((c) => `<category>${escXml(c)}</category>`)
          .join('');
        return `<item>
  <title>${escXml(a.title)}</title>
  <link>${link}</link>
  <guid isPermaLink="true">${link}</guid>
  <pubDate>${pubDate}</pubDate>
  <description>${escXml(a.excerpt)}</description>
  <author>${escXml(a.author ?? 'Redaksjonen')}</author>
  ${cats}
</item>`;
      })
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Norsk Luftvern</title>
    <link>${siteUrl}</link>
    <description>Nyheter og analyser om norsk luftvern og missilforsvar.</description>
    <language>no</language>
    <atom:link href="${siteUrl}/api/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
});

function escXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
