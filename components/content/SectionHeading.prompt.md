**SectionHeading** — eyebrow + accent bar + Cinzel title, the standard way to open a section.

```jsx
<SectionHeading
  eyebrow="The Living Crystal"
  title="Nebula-Glass"
  accent="nebula"
/>
```

- `accent`: `gold` | `nebula` | `violet` — only changes the small bar's gradient.
- `align`: `left` (default) | `center` (centers eyebrow, bar, and title).
- Follow with a Cormorant body paragraph at `max-width: var(--reading-max)`.
