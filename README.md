# Arturo Espinosa Vargas — Portfolio V2

Personal portfolio built with Next.js + TypeScript.

## Design direction

- Light, minimal overall composition
- Graphite / space-green visual language
- Real liquid-glass effect on sticky navigation and contact rail using `liquid-gl`
- CSS glass fallback and glass treatment on larger content panels
- Subtle star field in the About section
- RAG Anywhere presented with a real architecture visual instead of an abstract row of boxes
- Certification cards use brand-color company logos

The liquid-glass treatment is based on the open-source `liquidGL` project by NaughtyDuk (MIT licensed):
https://github.com/naughtyduk/liquidGL

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Public assets

- `public/arturo-espinosa.png`
- `public/arturo-espinosa-resume.pdf`
- `public/arturo-espinosa-cv.pdf`
- `public/projects/rag-anywhere-architecture.png`

The RAG Anywhere source repository remains private; the portfolio states that source is available on request.

## Deploy to Vercel

Push this project to the public portfolio repository and import it into Vercel as a Next.js project.


## V3 refinements

- Removed technology chips from the two secondary project cards.
- Added a custom analytics + ETL visual to the Solera experience card.
- Added a subtle UNAM-inspired academic watermark to the Faculty of Sciences card.
- Preserved the existing page layout, card sizing, grid distribution and visual hierarchy.
