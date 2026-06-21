**GlassCard** — the nebula-glass artifact surface with a luminous top seam and glow-lift hover.

```jsx
<GlassCard accent="nebula">
  <Badge tone="nebula">Echo 1 — The Spark</Badge>
  <h3 style={{ fontFamily: "'Cinzel Decorative', serif", color: 'var(--gold-bright)' }}>
    The Resonance Prism
  </h3>
  <p style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-muted)' }}>
    The raw power of the First Spark made solid…
  </p>
</GlassCard>
```

- `accent`: `nebula` (cold crystal, default) | `gold` (sovereign) | `violet` (nebula).
- `hover`: set `false` for static specimen / print contexts.
- Compose headings in Cinzel Decorative and body in Cormorant Garamond inside it.
