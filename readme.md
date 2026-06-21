# Chaos Covenstead — Design System

> *"This is not a website. It is a Living Sanctuary. A Prophecy Chamber. A Chaos Altar."*

The brand system for **Chaos Covenstead** — Monroe Reign's cinematic lore codex:
a five-book dark-fantasy mythology (*the Chaos Bible*) wrapped around two
sovereign figures, **Monroe** (the Spark / Ignition) and **Cain** (the Anchor /
Gravity), and the secret history of the **Heartspire**, the **First Empire**, and
the **Five Echo Vessels**.

The brand tells one story through **two opposed visual worlds**, and the tension
between them *is* the identity:

| | **The Dominion** — *the Lie* | **The Covenstead** — *the Truth* |
|---|---|---|
| Mood | cold, sterile, corporate fame | liquid obsidian night, mythic, alive |
| Surface | platinum white, geometric grid | black glass lit by nebula gold & nebula |
| Type | Montserrat (heavy, extreme tracking) | Cinzel Decorative + Cormorant Garamond + Share Tech Mono |
| Feeling | a cage disguised as glamour | a sanctuary that breathes |

The signature brand moment is the **Fracture**: the cold Dominion page shatters
like glass — tremor, shard burst, ash flash — and inverts into the Covenstead.
Default to the **Covenstead** world for almost everything; reach for the
**Dominion** theme (`.theme-dominion`) only to portray "the Lie" / the surface
celebrity layer.

---

## Sources (provenance — you may not have access; stored for those who do)

- **Website / codebase:** `github.com/Monroe-Reign-CEO-of-Chaos/chaos-covenstead`
  — the live two-phase site (`index.html`, `heartspire.html`, `shadow-archive.html`,
  `monroe.html`, `cain.html`, `binary-star.html`, `mythic-past.html`). All tokens,
  type, and component patterns in this system are lifted from this source.
  A second repo, `chaos-covenstead/chaosiscanon`, was listed but not needed.
- **Manuscripts** (`uploads/…docx`): the five master manuscripts —
  *Book I: Girl Made of Fire · Book II: The Chaos Era · Book III: The Gravity Era ·
  Book IV: The Awakening Era (The Hollow Threshold) · Book V: The Stillness War.*
  These are the canon source for tone and terminology.
- **Imagery** (`assets/imagery/`): brand art from the repo + uploads — fire-hair
  Monroe, Cain, the First Empire cityscape, the Hollow Threshold, Echo Vessels.

> Explore the GitHub repository above to build richer, more faithful designs —
> it holds the full set of lore pages and the original interaction code.

---

## Content Fundamentals — how the brand writes

The voice is **mythic scripture meets manifesto**. It is the Chaos Bible: every
line reads like canon being declared, not marketing being pitched.

- **Register:** elevated, prophetic, absolute. Short declarative sentences that
  land like verdicts. *"We escaped to become their undoing." "You cannot own a
  heartbeat."* Fragments are used deliberately for weight.
- **Person:** collective **"We"** (the Covenstead) against **"They / the Thrones /
  the Dominion."** The reader is addressed as **"You"** — initiated, not sold to.
  *"You are entering the Cinematic Lore Codex."*
- **Capitalization:** proper nouns of the canon are **Title-Cased as sacred terms** —
  the Heartspire, the Hollow Threshold, the Five Echo Vessels, the Pulse, the
  First Empire, the Index, Nebula-Glass, the Thrones. This is the brand's most
  distinctive copy tic: ordinary words become proper nouns of power.
- **Emphasis:** a single italic word per sentence carries the charge —
  *real, undoing, remember, refusal, chose.* Use `<em>` sparingly and surgically.
- **Quotation:** canon quotes use literal straight/curly double quotes `"…"` and
  are attributed in mono caps (*— The Chaos Bible, Vol. I*).
- **No corporate filler.** No "delight," no "seamless," no emoji-as-decoration.
  The only glyphs used are ritual marks: `⬡  ◆  ◈  ↙ ↘` and `★`.
- **The Lie speaks differently.** Dominion copy is shallow PR gloss —
  *"A masterclass in controlled chaos." "Two Icons. One Track. Zero Apologies."*
  Punchy, hollow, hype. Use it only to portray the surface world being rejected.

**Recurring canon vocabulary:** the Pulse · the Fracture · the Heartspire ·
the Hollow Threshold · the Five Echo Vessels (Spark, Anchor, Power, Guardian,
Memory) · the First Empire · Nebula-Glass · the Index · the Thrones / the
Dominion · the Covenstead · Binary-Star Bond · *"We are the Pulse in the Fracture."*

---

## Visual Foundations

**Color.** Default world is **liquid obsidian night** (`#05050A` → `#0F0F1E`) lit
by three accents: **nebula gold** (`#D4A94B`, the sovereign metal — headings,
filigree, borders), **nebula-glass blue** (`#A8DCEE`, cold living crystal —
eyebrows, secondary accents), and **violet/rose** (`#8B5CF6` / `#F472B6`, nebula
seams & the "collision"). **Pulse amber** (`#F59E0B`) and **wildfire**
(`#FF7800`→`#D73700`) are the heartbeat/ignition reds. The Dominion palette is the
inverse: platinum white `#F7F7FA`, silver, graphite, near-black. See
`tokens/colors.css`.

**Type.** Four voices, used with intent (`tokens/typography.css`):
*Cinzel Decorative* (900/700, UPPERCASE, tracked `0.05em`, often gradient-filled)
for titles & logos — the carved-in-stone voice. *Cormorant Garamond* (300/400,
**lives in italic**, line-height 1.8–2.2) for body & prophecy. *Share Tech Mono*
(UPPERCASE, tracked `0.3–0.55em`) for eyebrows, tags, system marks. *Montserrat*
(heavy, extreme tracking) only inside `.theme-dominion`.

