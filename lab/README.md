# lab/ — parallel design experiments

Alternate directions, kept out of the way of the main concept at the repo root.
Nothing in here is linked from `/index.html`, so the Orange County page can keep
being iterated on without these getting in the way. Each experiment is a
self-contained folder — its own HTML, CSS and fonts — so you can delete one
without touching anything else.

| Folder | URL | What it is |
| --- | --- | --- |
| `centered/` | `/lab/centered/` | Centered / SaaS-marketing layout, modelled on the reference site's homepage shape |

---

## centered/

A deliberate structural mimic of secondstreetdigital.com's homepage: pill badge
over a big centered headline with one phrase in the accent colour, centered
subhead, one large pill CTA, a three-stat strip, three feature cards with icon
tiles, a 2×2 numbered process grid, a split "why me" section with check cards,
two testimonials with star ratings, and a `+`/`×` FAQ accordion. Content is
web development instead of Google Ads.

**Palettes** — four, all well away from the reference's emerald green:

| `?theme=` | Accent |
| --- | --- |
| `indigo` *(default)* | `#4F46E5` violet-blue |
| `azure` | `#0B69D4` blue |
| `magenta` | `#BE1D66` raspberry |
| `ember` | `#C2410C` burnt orange |

**Type** — Space Grotesk (geometric sans) + JetBrains Mono for the eyebrows,
badge and stat numerals. Self-hosted and subset, same as the main page; the mono
labels are the reference's device, the typefaces are not.

**Notes**

- The FAQ uses native `<details>`/`<summary>`, so it works with no JavaScript.
  `theme.js` is the palette switcher only and gets deleted before launch.
- `<meta name="robots" content="noindex">` is set so this never competes with
  the real homepage in search while it's parked on the live site.
- The audit form posts to Web3Forms and needs the same access key as the main
  page — search for `YOUR-WEB3FORMS-ACCESS-KEY`.
- Testimonials are placeholders and labelled as such on the page.
- The three stats avoid any claim I can't stand behind (no invented "years of
  experience" figure). Add one if you want the reference's opening beat.

**A caution.** This is a close structural copy of a site whose domain is one word
away from yours. Same section order, same rhetorical beats, same badge-over-
centered-headline opening. Different colour and typeface pull it apart, but if
you go this direction it's worth reworking the section order and at least the
hero composition so it reads as convergent evolution rather than a trace.
