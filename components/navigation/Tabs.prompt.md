**Tabs** — mono labels with a gold underline that slides between them.

```jsx
<Tabs tabs={[
  { id: 'b1', label: 'Book I', content: 'Girl Made of Fire — the Feral Redux.' },
  { id: 'b2', label: 'Book II', content: 'The Chaos Era.' },
  { id: 'b5', label: 'Book V', content: 'The Stillness War — the finale.' },
]} />
```

- `tabs`: strings or `{ id, label, content }`. Controlled (`value`+`onChange`) or uncontrolled (`defaultValue`).
- The underline glides on the pulse-line gradient. Omit `content` to use Tabs purely as a selector.
