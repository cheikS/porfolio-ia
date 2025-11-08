"use client"

import { useState } from "react"

export default function ChatBot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { sender: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()
      const botMessage = { sender: "bot", text: data.reply }
      setMessages((prev) => [...prev, botMessage])
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Erreur de connexion à l’API." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-4 flex flex-col">
      <div className="h-64 overflow-y-auto mb-2 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm ${
              m.sender === "user"
                ? "bg-blue-600 text-white self-end"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 self-start"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Parle à Yahya IA..."
          className="flex-1 px-3 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "..." : "▶️"}
        </button>
      </form>
    </div>
  )
}
