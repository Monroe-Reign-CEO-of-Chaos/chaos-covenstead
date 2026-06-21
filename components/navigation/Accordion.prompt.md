**Accordion** — stacked glass rows that open with a gold seam.

```jsx
<Accordion items={[
  { id: 'pulse', title: 'What is the Pulse?', content: 'The heartbeat of the First Empire…' },
  { id: 'index', title: 'What is the Index?', content: 'The pattern that opens the seam…' },
]} />
```

- `items`: `{ id, title, content }`. `allowMultiple` to keep several open; `defaultOpen` for initial ids.
- Titles render in Cinzel, bodies in Cormorant. The ◆ marker rotates to an ✕ when open.
