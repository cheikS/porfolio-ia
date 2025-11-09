"use client"

import { useEffect, useRef, useState } from "react"
import ChatBot from "@/components/ChatBot"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  // Fermer avec Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      {/* Bouton emoji flottant */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        className="fixed bottom-4 right-4 z-50 size-14 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:scale-105 transition grid place-items-center text-2xl"
        title={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {/* Emoji avatar “dev” – tu peux changer pour 🚀, 🤖, etc. */}
        🧑‍💻
      </button>

      {/* Panneau du chat (affiché seulement si open) */}
      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-20 right-4 z-50 w-[92vw] max-w-md h-[70vh] md:h-[60vh]"
        >
          <div className="relative w-full h-full">
            {/* Bouton X pour fermer */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute -top-3 -right-3 size-8 rounded-full grid place-items-center bg-red-500 text-white shadow-md"
            >
              ×
            </button>

            <ChatBot />
          </div>
        </div>
      )}
    </>
  )
}
