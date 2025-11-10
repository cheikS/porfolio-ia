"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// --- Helpers ---
function withProtocol(url?: string) {
  if (!url) return ""
  if (/^https?:\/\//i.test(url)) return url
  return `https://${url.replace(/^\/+/, "")}`
}

export default function ProjectsPage() {
  // Ajoute le Portfolio en premier
  const extendedProjects = [
    {
      title: "Portfolio – Site Next.js & IA",
      description:
        "Mon site personnel réalisé avec Next.js 15, Tailwind, Shadcn/UI, Framer Motion et OpenAI API. Démo interactive et widget de chat.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind",
        "Shadcn/UI",
        "Framer Motion",
        "OpenAI API",
      ],
      image: "/images/portfolio-preview.jpeg",
      github: "github.com/ton-user/ton-portfolio",
    },
    // 👉 Renommer “Clicount” en “Tricount” sans modifier la source
    ...projects.map((p) =>
      /clicount/i.test(p.title ?? "")
        ? { ...p, title: "Tricount" }
        : p
    ),
  ]

  return (
    <section className="space-y-8 px-4 md:px-10 lg:px-20 py-10">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Mes projets</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Voici quelques réalisations récentes. Cliquez pour voir le code.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {extendedProjects.map((p, i) => (
          <motion.div
            key={p.title + i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <Card className="flex flex-col h-full hover:shadow-lg transition rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {p.image ? (
                <div className="relative w-full h-48">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    priority={i < 2}
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700" />
              )}

              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                {p.technologies?.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </CardContent>

              <CardFooter className="mt-auto flex gap-3 p-4">
                {p.github && (
                  <Link
                    href={withProtocol(p.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                  >
                    <Button variant="default">Voir le code</Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
