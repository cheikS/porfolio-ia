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
  "Intégration de l'IA avec l'API OpenAI.",
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
        {/* Bloc gauche : texte */}
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

        {/* Bloc droit : faux terminal / profil technique */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-50 shadow-2xl overflow-hidden text-xs md:text-[13px]"
        >
          {/* halo de couleur */}
          <div className="pointer-events-none absolute -top-32 right-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-24 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

          {/* header du faux terminal */}
          <div className="relative flex items-center gap-2 px-3 py-2 border-b border-slate-700 bg-slate-950/80">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] opacity-60">cheick-portfolio ~/profile</span>
          </div>

          {/* contenu terminal */}
          <div className="relative px-4 py-3 space-y-1.5 font-mono">
            <div>
              <span className="text-green-400">$ </span>whoami
            </div>
            <div className="pl-5 text-blue-300">
              "Cheick Sacko", développeur full-stack junior basé en Belgique
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>stack --main
            </div>
            <div className="pl-5 text-amber-200">
              ["Next.js", "TypeScript", "PHP MVC", "MySQL", "Java/JavaFX", "OpenAI API"]
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>projects --highlight
            </div>
            <div className="pl-5 space-y-1">
              <div>
                ▸ <span className="text-cyan-300">Tricount</span>{" "}
                <span className="opacity-70">
                  – gestion de dépenses en groupe (PHP, MySQL, MVC)
                </span>
              </div>
              <div>
                ▸ <span className="text-cyan-300">Farming Game</span>{" "}
                <span className="opacity-70">
                  – jeu JavaFX (MVVM, design patterns, logique métier)
                </span>
              </div>
              <div>
                ▸ <span className="text-cyan-300">Portfolio IA</span>{" "}
                <span className="opacity-70">
                  – Next.js, animations, chatbot intégré avec OpenAI
                </span>
              </div>
            </div>

            <div className="mt-3">
              <span className="text-green-400">$ </span>goals --current
            </div>
            <div className="pl-5 text-emerald-200">
              "Trouver une opportunité (stage / alternance / premier poste) pour progresser sur le
              web moderne, l'IA et l'architecture logicielle."
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
            title="IA & chatbots"
            items={[
              "Intégration de l’API OpenAI dans des applications web.",
              "Création de chatbots alignés sur un profil (comme sur ce portfolio).",
              "Gestion basique des prompts et du contexte côté backend.",
            ]}
          />
          <FeatureCard
            icon="⚙️"
            title="Développement web moderne"
            items={[
              "Next.js 15, TypeScript, TailwindCSS, shadcn/ui.",
              "Structuration des pages, composants réutilisables, UX propre.",
              "Connexion à des APIs et gestion du state côté client/serveur.",
            ]}
          />
          <FeatureCard
            icon="🎮"
            title="Applications Java & architecture"
            items={[
              "Projets Java/JavaFX avec architecture MVVM.",
              "Utilisation de design patterns (Repository, Observer…).",
              "Logique métier claire et classes métier bien séparées.",
            ]}
          />
        </div>
      </section>

      {/* À PROPOS DE MOI (teaser de la page /about) */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">À propos de moi</h2>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.2fr)] items-start">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="space-y-3 text-sm text-gray-800 dark:text-gray-100"
          >
            <p>
              Je suis un développeur full-stack en début de carrière, avec une vraie envie de
              progresser à travers des projets concrets. J&apos;aime autant structurer un backend
              propre (PHP, MySQL, MVC) que concevoir une interface moderne avec Next.js et Tailwind.
            </p>
            <p>
              Mes projets les plus parlants : une application de gestion de dépenses type Tricount,
              un jeu JavaFX structuré en MVVM, et ce portfolio interactif avec chatbot IA. Ils
              montrent ma capacité à aller du concept jusqu&apos;à une application utilisable.
            </p>
            <p>
              Je cherche à rejoindre une équipe où je peux apprendre vite, apporter de la valeur et
              continuer à monter en compétences sur le web moderne et l&apos;IA.
            </p>
            <Link href="/about">
              <Button variant="outline" size="sm">
                En savoir plus sur mon parcours →
              </Button>
            </Link>
          </motion.div>

          {/* Carte côté droit */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card text-card-foreground p-4 text-xs space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-xl">
                👨🏾‍💻
              </div>
              <div>
                <div className="font-semibold text-sm">Profil rapide</div>
                <div className="text-muted-foreground">
                  Full-stack junior • Web moderne & IA • Belgique
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              <InfoLine label="Focus" value="Next.js, PHP MVC, JavaFX" />
              <InfoLine label="Qualités" value="Sérieux, structuré, motivé" />
              <InfoLine label="Apprentissage" value="Par projets concrets" />
              <InfoLine label="Objectif" value="Stage / alternance / 1er poste" />
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
          moment.
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
          <h3 className="text-xl md:text-2xl font-semibold">
            Envie d&apos;échanger sur un projet ou une opportunité ?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Je suis ouvert aux stages, alternances ou premiers postes en développement web moderne,
            avec une dimension IA ou architecture logicielle.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects">
            <Button size="sm">Voir mes projets</Button>
          </Link>
          <Link href="/contact">
            <Button size="sm" variant="outline">
              ✉️ Me contacter
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

/* -------- sous-composants -------- */

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

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-[11px] font-medium">{value}</div>
    </div>
  )
}
