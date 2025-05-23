import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lysiom - Premium Research Platform",
  description: "A high-end platform for collaborative research backed by Silicon Valley investors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="vignette">{children}</body>
    </html>
  )
}
