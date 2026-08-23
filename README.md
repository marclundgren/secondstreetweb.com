# Second Street Web — homepage concept

A single static homepage for review. No build step, no dependencies.
Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Palette preview

Three palettes are wired up so you can compare them:

| URL | Palette |
| --- | --- |
| `index.html` or `?theme=clay` | **Clay** — cream paper, terracotta accent, warm ink (default) |
| `?theme=navy` | **Navy** — warm off-white, brass accent, deep navy bands |
| `?theme=oxblood` | **Oxblood** — soft blush paper, deep burgundy accent |

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

- [ ] **Web3Forms key** — `index.html`, replace `YOUR-WEB3FORMS-ACCESS-KEY`
      with a real key from <https://web3forms.com> (free, no account needed —
      they email you the key). Nothing else needs configuring; the form posts
      directly and messages arrive at whatever address you register.
      Optionally uncomment the `redirect` hidden input to send people to your
      own thank-you page instead of Web3Forms'.
- [ ] **Testimonials** — all three quotes are placeholders and are labeled as
      such on the page. Replace with real quotes (with permission) or cut the
      section entirely. Don't ship the placeholders.
- [ ] **Photo** — swap the dashed `.photo-slot` block in the About section for
      `<img src="images/marc.jpg" alt="…">`.
- [ ] **Name** — "Marc" is used throughout the About/signature copy; change it
      if you want a different first name on the page.
- [ ] **Service-area list** — the cities in the strip under the hero are a
      first guess. Swap in the ones you actually want to rank for.

## GitHub Pages

Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder
`/ (root)`. For the custom domain, add `secondstreetweb.com` under Pages →
Custom domain (that writes a `CNAME` file), then point DNS at GitHub:

- `A` records for the apex → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `<your-github-username>.github.io`

Then tick **Enforce HTTPS** once the cert issues.
