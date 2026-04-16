import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clase 2 · Tecnoteca Rosario",
  description: "De la Especificación al Diseño - Tecnoteca Rosario",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
