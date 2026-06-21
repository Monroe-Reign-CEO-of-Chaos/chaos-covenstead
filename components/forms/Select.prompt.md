**Select** — a glass dropdown with a gold caret.

```jsx
<Select label="Choose a Book" options={[
  'Book I — Girl Made of Fire',
  'Book II — The Chaos Era',
  'Book V — The Stillness War',
]} />
```

- `options`: strings or `{ value, label }`. Or pass `<option>` children directly.
- `label`, `hint`, `invalid`, plus native select props (value, onChange…).
