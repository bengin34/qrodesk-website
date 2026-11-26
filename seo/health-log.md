# SEO health log

## 2026-11-26 (MEN-1174)
Crawl (live, before): FATAL 2 (robots.txt 404, sitemap missing) · 0 URLs crawled.
Crawl (local copy, 79-URL sitemap, before page edits): FATAL 3 BROKEN (extensionless links; 200 on GitHub Pages) · REVENUE: NO DESCRIPTION 9, THIN 25, NO CANONICAL 17, ORPHAN 4.
Crawl (local, after): FATAL 0 · REVENUE: THIN 24 · FLUFF: description length 19 (of 43 issues total).
GSC: skipped, service account sees no properties (empty site list).

Fixed: robots.txt + sitemap.xml; 9 descriptions; 17 canonicals; 4 orphans; homepage title/description/text/app links, dead Google Play badge, 404 favicon + og:image.

`sitemap.xml` is hand-maintained: add every new page to it.

Left (top 5):
1. Grant GSC access to the agent-ops service account for qrodesk.com.
2. QroDesk price claims disagree (home, terms, privacy vs App Store listing): Backlog issue.
3. THIN 24: mostly impressum/support/legal; app pages first (e.g. /sleepbaby/).
4. Description length 19.
5. Landing pages not linked from the homepage (Tinvi, clearMind, Papilio, Kita, Mamio): check store status first.
