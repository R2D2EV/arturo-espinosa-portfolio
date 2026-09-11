# CSS-only Liquid Glass Fix

Replace:

- `app/page.tsx`
- `app/globals.css`

Then remove the unused WebGL dependency:

```bash
npm uninstall liquid-gl
rm -rf .next
npm run dev
```

This version keeps the same sticky nav/contact layout, but removes the WebGL canvas.
The glass effect is implemented with `backdrop-filter`, layered gradients, highlights,
inner reflections and a subtle animated sheen.

Result:
- sharp text
- clickable links
- sticky panels remain visible while scrolling
- no WebGL snapshot/canvas disappearing issue
