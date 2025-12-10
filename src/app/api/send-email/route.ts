import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    // 🔎 Debug simple côté serveur
    console.log("Attempting to send email via Resend...")
    console.log("To:", "TON_ADRESSE_EMAIL_ICI")
    console.log("From API key present ?", !!process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "cheickyayasacko@hotmail.com", // <-- mets TON mail ici
      replyTo: email,
      subject: `Nouveau message depuis le portfolio – ${name}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    console.log("Resend result:", result)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Send email error:", error)
    return NextResponse.json(
      { error: error?.message || "Email not sent" },
      { status: 500 },
    )
  }
}
