# Covenstead Site — UI Kit

A faithful recreation of the **Chaos Covenstead** marketing/lore website
(github.com/Monroe-Reign-CEO-of-Chaos/chaos-covenstead).

## The signature interaction
The site's whole thesis is a **reveal**. It opens as **The Dominion** — a cold,
platinum, sterile celebrity-PR page ("the Lie": *High Heels & Headaches by
Monroe × Cain*). Two soft **shadows** sit beneath the stars. Click (or keyboard-
activate) either shadow and the page **fractures**: a screen tremor, a burst of
glass shards, a white ash-flash — and reality inverts into **The Chaos
Covenstead**: liquid obsidian night, gold filigree, prophecy scripture, the Five
Echo Vessels archive, and the canon quote.

## Files
- `index.html` — the full interactive landing (Dominion → Fracture → Covenstead).
  Also tagged as a Starting Point.

## How it's built
- Links the design system's `styles.css` for all tokens (colors, type, spacing).
- Recreates the two-phase layout with the brand's real CSS vocabulary:
  `.theme-dominion` scope for the Lie; obsidian + nebula tokens for the Truth.
- The fracture sequence uses the Web Animations API for the shard burst, an
  `IntersectionObserver` for scroll-reveal, and a body-class swap for the phase
  flip — matching the original's "no matrix, no glitch — pure glass, pure ash."

## Patterns demonstrated
Dominion nav + hero + shadow triggers · gold-filigree hero frame · prophecy
block · three beveled Pillars · nebula-glass Echo Vessel cards · canon quote ·
mono footer. These map directly onto the design system components
(`NavBar`, `Pillar`, `GlassCard`, `Prophecy`, `SectionHeading`, `Badge`).

## The secret gateway
The Covenstead is hidden, not advertised. After the Fracture reveals it, the
hero CTA ("Step into the Pulse"), the nav "Join" link, and the closing **Take the
Vow** gateway all lead to `../join-covenstead/index.html` — the initiation
screen. Only a visitor who finds the shadows ever reaches it.

> Note: imagery uses the repo's own art (fire-hair Monroe, Cain, First Empire).
> The original 7 MB `Monroe Front Page.png` was too large to import, so the
> Dominion hero uses `monroe-dominion-mask.jpeg` in its place.
