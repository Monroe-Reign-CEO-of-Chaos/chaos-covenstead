**Switch** — a beveled glass toggle that glows gold when on.

```jsx
<Switch label="Reveal the Covenstead" defaultChecked />
<Switch label="Dominion mode" onChange={(on) => setTheme(on ? 'dominion' : 'covenstead')} />
```

- Controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`). `disabled` supported.
- The track carries the signature bevel clip; the knob slides on a heavy "gravity" ease.
