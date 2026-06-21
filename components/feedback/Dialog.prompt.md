**Dialog** — a glass modal inside a gold filigree frame, over a blurred obsidian scrim.

```jsx
const [open, setOpen] = React.useState(false);
<Button onClick={() => setOpen(true)}>Open the Seal</Button>
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  eyebrow="The Hollow Threshold"
  title="Open the Seam?"
  footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Not Yet</Button><Button variant="solid">Open It</Button></>}
>
  Once the seam is opened, the Index cannot be un-sung.
</Dialog>
```

- Controlled via `open` / `onClose`. Scrim click and ✕ both close.
- `eyebrow`, `title`, `footer`, `width`. Body renders in italic Cormorant, centered.
