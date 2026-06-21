**Toast** — a slim glass bar with a glowing nebula seam, for transient confirmations.

```jsx
<Toast tone="nebula" onDismiss={() => {}}>The Index was recorded.</Toast>
<Toast tone="gold">Echo Vessel sealed.</Toast>
<Toast tone="danger">The seam rejected the pattern.</Toast>
```

- `tone`: `nebula` (default) | `gold` | `violet` | `danger` — sets the seam + ritual glyph.
- `icon` overrides the glyph; `onDismiss` adds a ✕. Position/animate it yourself (e.g. fixed bottom-right).
