**Input** — a glass text field with a mono label and nebula-blue focus glow.

```jsx
<Input label="Sigil Name" placeholder="Speak your true name…" />
<Input label="Frequency" hint="Required" invalid defaultValue="" />
```

- `label`, `hint`, `invalid`. All other props pass through to `<input>` (type, value, onChange, placeholder…).
- Pair with `Textarea` and `Select` for full forms; labels are mono UPPERCASE by convention.
