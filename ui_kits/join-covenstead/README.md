# Join the Covenstead — The Hidden Gateway

The **secret destination behind the shadow gateway**. Visitors only reach this
screen by finding the shadows on the Trojan-Horse landing
(`ui_kits/covenstead-site/index.html`), clicking to trigger the Fracture, and
then stepping through the revealed Covenstead's "Take the Vow" gateway. It is an
initiation / sign-up screen that wires together the form, feedback, and
navigation components into one real flow.

## What it demonstrates
- **NavBar** masthead with an active "Join" link.
- A two-column layout: an **atmospheric image panel** (the First Empire, with a
  `PulseRule` and a prophecy line) beside a **glass form panel**.
- The full forms kit: **Input** (Sigil Name, email), **Select** (first Book),
  **RadioGroup** (allegiance), **Checkbox** (read the Bible), **Switch**
  (dispatches), plus a **Tooltip**-wrapped **Badge**.
- On **Take the Vow**: a filigree-framed **Dialog** welcomes the initiate (using
  the typed Sigil Name) and a gold **Toast** confirms in the corner.

## Notes
- Composes design-system components from `window.ChaosCovensteadDesignSystem_4ee2b6`
  via the compiled `_ds_bundle.js` — it does not re-implement any primitive.
- Reached only through the secret gateway; its nav links back to the landing.
