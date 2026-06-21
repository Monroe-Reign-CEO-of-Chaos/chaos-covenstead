**NavBar** — the fixed Covenstead masthead: gradient Cinzel logo + tracked links over blurred obsidian.

```jsx
<NavBar
  logo="Chaos Covenstead"
  links={[
    { label: 'The Shadow Archive', href: '#' },
    { label: 'The Mythic Past', href: '#' },
    { label: 'The Heartspire', href: '#', active: true },
  ]}
/>
```

- `theme`: `covenstead` (dark/gold, default) | `dominion` (cold white sans — the Lie).
- Links accept plain strings or `{ label, href, active }`.
