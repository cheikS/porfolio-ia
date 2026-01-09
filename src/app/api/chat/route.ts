// src/app/api/chat/route.ts
import { NextResponse } from "next/server"
import OpenAI from "openai"
import { baseInstructions, buildProjectsContext, chatProfile } from "@/data/chatProfile"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})



export async function POST(req: Request) {
  try {
    const { message } = (await req.json()) as { message: string }

    const projectsContext = buildProjectsContext()

    const systemPrompt = `
${baseInstructions}

Voici un résumé de mes projets (à utiliser pour répondre précisément) :

${projectsContext}

Informations personnelles rapides :
- Nom : ${chatProfile.name}
- Rôle : ${chatProfile.role}
- Localisation : ${chatProfile.location}
- Focus actuel : ${chatProfile.focus}

Important :
- Tu fais des réponses claires et relativement concises (5 à 12 phrases en général).
- Tu peux utiliser des listes à puces si ça aide un recruteur à lire plus facilement.
    `.trim()

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // ou "gpt-3.5-turbo" si ton compte n'a pas 4o-mini
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    })

    const reply =
      completion.choices[0]?.message?.content ??
      "Désolé, je n'ai pas réussi à formuler une réponse. N'hésitez pas à réessayer ou à utiliser la page Contact."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Erreur dans /api/chat:", error)
    return NextResponse.json(
      { error: "Erreur de connexion à l’API." },
      { status: 500 },
    )
  }
}
export function validateMessage(message: unknown) {
  if (typeof message !== "string") return { ok: false, error: "invalid_type" }
  const trimmed = message.trim()
  if (trimmed.length === 0) return { ok: false, error: "empty" }
  if (trimmed.length > 2000) return { ok: false, error: "too_long" }
  return { ok: true, value: trimmed }
}