# Second Street Web — homepage concept

A single static homepage for review. No build step, no dependencies.
Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Palette preview

Nine palettes are wired up. Append `?theme=<name>`, e.g. `index.html?theme=teal`.

Each theme is named for the colour you'd call the site — the accent that
carries the headline, buttons and awning — except `ink`, where the dark
ground is the dominant impression.

| Name | Paper | Accent | Reads as |
| --- | --- | --- | --- |
| `clay` *(default)* | warm cream | terracotta | local, hand-built, storefront |
| `crimson` | bone | signal red on black | Swiss, editorial, bold |
| `oxblood` | blush | deep burgundy | restrained, formal |
| `brass` | warm cream | brass on navy | established, civic |
| `teal` | cool gray | petrol | calm, precise |
| `cobalt` | near-white | cobalt blue | crisp, direct |
| `plum` | mauve-gray | deep magenta | distinctive, unexpected |
| `graphite` | warm gray | none — monochrome | severe, typographic |
| `ink` | **dark charcoal** | amber | after-hours, premium |

Old names from the first two rounds (`navy`, `slate`, `bone`, `harbor`,
`mustard`) still resolve — `theme.js` aliases them so shared links don't break.

### How these were checked

`clay` and `harbor` had accents only ΔE 9.3 apart on near-identical paper, and
`navy`/`mustard` were ΔE 4.6 — visually the same palette twice. Both duplicates
were cut and replaced (`plum`, `graphite`), and the remaining accents re-spaced
so the closest pair is now ΔE 26. Every theme was also swept for WCAG contrast
across thirteen foreground/background pairs; that turned up a brass accent below
4.5:1 and form/button borders below 1.4.11's 3:1 in *all nine* themes, which is
why there's a separate `--edge` token for interactive borders rather than
reusing the decorative `--line-strong` hairline.

There's also a pill switcher fixed at the bottom of the page. Pick a winner and
delete `theme.js` plus the `.theme-switch` block in `index.html` — the palette
you keep just becomes the `:root` block in `styles.css`. (`nav.js` stays — that
one drives the mobile menu.)

## Files

| File | Ships? |
| --- | --- |
| `index.html`, `styles.css` | yes |
| `fonts/*.woff2` | yes — Fraunces + Karla, subset, self-hosted |
| `nav.js` | yes — mobile menu toggle |
| `theme.js` | **no** — palette preview only, delete before launch |

## Before this goes live

- [x] **Web3Forms key** is wired into all four forms. Submissions post
      straight to Web3Forms and arrive at the address on that account. Each
      page sends a different `subject` so you can tell which one a lead came
      from: `secondstreetweb.com`, `lab/national`, `lab/centered`,
      `lab/centered-national`.
- [ ] **Thank-you page** (optional) — right now a submit lands on Web3Forms'
      own success page, which is off-brand. Uncomment the `redirect` hidden
      input in each form and point it at a `thanks.html` you control.
- [ ] **Testimonials** — all three quotes are placeholders and are labeled as
      such on the page. Replace with real quotes (with permission) or cut the
      section entirely. Don't ship the placeholders.
- [ ] **Photo** — swap the dashed `.photo-slot` block in the About section for
      `<img src="images/marc.jpg" alt="…">`.
- [ ] **Name** — "Marc" is used throughout the About/signature copy; change it
      if you want a different first name on the page.
- [ ] **Service-area list** — the cities in the strip under the hero are a
      first guess. Swap in the ones you actually want to rank for.

## Parallel experiments

`lab/` holds alternate directions that are deliberately kept off the main page —
nothing at the repo root links to them. See `lab/README.md`. Currently:

- `lab/centered/` → `/lab/centered/` — centered SaaS-marketing layout modelled on
  the reference site's shape, in four non-green palettes.
- `lab/national/` → `/lab/national/` — this page with every geographic reference
  removed, for marketing beyond one metro.
- `lab/centered-national/` → `/lab/centered-national/` — same, for the centered layout.

The region-free variants share this page's stylesheet and fonts, so design
changes flow through to them — but **copy edits do not**. See `lab/README.md`.

## GitHub Pages

Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder
`/ (root)`. For the custom domain, add `secondstreetweb.com` under Pages →
Custom domain (that writes a `CNAME` file), then point DNS at GitHub:

- `A` records for the apex → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `<your-github-username>.github.io`

Then tick **Enforce HTTPS** once the cert issues.
