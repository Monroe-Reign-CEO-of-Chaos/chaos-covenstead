**Pillar** — a beveled glass panel for the "three roles" pattern (icon, title, body).

```jsx
<Pillar icon="◈" title="The Prophecy Chamber">
  Decode hidden meanings in the lyrics. The songs knew what the singers had forgotten.
</Pillar>
```

- Lay three in a flex row with `gap: 1.8rem` (they `flex: 1`, `max-width: 320px`).
- `icon` is optional — pass a rune glyph (◈ ⬡ ◆) or a small node.
- Body renders in italic Cormorant automatically.
