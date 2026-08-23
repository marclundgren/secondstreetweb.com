# lab/ — parallel design experiments

Alternate directions, kept out of the way of the main concept at the repo root.
Nothing in here is linked from `/index.html`, so the Orange County page can keep
being iterated on without these getting in the way. Each experiment is a
self-contained folder — its own HTML, CSS and fonts — so you can delete one
without touching anything else.

| Folder | URL | What it is |
| --- | --- | --- |
| `centered/` | `/lab/centered/` | Centered / SaaS-marketing layout, modelled on the reference site's homepage shape |
| `national/` | `/lab/national/` | The main editorial page with every geographic reference stripped out |
| `centered-national/` | `/lab/centered-national/` | The centered layout with every geographic reference stripped out |

### How the region-free variants work

`national/` and `centered-national/` are **content-only** variants. Each is a
single HTML file that links back to its parent's stylesheet, fonts and scripts:

- `national/index.html` → `../../styles.css`, `../../nav.js`, `../../theme.js`
- `centered-national/index.html` → `../centered/styles.css`, `../centered/theme.js`

So design changes to a parent page — palette, spacing, type — flow through to
its region-free twin automatically, and there are no duplicate font files. The
trade-off is the reverse: **copy edits do not propagate.** Change a headline on
the main page and you have to make the same edit in `national/index.html`. If
the two versions start diverging in more than wording, it's worth stopping and
picking one.

Both carry `noindex`, same as `centered/`, so nothing here competes with the
real homepage in search.

---

---

## national/

The root page's editorial layout — Fraunces + Karla, storefront motif, all nine
palettes — with the geography taken out, for marketing beyond one metro.

What changed from the root page, and nothing else:

| Root page | `national/` |
| --- | --- |
| Eyebrow "Orange County, California" | "Independent Web Developer" |
| "for local small businesses" | "for small businesses" |
| Storefront plaque "Est. Orange County" | "Est. Second Street" |
| City strip (Old Towne Orange, Fullerton, …) | Business types (retail, dental & medical, studios, trades, …) |
| "We talk, in person if you'd like" | "We talk, on your schedule" |
| "Twenty minutes at your counter or over the phone" | "Twenty minutes on a call — or at your counter, if you're close by" |
| "I'm a freelance web developer in Orange County" | "I'm a freelance web developer" |
| Testimonial roles with city names | Roles only |
| "Happy to meet in person anywhere in the county" | "Happy to meet by video, phone, or in person" |
| "the businesses that make this county run" | "the businesses that make main street run" |
| Footer "Where / Orange County, California" | "Clients / Small businesses anywhere in the U.S." |

The About section's "the block with the hardware store, the dentist, the taqueria
that's been there thirty years" is kept deliberately — it reads as main-street
positioning rather than a place, and it's what still ties the name to the pitch
once the county is gone.

---

## centered-national/

`centered/` with the geography removed. Badge becomes "Hand-Coded Websites for
Small Businesses", the hero subhead and the "what kind of businesses" FAQ answer
drop their regional framing, and the testimonial roles lose their city names.
Same four palettes, same everything else.

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
- The audit form posts to Web3Forms on the same account as the main page. Each
  page uses a distinct `subject` so leads are attributable to the variant that
  produced them.
- Testimonials are placeholders and labelled as such on the page.
- The three stats avoid any claim I can't stand behind (no invented "years of
  experience" figure). Add one if you want the reference's opening beat.

**A caution.** This is a close structural copy of a site whose domain is one word
away from yours. Same section order, same rhetorical beats, same badge-over-
centered-headline opening. Different colour and typeface pull it apart, but if
you go this direction it's worth reworking the section order and at least the
hero composition so it reads as convergent evolution rather than a trace.
