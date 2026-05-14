#!/usr/bin/env node
/**
 * Migrates norskluftvern_export.md (WordPress export) into individual
 * Astro content-collection markdown files under src/content/articles/.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, '..');
const EXPORT = join(ROOT, 'src/content/articles/norskluftvern_export.md');
const OUT_DIR = join(ROOT, 'src/content/articles');

// ── Category detection ────────────────────────────────────────────────────────
const CATEGORY_RULES = [
  [/nasams|patriot|samp\/t|samp-t|iris-t|shorad|manpad|missilforsvar|luftvernrakett|rakettluftvern|aster|sea\s?sparrow/i, 'missilforsvar'],
  [/anskaffelse|innkjøp|kontrakt|budsjett|budget|ffm|fma|forsvarsmateriell/i, 'anskaffelse'],
  [/nato|alliert|partner|edip|eu\s?forsvar|transatlantisk/i, 'nato'],
  [/historikk|historisk|tilbakeblikk|history|opprinnelse|bakgrunn/i, 'history'],
  [/teknologi|radar|sensor|avionics|elektronikk|kommando|nettverksbasert/i, 'teknologi'],
];

function detectCategory(title, slug, body) {
  const hay = `${title} ${slug} ${body.slice(0, 600)}`;
  for (const [re, cat] of CATEGORY_RULES) {
    if (re.test(hay)) return cat;
  }
  return 'analyse';
}

// ── Date parsing ──────────────────────────────────────────────────────────────
function parseDate(raw) {
  // "Mon, 22 May 2017 16:27:21 +0000"
  try {
    const d = new Date(raw.trim());
    if (!isNaN(d)) {
      return d.toISOString().slice(0, 10);
    }
  } catch {}
  return '2017-01-01';
}

// ── Slug extraction ───────────────────────────────────────────────────────────
function extractSlug(linkField) {
  // linkField may be markdown: [http://...](http://...)  or plain URL
  const urlMatch = linkField.match(/https?:\/\/[^\s)\]]+/);
  if (!urlMatch) return null;
  // Strip query string before splitting (handles ?p=NNN WordPress fallback URLs)
  const url = urlMatch[0].split('?')[0].replace(/\/$/, '');
  const parts = url.split('/').filter(Boolean);
  const last = parts[parts.length - 1] || null;
  // Reject if it looks like a hostname (no dots allowed in slug)
  if (!last || last.includes('.')) return null;
  return last;
}

// ── HTML → Markdown ───────────────────────────────────────────────────────────
function htmlToMarkdown(html) {
  let md = html;

  // Strip WordPress block comments
  md = md.replace(/<!--\s*wp:[^>]*-->/g, '');
  md = md.replace(/<!--\s*\/wp:[^>]*-->/g, '');

  // Headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n');
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n');

  // Inline emphasis
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Images — convert to markdown image
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]+alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, '![$1]($2)');
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*\/?>/gi, '![]($1)');

  // Figure captions → italics below image
  md = md.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '\n*$1*\n');
  md = md.replace(/<figure[^>]*>([\s\S]*?)<\/figure>/gi, '\n$1\n');

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
    const cleaned = inner.replace(/<[^>]+>/g, '').trim();
    return cleaned.split('\n').map(l => `> ${l}`).join('\n') + '\n';
  });

  // Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, '$1\n');
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, '$1\n');
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');

  // Paragraphs & breaks
  md = md.replace(/<\/p>/gi, '\n\n');
  md = md.replace(/<p[^>]*>/gi, '');
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // Horizontal rules
  md = md.replace(/<hr\s*\/?>/gi, '\n---\n');

  // Strip all remaining tags
  md = md.replace(/<[^>]+>/g, '');

  // Decode common HTML entities
  md = md
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”');

  // Collapse excess blank lines
  md = md.replace(/\n{3,}/g, '\n\n');

  return md.trim();
}

// ── Excerpt ───────────────────────────────────────────────────────────────────
function makeExcerpt(plainText, maxLen = 220) {
  const clean = plainText.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const cut = clean.lastIndexOf(' ', maxLen);
  return (cut > 0 ? clean.slice(0, cut) : clean.slice(0, maxLen)) + '…';
}

// ── YAML escaping ─────────────────────────────────────────────────────────────
function yamlStr(s) {
  return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

// ── Main ──────────────────────────────────────────────────────────────────────
const raw = readFileSync(EXPORT, 'utf8');

// Split on bare --- lines (separator between articles)
const chunks = raw.split(/\n---\n/);

const usedSlugs = new Set(
  // Don't overwrite existing hand-crafted articles
  ['patriot-vs-sampt', 'nasams-3-oppgradering', 'norsk-luftvern-historikk']
);

let written = 0;
let skipped = 0;

for (const chunk of chunks) {
  const trimmed = chunk.trim();
  if (!trimmed) { skipped++; continue; }

  // Extract ## Title
  const titleMatch = trimmed.match(/^##\s+(.+)$/m);
  if (!titleMatch) { skipped++; continue; }
  const title = titleMatch[1].trim();

  // Extract metadata fields
  const dateMatch = trimmed.match(/\*\*Date:\*\*\s*(.+)/);
  const authorMatch = trimmed.match(/\*\*Author:\*\*\s*(.+)/);
  const typeMatch = trimmed.match(/\*\*Type:\*\*\s*(.+)/);
  const linkMatch = trimmed.match(/\*\*Link:\*\*\s*(.+)/);

  const type = typeMatch ? typeMatch[1].trim() : 'Post';
  if (type !== 'Post') { skipped++; continue; }

  const rawDate = dateMatch ? dateMatch[1].trim() : '';
  const date = parseDate(rawDate);
  const author = authorMatch ? authorMatch[1].trim() : 'Redaksjonen';
  const linkField = linkMatch ? linkMatch[1].trim() : '';
  let slug = extractSlug(linkField);

  if (!slug) {
    // Fallback: slugify the title
    slug = title.toLowerCase()
      .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  // Collision handling
  let finalSlug = slug;
  let suffix = 2;
  while (usedSlugs.has(finalSlug)) {
    finalSlug = `${slug}-${suffix++}`;
  }
  usedSlugs.add(finalSlug);

  // Extract body (everything after the metadata block)
  // Metadata block ends after the Link line; find that position
  const metaEnd = trimmed.search(/\n\n(?![\*\*])/);
  const bodyRaw = metaEnd > -1 ? trimmed.slice(metaEnd).trim() : '';

  // Convert HTML body to markdown
  const bodyMd = htmlToMarkdown(bodyRaw);

  // Plain text for excerpt
  const plainText = bodyMd.replace(/[#*\[\]!`>_~]/g, '').replace(/\s+/g, ' ').trim();
  const excerpt = makeExcerpt(plainText);

  const category = detectCategory(title, finalSlug, plainText);

  const frontmatter = [
    '---',
    `title: ${yamlStr(title)}`,
    `date: ${date}`,
    `excerpt: ${yamlStr(excerpt)}`,
    `category: ${category}`,
    `author: ${yamlStr(author === 'norskluftvern' || author === 'norskluftvern0' ? 'Redaksjonen' : author)}`,
    `lang: no`,
    `draft: false`,
    '---',
  ].join('\n');

  const outPath = join(OUT_DIR, `${finalSlug}.md`);
  writeFileSync(outPath, `${frontmatter}\n\n${bodyMd}\n`);
  written++;
}

console.log(`\nMigration complete:`);
console.log(`  Written : ${written}`);
console.log(`  Skipped : ${skipped}`);
console.log(`  Total   : ${written + skipped}`);
