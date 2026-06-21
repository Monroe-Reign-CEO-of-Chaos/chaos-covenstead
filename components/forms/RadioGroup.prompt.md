**RadioGroup** — single-choice options, each filling with a nebula-blue dot.

```jsx
<RadioGroup
  label="Your Allegiance"
  defaultValue="covenstead"
  options={[
    { value: 'covenstead', label: 'The Chaos Covenstead' },
    { value: 'dominion', label: 'The Dominion (the Lie)' },
  ]}
  onChange={(v) => console.log(v)}
/>
```

- Controlled (`value` + `onChange`) or uncontrolled (`defaultValue`).
- `options`: strings or `{ value, label }`.
