// src/app/page.tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

const rotatingPhrases = [
  "des expériences web modernes avec Next.js & TypeScript.",
  "des interfaces animées avec Framer Motion & shadcn/ui.",
  "des backends propres avec PHP MVC, MySQL et bonnes pratiques.",
  "des applications Java & JavaFX structurées avec des design patterns.",
  "des intégrations d’IA avec l’API OpenAI.",
]

const mainSkills = [
  "Next.js 15",
  "TypeScript",
  "PHP 8 (MVC)",
  "MySQL",
  "Java / JavaFX",
  "Design patterns (MVC, MVVM, Repository)",
  "TailwindCSS",
  "shadcn/ui",
  "Framer Motion",
  "OpenAI API",
  "Git & GitHub",
]

export default function HomePage() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        {/* Texte gauche */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-muted/60">
            <span className="text-lg">👨🏾‍💻</span>
            <span className="font-medium">
              Yahya Sacko – Développeur Full-Stack orienté IA
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Je conçois des applications <span className="text-blue-600">interactives</span>
            <br />
            et des expériences <span className="text-blue-600">propulsées par l&apos;IA</span>.
          </h1>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>
              J’aime construire des projets complets, du backend (PHP, MySQL, Java) jusqu&apos;à
              des interfaces modernes (Next.js, Tailwind, shadcn/ui) avec des intégrations IA.
            </p>

            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm md:text-base font-medium"
            >
              Actuellement, je construis{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {rotatingPhrases[phraseIndex]}
              </span>
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects">
              <Button size="lg">⭐ Voir mes projets</Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                🎬 Voir les démos interactives
              </Button>
            </Link>
          </div>
        </div>

        {/* Faux terminal / bloc tech à droite */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-50 shadow-xl overflow-hidden text-xs md:text-[13px]"
        >
          {/* header du faux terminal */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700 bg-slate-950/70">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] opacity-60">yahyas-portfolio ~/</span>
          </div>

          <div className="px-4 py-3 space-y-1.5 font-mono">
            <div>
              <span className="text-green-400">$ </span>
              whoami
            </div>
            <div className="pl-5 text-blue-300">"Yahya Sacko"</div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>
              stack --main
            </div>
            <div className="pl-5 text-amber-200">
              ["Next.js", "TypeScript", "PHP", "MySQL", "Java / JavaFX", "OpenAI API"]
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>
              projects --highlight
            </div>
            <div className="pl-5 space-y-1">
              <div>
                ▸ <span className="text-cyan-300">Tricount</span>{" "}
                <span className="opacity-70">– gestion de dépenses (PHP MVC, MySQL)</span>
              </div>
              <div>
                ▸ <span className="text-cyan-300">Farming Game</span>{" "}
                <span className="opacity-70">– jeu JavaFX (MVVM, design patterns)</span>
              </div>
              <div>
                ▸ <span className="text-cyan-300">Portfolio IA</span>{" "}
                <span className="opacity-70">– Next.js + chatbot IA intégré</span>
              </div>
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>
              goals --current
            </div>
            <div className="pl-5 text-emerald-200">
              "Rejoindre une équipe où je peux contribuer sur des projets web modernes tout en
              continuant à progresser sur l&apos;IA et l&apos;architecture logicielle."
            </div>
          </div>
        </motion.div>
      </section>

      {/* CE QUE JE FAIS */}
      <section className="space-y-5">
        <h2 className="text-2xl md:text-3xl font-semibold">Ce que je fais</h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <FeatureCard
            icon="🧠"
            title="IA & intégration de chatbots"
            items={[
              "Intégration de l’API OpenAI dans des apps web.",
              "Création de chatbots personnalisés (portfolio, assistants).",
              "Gestion des prompts et du contexte pour des réponses pertinentes.",
            ]}
          />
          <FeatureCard
            icon="⚙️"
            title="Développement web moderne"
            items={[
              "Next.js 15, TypeScript, TailwindCSS, shadcn/ui.",
              "APIs et backends avec bonnes pratiques (MVC, validations).",
              "Attention à l’UX : interfaces claires, responsives et animées.",
            ]}
          />
          <FeatureCard
            icon="🎮"
            title="Apps Java & architecture"
            items={[
              "Applications JavaFX architecturées en MVVM.",
              "Utilisation de design patterns (Repository, Observer…).",
              "Structuration de projets orientés objet clairs et testables.",
            ]}
          />
        </div>
      </section>
            {/* À PROPOS DE MOI */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">À propos de moi</h2>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          {/* Texte principal */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="space-y-3 text-sm text-gray-700 dark:text-gray-200"
          >
            <p>
              Je m&apos;appelle <span className="font-semibold">Yahya Sacko</span>, je suis un
              développeur full-stack en début de carrière, basé en Belgique. J&apos;aime concevoir
              des applications complètes, du backend jusqu&apos;à l&apos;interface, avec un vrai
              souci de clarté et de structure (MVC, MVVM, design patterns…).
            </p>
            <p>
              J&apos;ai travaillé sur des projets concrets comme une application de gestion de
              dépenses type Tricount (PHP, MySQL, MVC), un jeu de gestion de ferme en JavaFX (MVVM,
              design patterns) et ce portfolio interactif en Next.js avec intégration d&apos;un
              chatbot IA. Ces projets me servent de terrain d&apos;entraînement pour progresser sur
              des technologies modernes comme Next.js, TypeScript, Tailwind et l&apos;API OpenAI.
            </p>
            <p>
              Aujourd&apos;hui, je cherche à rejoindre une équipe où je peux continuer à monter en
              compétence sur le développement web moderne, l&apos;IA et l&apos;architecture
              logicielle, tout en apportant mon sérieux, ma curiosité et ma capacité à apprendre
              vite.
            </p>
          </motion.div>

          {/* Petit bloc résumé à droite */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card text-card-foreground p-4 text-xs space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">⚽</span>
              <div>
                <div className="font-semibold text-sm">En dehors du code</div>
                <div className="text-muted-foreground">
                  Sport, football, cinéma et jeux vidéo.
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-1 text-[13px]">
                En résumé, je suis à l&apos;aise avec :
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                <li>Des projets complets front + back.</li>
                <li>Les architectures structurées (MVC, MVVM, design patterns).</li>
                <li>Les intégrations d&apos;IA dans des apps web.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-1 text-[13px]">
                Ce que je recherche :
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                <li>Stage, alternance ou premier poste en développement.</li>
                <li>Un environnement où je peux apprendre vite.</li>
                <li>Des projets web modernes et/ou liés à l&apos;IA.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>


      {/* PROJETS EN AVANT */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Projets en avant</h2>
          <Link href="/projects">
            <Button variant="outline" size="sm">
              Voir tous les projets
            </Button>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card text-card-foreground flex flex-col overflow-hidden"
            >
              {p.image && (
                <div className="w-full h-32 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-3 flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="text-[11px] text-muted-foreground line-clamp-3">
                  {p.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {p.technologies.slice(0, 3).map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px]">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2 text-[11px]">
                  <span className="text-muted-foreground">
                    {p.year} • {p.role}
                  </span>
                  <Link href="/projects" className="text-[11px] text-blue-600 hover:underline">
                    Détails →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPÉTENCES PRINCIPALES */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Compétences principales</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Voici les technologies et concepts avec lesquels je suis le plus à l&apos;aise en ce
          moment :
        </p>
        <div className="flex flex-wrap gap-2">
          {mainSkills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-xs px-2 py-1 border-dashed hover:border-solid cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border rounded-2xl px-4 py-6 md:px-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-muted/60">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Envie de travailler avec moi ?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Je suis ouvert aux opportunités (stage, alternance, premier emploi) sur des projets web
            modernes, IA ou applications complètes front/back.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects">
            <Button size="sm">Voir mes projets</Button>
          </Link>
          {/* Tu pourras remplacer par /contact quand tu auras une page de contact */}
          <Link href="/contact">
              <Button size="sm" variant="outline">✉️ Me contacter</Button>
          </Link>

        </div>
      </section>
    </main>
  )
}

/* -------- Sous-composant pour "Ce que je fais" -------- */

type FeatureCardProps = {
  icon: string
  title: string
  items: string[]
}

function FeatureCard({ icon, title, items }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
      className="rounded-xl border bg-card text-card-foreground p-4 flex flex-col gap-2"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <ul className="text-[11px] space-y-1 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
    
  )
}
