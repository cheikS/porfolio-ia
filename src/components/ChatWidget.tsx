"use client"

import { useEffect, useRef, useState } from "react"
import ChatBot from "@/components/ChatBot"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  // Fermer avec la touche Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      {/* 🔘 Bouton emoji flottant */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        className={`
          fixed bottom-6 right-6 z-50 size-16
          rounded-full shadow-2xl border-2 border-white/40
          bg-gradient-to-br from-blue-600 to-indigo-700
          hover:scale-110 active:scale-95 transition-transform
          grid place-items-center text-4xl text-white
          animate-[pulse_3s_ease-in-out_infinite]
        `}
        title={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        👨🏾‍💻
      </button>

      {/* 💬 Panneau du chat (affiché seulement si open) */}
      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-md h-[70vh] md:h-[60vh]"
        >
          <div className="relative w-full h-full">
            {/* Bouton X pour fermer */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute -top-3 -right-3 size-8 rounded-full grid place-items-center bg-red-500 text-white shadow-md hover:bg-red-600 transition"
            >
              ×
            </button>

            {/* Fenêtre du chat */}
            <ChatBot />
          </div>
        </div>
      )}
    </>
  )
}
