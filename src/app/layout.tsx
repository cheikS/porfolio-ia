import "./globals.css"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import ChatWidget from "@/components/ChatWidget" // ou ton composant chatbot

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />

          {/* ton chatbot doit être ici (global) */}
          <ChatWidget />

          <main className="mx-auto max-w-6xl px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
