---
name: chaos-covenstead-design
description: Use this skill to generate well-branded interfaces and assets for Chaos Covenstead (Monroe Reign's dark-fantasy lore codex), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **`readme.md`** — the full design guide: brand story (the Dominion "Lie" vs the
  Covenstead "Truth"), Content Fundamentals (voice/tone), Visual Foundations, and
  Iconography. Read this first.
- **`styles.css`** — link this one file to inherit every token (it `@import`s
  `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`).
- **`components/`** — React primitives: Button, Badge, Eyebrow, PulseRule,
  GlassCard, Pillar, SectionHeading, Prophecy, NavBar. Each has a `.prompt.md`.
- **`templates/lore-page/`** — a copy-to-start lore page.
- **`ui_kits/covenstead-site/`** — full interactive site recreation (the Fracture).
- **`guidelines/`** — visual specimen cards. **`assets/imagery/`** — brand art.

## The one rule that matters most
Default to the **Covenstead** world: obsidian night, nebula gold + nebula +
violet, Cinzel/Cormorant/Share Tech Mono, glass cards with luminous seams, 2px
corners, glow-not-shadow depth, beveled CTAs, mythic-scripture copy. Use the
**Dominion** theme (`.theme-dominion`: platinum white, Montserrat, sterile grid)
**only** to depict "the Lie" / surface celebrity layer. Never use emoji; use the
ritual glyphs `⬡ ◆ ◈`.
