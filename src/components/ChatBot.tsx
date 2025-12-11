"use client"

import { useState } from "react"

export default function ChatBot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { sender: "user" as const, text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      })
      const data = await res.json()
      const botMessage = { sender: "bot" as const, text: data.reply ?? "❌ Erreur de l’API." }
      setMessages((prev) => [...prev, botMessage])
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Erreur de connexion à l’API." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold">
        💬 Chat avec Cheick IA
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] p-2 rounded-lg text-sm ${
              m.sender === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "mr-auto bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écris un message…"
          className="flex-1 px-3 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "…" : "▶️"}
        </button>
      </form>
    </div>
  )
}
