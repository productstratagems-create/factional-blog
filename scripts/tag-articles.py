#!/usr/bin/env python3
"""
Normalize tags across all articles:
1. Fix 3 articles with YAML list-format tags (- Tag) → array format [tag1, tag2]
2. Apply canonical tags via keyword matching on slug + title for untagged articles
"""

import os
import re
import sys

ARTICLES_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'articles')

# Canonical tag vocabulary
SYSTEMS = {
    'patriot':      ['patriot', 'pac-3'],
    'nasams':       ['nasams'],
    'iris-t':       ['iris-t'],
    'samp-t':       ['samp-t', 'sampt'],
    'thaad':        ['thaad'],
    'sm-3':         ['sm-3', 'sm3'],
    'arrow-3':      ['arrow-3'],
    'arrow-4':      ['arrow-4'],
    'iron-dome':    ['iron-dome'],
    'iron-beam':    ['iron-beam'],
    'davids-sling': ['davids-sling', 'davids-slynge'],
    'coyote':       ['coyote'],
}

TOPICS = {
    'cost-analysis':             ['cost-analysis', 'cost-database', 'price-tag', 'unpacking-the-price', 'cost-breakdown', 'kostnads'],
    'comparison':                ['-vs-', '-versus-', 'comparison', 'sammenligning', 'compared', 'compare'],
    'procurement':               ['anskaffelse', 'procurement', 'kontrakt', 'kjop', 'kjoper', 'purchase', 'signs-contract', 'inngar-kontrakt', 'acquiring', 'acquisition'],
    'ballistic-missile-defense': ['ballistic', 'bmd', 'missile-defense', 'missile-defence'],
    'counter-drone':             ['counter-drone', 'c-uas', 'drone-dome', 'dronedefender', 'coyote', 'leonidas', 'skywall', 'soft-kill', 'c-drone'],
    'directed-energy':           ['laser', 'directed-energy', 'helw', 'leonidas', 'iron-beam', 'epirus', 'laserluftvern', 'laservapen'],
    'hypersonic':                ['hypersonic', 'hgv', 'glide-vehicle', 'hypersonisk'],
}

GEO = {
    'norway':   ['norsk', 'norge', 'norway', 'norwegian', 'norges'],
    'sweden':   ['sverige', 'svensk', 'sweden', 'swedish', 'sveriges'],
    'finland':  ['finland', 'finlands', 'finsk', 'finnish'],
    'denmark':  ['denmark', 'denmarks', 'dansk', 'danish', 'danmar'],
    'nordic':   ['nordic', 'nordisk', 'norden'],
    'europe':   ['europe', 'european', 'europa', 'europeisk', 'europeiske'],
    'nato':     ['nato'],
}

# Override: articles whose YAML list tags should be rewritten to canonical array
MALFORMED_OVERRIDES = {
    'patriot-vs-sampt': ['patriot', 'samp-t', 'comparison'],
    'nasams-3-oppgradering': ['nasams', 'procurement', 'norway'],
    'norsk-luftvern-historikk': ['nasams', 'norway'],
}


def slug_from_path(path):
    return os.path.basename(path).replace('.md', '')


def extract_frontmatter(content):
    """Return (front_dict_raw, body_after_closing_dashes, has_yaml_list_tags)."""
    if not content.startswith('---'):
        return None, content, False
    end = content.find('\n---', 3)
    if end == -1:
        return None, content, False
    fm_text = content[3:end]
    body = content[end + 4:]  # skip \n---
    return fm_text, body, False


def has_yaml_list_tags(fm_text):
    """True if frontmatter contains a YAML list-style tags block."""
    return bool(re.search(r'^tags:\s*\n(\s+-\s+)', fm_text, re.MULTILINE))


def has_inline_tags(fm_text):
    """True if frontmatter contains inline array tags: [...]."""
    return bool(re.search(r'^tags:\s*\[', fm_text, re.MULTILINE))


def get_existing_inline_tags(fm_text):
    """Extract tags from inline array format."""
    m = re.search(r'^tags:\s*\[([^\]]*)\]', fm_text, re.MULTILINE)
    if not m:
        return []
    raw = m.group(1)
    return [t.strip().strip('"\'') for t in raw.split(',') if t.strip()]


