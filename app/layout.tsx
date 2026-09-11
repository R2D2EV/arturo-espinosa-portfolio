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
      <body>{children}</body>
    </html>
  );
}