**Backgrounds.** Never flat. The page floor is a slow **breathing nebula** —
layered radial gradients (violet, gold, rose) over near-black, animated with a
22s `hue-rotate`/brightness loop. Heroes add a pulsing inner glow and drifting
**nebula orbs**. Full-bleed fantasy imagery is used for atmosphere, always darkened
toward the edges so gold text stays legible.

**Borders & cards.** Surfaces are **nebula-glass**: a thin (1px) low-opacity
gold or nebula border, a dark translucent glass fill (`backdrop-filter: blur`),
and a **luminous accent seam** (a 2px gradient bar) across the card's top edge.
Corners are **near-square — 2px is the house radius** ("carved, not rounded").
Pills/circles are reserved for avatars and status dots.

**The bevel.** The signature shape is an **angled-corner clip-path**
(`polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)`) on CTAs and pillars —
a slanted, faceted edge like cut crystal. (`--clip-bevel`.)

**Depth = glow, not shadow.** Elevation is expressed with **outer glow**
(gold / nebula / violet halos), not dark drop-shadows. Hover lifts a card 4px and
turns on its glow; the border brightens. Dominion is the exception — there, depth
is flat and shadowless (sterile by design).

**Motion.** Slow, deliberate, **never bouncy.** Easing is
`cubic-bezier(0.25,0.46,0.45,0.94)` for most things and a heavy
`cubic-bezier(0.8,0,0.2,1)` for "gravity" (Cain). Entrances fade-and-rise 22–36px.
Ambient loops breathe (8–22s). The EKG **pulse line** draws a heartbeat across the
floor. Respect `prefers-reduced-motion`.

**Hover / press.** Links shift to gold + a soft text glow. Glass buttons brighten
their border and cast a violet/gold halo; ghost buttons brighten the nebula
outline. Dominion buttons **invert** (fill ↔ outline) on hover — sharp, instant,
no glow.

**Filigree.** Heroes are framed by a thin gold **filigree border** with corner
brackets and `◆` diamond markers top & bottom — the PDF-grimoire aesthetic.

**Imagery vibe.** Saturated, cinematic fantasy. Two temperatures: **warm**
(fire-hair Monroe, lava cities, ember altars) and **cool** (obsidian nebula halls,
nebula crystal, violet botanicals), tied together by **gold** accents and deep
blacks. High contrast, glowing focal points, painterly.

---

## Iconography

The brand is **deliberately icon-light** — it has no icon font and almost no UI
icons. Meaning is carried by **type, ritual glyphs, and imagery** instead.

- **Ritual glyphs (Unicode):** the entire "icon set" is a handful of sacred marks
  used as bullets, pillar emblems, and dividers: **`⬡`** (the Pulse / hexagon),
  **`◆` `◈`** (diamond markers & chamber emblems), **`★`**, and directional
  **`↙ ↘`** (the shadows). Render these in gold or violet at small sizes.
- **No emoji** in the Covenstead world. (The original site used a few emoji on
  pillar cards; this system replaces them with the gold ritual glyphs above —
  see the `Pillar` component default `icon="◈"`.) Treat emoji as off-brand.
- **The EKG pulse line** is the one "illustrated" motif — an inline SVG heartbeat
  path, available as `<PulseRule variant="ekg" />`.
- **Imagery, not icons,** does the heavy lifting: full-bleed art and nebula-glass
  photo frames. See `assets/imagery/` (copied from the source repo + uploads).

If a project genuinely needs a UI icon set (arrows, close, play), pair the brand
with a **thin-stroke line set** (e.g. Lucide via CDN) tinted gold/nebula — but
keep it minimal; the brand's instinct is to use a word or a glyph, not an icon.

---

## Index / Manifest

**Foundations**
- `styles.css` — the entry point (consumers link this one file; `@import` list only).
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`
- `guidelines/*.html` — specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.

**Components** (`components/<group>/` — React, `window.ChaosCovensteadDesignSystem_4ee2b6.*`)
- `core/` — **Button**, **Badge**, **Eyebrow**, **PulseRule**
- `cards/` — **GlassCard**, **Pillar**
- `content/` — **SectionHeading**, **Prophecy**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **RadioGroup**, **Switch**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**
- `navigation/` — **NavBar**, **Tabs**, **Accordion**

Each component ships a `.jsx`, a `.d.ts` (props contract), a `.prompt.md`
(usage), and a `@dsCard` thumbnail HTML.

**Templates** (`templates/<slug>/` — copy-to-start, via the Templates picker)
- `lore-page/` — **Lore Page**: obsidian hero + filigree, prophecy, glass-card
  grid, canon quote. Edit `ds-base.js`'s `base` to point at the bound DS folder.

**UI Kits** (`ui_kits/<product>/`)
- `covenstead-site/` — full interactive recreation of the website: the Dominion
  "Lie" hero that **fractures** into the Covenstead. (Also a Starting Point.)

**Assets**
- `assets/imagery/` — brand art (Monroe, Cain, First Empire, Echo Vessels, Threshold).

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Claude Agent Skill.

---

## Caveats

- **Fonts** are loaded from **Google Fonts** via `@import` (Cinzel Decorative,
  Cormorant Garamond, Share Tech Mono, Montserrat). They render everywhere online
  but the compiler can't see `@font-face` through a remote `@import`, so the
  "Fonts" count shows 0. For an offline build, self-host the four families.
- The original **`Monroe Front Page.png`** (7 MB) exceeded the import limit; the
  Dominion hero substitutes `monroe-dominion-mask.jpeg`. Re-add the real front
  page if you have it.
