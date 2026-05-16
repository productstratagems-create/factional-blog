#!/usr/bin/env node
/**
 * Enriches each article with a "Where are we now?" research summary,
 * written by Claude using web search to pull recent developments.
 *
 * Usage:
 *   node src/scripts/enrich-articles.mjs            # skip already-fresh entries
 *   node src/scripts/enrich-articles.mjs --force    # re-run all
 *   node src/scripts/enrich-articles.mjs --limit=5  # process first N articles
 *   node src/scripts/enrich-articles.mjs --slug=my-article-slug  # single article
 *
 * Requires:  ANTHROPIC_API_KEY env var
 * Writes to: src/data/research-context.json  (commit this file)
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT        = join(__dirname, '../..');
const ARTICLES    = join(ROOT, 'src/content/articles');
const DATA_DIR    = join(ROOT, 'src/data');
const CTX_FILE    = join(DATA_DIR, 'research-context.json');
const STALE_DAYS  = 7;

const FORCE   = process.argv.includes('--force');
const LIMIT   = parseInt(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? '0') || 0;
const SINGLE  = process.argv.find(a => a.startsWith('--slug='))?.split('=')[1];

// ── Frontmatter parser ─────────────────────────────────────────────────────
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    fm[key] = val;
  }
  return fm;
}

// ── Staleness check ────────────────────────────────────────────────────────
function isStale(entry) {
  if (!entry?.lastVerified) return true;
  const age = (Date.now() - new Date(entry.lastVerified).getTime()) / 86_400_000;
  return age > STALE_DAYS;
}

// ── Enrichment call ────────────────────────────────────────────────────────
async function enrich(slug, fm, client) {
  const lang     = fm.lang || 'no';
  const langName = lang === 'en' ? 'English' : lang === 'sv' ? 'Swedish' : 'Norwegian Bokmål';
  const excerpt  = (fm.excerpt ?? '').slice(0, 400);

  const system = `You are a senior defense analyst specializing in Nordic and European air defense, missile defense, and security policy. You write in ${langName} with the measured, precise tone of a professional defense journal.`;

  const user = `Article:
Title: ${fm.title}
Category: ${fm.category}
Published: ${fm.date}
Summary: ${excerpt}

Use web search to find what has happened with this topic recently (last 30–60 days). Then write a "Where are we now?" research epilogue in ${langName}.

Requirements:
- 2–3 tight paragraphs
- Ground claims in verifiable facts, figures, and named programs
- Cover operational status, procurement decisions, policy shifts, or recent events as appropriate
- Do NOT reference the original article or say "this article"
- Write only the prose — no heading, no JSON wrapper`;

  const response = await client.messages.create(
    {
      model:      'claude-sonnet-4-6',
      max_tokens: 700,
      system,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{ role: 'user', content: user }],
    },
    { headers: { 'anthropic-beta': 'web-search-2025-03-05' } },
  );

  const summary = response.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('\n\n')
    .trim();

  // Extract cited URLs from web search result blocks
  const sources = [];
  for (const block of response.content) {
    if (block.type === 'tool_result' && Array.isArray(block.content)) {
      for (const item of block.content) {
        if (item.type === 'text') {
          const urls = [...item.text.matchAll(/https?:\/\/[^\s"')>]+/g)].map(m => m[0]);
          sources.push(...urls.slice(0, 3));
        }
      }
    }
  }

  return {
    summary,
    lastVerified: new Date().toISOString().split('T')[0],
    sources: [...new Set(sources)].slice(0, 5),
  };
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is not set');
    process.exit(1);
  }

  const client = new Anthropic();
  await mkdir(DATA_DIR, { recursive: true });

  let ctx = {};
  try { ctx = JSON.parse(await readFile(CTX_FILE, 'utf8')); } catch {}

  let files = (await readdir(ARTICLES)).filter(f => f.endsWith('.md'));
  if (SINGLE) {
    files = files.filter(f => f.replace(/\.md$/, '') === SINGLE);
    if (!files.length) { console.error(`Article not found: ${SINGLE}`); process.exit(1); }
  }
  if (LIMIT) files = files.slice(0, LIMIT);

  let processed = 0;
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');

    if (!FORCE && !SINGLE && !isStale(ctx[slug])) {
      process.stdout.write(`skip  ${slug}\n`);
      continue;
    }

    const raw = await readFile(join(ARTICLES, file), 'utf8');
    const fm  = parseFrontmatter(raw);
    if (!fm || fm.draft === 'true') {
      process.stdout.write(`skip  ${slug} (draft)\n`);
      continue;
    }

    process.stdout.write(`enrich ${slug} …`);
    try {
      ctx[slug] = await enrich(slug, fm, client);
      processed++;
      process.stdout.write(' done\n');
      // Write incrementally so partial runs aren't lost
      await writeFile(CTX_FILE, JSON.stringify(ctx, null, 2) + '\n');
    } catch (err) {
      process.stdout.write(` ERROR: ${err.message}\n`);
    }
  }

  console.log(`\nDone. ${processed} article(s) enriched.`);
}

main();
