# Security audit — qrodesk-website (2026-11-10)

Source: `6fa81b2`, clean worktree. Profile: quick, single agent, source-only, no target code run. Partial coverage; no prior ledger. No coverage ledger was produced (skill's multi-agent ledger skipped).

## Result
| Severity | Count |
|---|---|
| critical / high / medium / low | 0 |
| needs_validation | 1 |
| rejected candidates | 3 |

## Surface
Static HTML/CSS/JS on GitHub Pages (CNAME `qrodesk.com`), 168 files, no build, no dependencies, no backend, no workflows. External requests: Google Fonts only. No third-party scripts, analytics or ads code in pages. No cookies/storage.

## Checked
- Secrets: tree + 107 commits scanned; clean. `app-ads.txt` publisher ID is public by design.
- `pullupmaster/auth.html` (query-string token, deep link): fixed scheme, encoded values, no-referrer, token removed from URL. Rejected.
- `kita-bewerbung-tracker/support.html` mailto form: encoded, self-impact only. Rejected.
- DOM sinks (`innerHTML`, `eval`, `document.write`, `postMessage`): none. Inline scripts only set the year/date.
- External links: all 17 `target="_blank"` use `noopener`. No `http://` resources.
- Dependencies/supply chain: none (no package manifest).

## Needs validation
`hosting-pages-config-headers`: Pages HTTPS enforcement, domain verification, headers live outside source. Owner check in repo Settings > Pages. No CSP meta tags exist; not a finding by itself.

## Notes (not findings)
- `.DS_Store` is tracked; leaks filenames only. Remove and gitignore (hygiene).
- Google Fonts loaded from Google CDN: privacy/GDPR consideration, not a security boundary.
- `.claude/` and `.agents/` skill dirs are tracked; Jekyll skips dot-dirs on Pages.

Details: `findings.json`.
