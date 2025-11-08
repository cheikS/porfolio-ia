"use client"

import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/Navbar"
import ChatBot from "@/components/ChatBot"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
