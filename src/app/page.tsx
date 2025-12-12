// src/app/page.tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

const rotatingPhrases = [
  "Next.js & TypeScript pour des interfaces modernes.",
  "PHP MVC & MySQL pour des backends structurés.",
  "Java & JavaFX avec des design patterns clairs.",
  "Intégration de l&apos;IA avec l&apos;API OpenAI.",
  "Des projets complets, du backend au frontend.",
]

const mainSkills = [
  "Next.js 15",
  "TypeScript",
  "TailwindCSS",
  "shadcn/ui",
  "PHP 8 (MVC)",
  "MySQL",
  "Java / JavaFX",
  "Design patterns (MVC, MVVM, Repository)",
  "OpenAI API",
  "Framer Motion",
  "Git & GitHub",
]

export default function HomePage() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-muted/70">
            <span className="text-lg">👨🏾‍💻</span>
            <span className="font-medium">
              Cheick Sacko – Développeur full-stack junior (Belgique)
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Je conçois des applications{" "}
              <span className="text-blue-600 dark:text-blue-400">web modernes</span>
              <br />
              et j&apos;explore l&apos;
              <span className="text-blue-600 dark:text-blue-400">intégration de l&apos;IA</span>.
            </h1>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl">
              Je suis en début de parcours, mais déjà à l&apos;aise pour construire des projets
              complets : backend structuré, interface claire, et expériences interactives avec
              Next.js, PHP MVC, Java/JavaFX et l&apos;API OpenAI.
            </p>

            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm md:text-base font-medium"
            >
              En ce moment, je travaille surtout sur{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {rotatingPhrases[phraseIndex]}
              </span>
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects">
              <Button size="lg">⭐ Voir mes projets</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                👤 En savoir plus sur moi
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="ghost">
                ✉️ Me contacter
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-50 shadow-2xl overflow-hidden text-xs md:text-[13px]"
        >
          <div className="pointer-events-none absolute -top-32 right-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-24 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative flex items-center gap-2 px-3 py-2 border-b border-slate-700 bg-slate-950/80">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] opacity-60">cheick-portfolio ~/profile</span>
          </div>

          <div className="relative px-4 py-3 space-y-1.5 font-mono">
            <div>
              <span className="text-green-400">$ </span>whoami
            </div>
            <div className="pl-5 text-blue-300">
              &quot;Cheick Sacko&quot;, développeur full-stack junior basé en Belgique
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>stack --main
            </div>
            <div className="pl-5 text-amber-200">
              [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;PHP MVC&quot;, &quot;MySQL&quot;, &quot;Java/JavaFX&quot;, &quot;OpenAI API&quot;]
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>goals --current
            </div>
            <div className="pl-5 text-emerald-200">
              &quot;Trouver une opportunité (stage / alternance / premier poste) pour progresser sur le
              web moderne, l&apos;IA et l&apos;architecture logicielle.&quot;
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
