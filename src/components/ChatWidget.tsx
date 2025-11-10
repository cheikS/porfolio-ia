"use client"

import { useEffect, useRef, useState } from "react"
import ChatBot from "@/components/ChatBot"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const panelRef = useRef<HTMLDivElement | null>(null)

  // Fermer avec la touche Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Cache la bulle d’indication après quelques secondes ou dès qu'on clique
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* 🔘 Bouton emoji flottant */}
      <button
        onClick={() => {
          setOpen((v) => !v)
          setShowHint(false)
        }}
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

      {/* 💬 Petite bulle d'indication */}
      {showHint && !open && (
        <div
          className="fixed bottom-24 right-24 z-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 animate-[fadeIn_1s_ease-in-out]"
        >
          💬 Clique ici pour discuter avec moi !
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700 rotate-45"></div>
        </div>
      )}

      {/* 💭 Panneau du chat (affiché seulement si open) */}
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
