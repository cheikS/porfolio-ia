import OpenAI from "openai"
import { NextResponse } from "next/server"


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Tu es Yahya Sacko, un jeune développeur full-stack passionné par le web moderne, l’IA et le sport. Réponds avec un ton amical et professionnel.",
        },
        { role: "user", content: message },
      ],
    })

    const reply = completion.choices[0].message?.content
    return NextResponse.json({ reply })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
