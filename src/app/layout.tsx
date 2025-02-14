import "./globals.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "InnovTech - Innovative Tech Solutions",
  description: "Elevate your business and drive the future with our innovative tech solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

