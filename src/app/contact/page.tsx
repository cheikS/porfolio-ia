"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setLoading(true)
  setError(false)
  setSuccess(false)

  const form = e.currentTarget
  const formData = new FormData(form)

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  }

  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  setLoading(false)

  if (res.ok) {
    setSuccess(true)
    form.reset()
  } else {
    setError(true)
  }
}

  return (
    <main className="max-w-xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Me contacter</h1>
      <p className="text-sm text-muted-foreground">
        Si vous souhaitez collaborer, discuter d’une opportunité ou simplement échanger, vous pouvez m’envoyer un message via ce formulaire.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Nom</label>
          <Input name="name" required placeholder="Votre nom" />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <Input name="email" type="email" required placeholder="Votre email" />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <Textarea name="message" required placeholder="Votre message..." />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </Button>

        {success && (
          <p className="text-green-600 text-sm">Message envoyé avec succès 🎉</p>
        )}
        {error && (
          <p className="text-red-600 text-sm">Une erreur est survenue. Réessayez.</p>
        )}
      </form>
    </main>
  )
}
