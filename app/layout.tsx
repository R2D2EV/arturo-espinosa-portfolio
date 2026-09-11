import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arturo Espinosa Vargas | AI & Cloud Engineer",
  description:
    "AI & Cloud Engineer focused on Google Cloud, RAG, Vertex AI, backend engineering and production-oriented AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Filtro SVG global: textura de grano usada por el efecto "liquid glass" */}
        <svg
          width="0"
          height="0"
          style={{ position: "absolute", overflow: "hidden" }}
          aria-hidden="true"
          focusable="false"
        >
          <filter id="liquidGlassNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0"
            />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}