def get_title(fm_text):
    m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', fm_text, re.MULTILINE)
    return m.group(1).strip('"\'') if m else ''


def keyword_match(text, keywords):
    """Return True if any keyword appears in text (word-boundary aware)."""
    text_lower = text.lower()
    for kw in keywords:
        if kw in text_lower:
            return True
    return False


def derive_tags(slug, title):
    """Derive canonical tags from slug + title via keyword matching."""
    search = (slug + ' ' + title).lower()
    tags = []

    for tag, keywords in SYSTEMS.items():
        if keyword_match(search, keywords):
            tags.append(tag)

    for tag, keywords in TOPICS.items():
        if keyword_match(search, keywords):
            tags.append(tag)

    for tag, keywords in GEO.items():
        if keyword_match(search, keywords):
            tags.append(tag)

    return tags


def format_tags_line(tags):
    if not tags:
        return None
    inner = ', '.join(tags)
    return f'tags: [{inner}]'


def remove_yaml_list_tags(fm_text):
    """Remove the tags: block in YAML list format."""
    return re.sub(r'^tags:\s*\n(?:\s+-[^\n]*\n)*', '', fm_text, flags=re.MULTILINE)


def remove_inline_tags(fm_text):
    """Remove the tags: [...] line."""
    return re.sub(r'^tags:\s*\[[^\]]*\]\n?', '', fm_text, flags=re.MULTILINE)


def set_tags(fm_text, tags):
    """Insert tags line just before the closing area of frontmatter."""
    tags_line = format_tags_line(tags)
    if tags_line is None:
        return fm_text
    # Insert before last non-empty line (preserve trailing newline)
    return fm_text.rstrip('\n') + '\n' + tags_line + '\n'


def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if not content.startswith('---'):
        return False, 'no frontmatter'

    end = content.find('\n---', 3)
    if end == -1:
        return False, 'no closing ---'

    fm_text = content[3:end]
    body = content[end:]  # includes \n---

    slug = slug_from_path(path)
    title = get_title(fm_text)

    # Case 1: malformed YAML list tags → override
    if slug in MALFORMED_OVERRIDES:
        fm_text = remove_yaml_list_tags(fm_text)
        fm_text = remove_inline_tags(fm_text)
        new_tags = MALFORMED_OVERRIDES[slug]
        fm_text = set_tags(fm_text, new_tags)
        new_content = '---' + fm_text + body
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, f'fixed malformed → {new_tags}'

    # Case 2: already has inline tags → merge with derived
    if has_inline_tags(fm_text):
        existing = get_existing_inline_tags(fm_text)
        derived = derive_tags(slug, title)
        merged = list(existing)
        for t in derived:
            if t not in merged:
                merged.append(t)
        if merged == existing:
            return False, 'already tagged (unchanged)'
        fm_text = remove_inline_tags(fm_text)
        fm_text = set_tags(fm_text, merged)
        new_content = '---' + fm_text + body
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, f'merged tags → {merged}'

    # Case 3: has YAML list tags (but not in MALFORMED_OVERRIDES) → convert
    if has_yaml_list_tags(fm_text):
        fm_text = remove_yaml_list_tags(fm_text)
        derived = derive_tags(slug, title)
        if derived:
            fm_text = set_tags(fm_text, derived)
        new_content = '---' + fm_text + body
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, f'converted list tags → {derived}'

    # Case 4: no tags → derive
    derived = derive_tags(slug, title)
    if not derived:
        return False, 'no keywords matched'
    fm_text = set_tags(fm_text, derived)
    new_content = '---' + fm_text + body
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True, f'added tags → {derived}'


def main():
    paths = sorted(
        os.path.join(ARTICLES_DIR, f)
        for f in os.listdir(ARTICLES_DIR)
        if f.endswith('.md')
    )

    changed = 0
    unchanged = 0
    errors = 0

    for path in paths:
        try:
            modified, reason = process_file(path)
            if modified:
                changed += 1
                print(f'  [+] {os.path.basename(path)}: {reason}')
            else:
                unchanged += 1
        except Exception as e:
            errors += 1
            print(f'  [!] {os.path.basename(path)}: ERROR — {e}', file=sys.stderr)

    print(f'\nDone. {changed} modified, {unchanged} unchanged, {errors} errors.')


if __name__ == '__main__':
    main()
