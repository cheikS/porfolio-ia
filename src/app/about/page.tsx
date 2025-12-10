"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const techStacks = {
  "Web moderne": ["Next.js 15", "React", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion"],
  Backend: ["PHP 8 (MVC)", "MySQL", "API REST", "Validation & architecture"],
  "Java & Desktop": ["Java", "JavaFX", "MVVM", "Design patterns (Repository, Observer…)"],
  Outils: ["Git & GitHub", "Docker (bases)", "Postman", "VS Code"],
}

const timeline = [
  {
    year: "2022",
    title: "Jeu de gestion de ferme en JavaFX",
    description:
      "Développement d’un jeu desktop avec Java & JavaFX, en appliquant MVVM et plusieurs design patterns. J’y ai appris à structurer une application orientée objet de manière propre.",
  },
  {
    year: "2023",
    title: "Application Tricount (PHP / MySQL / MVC)",
    description:
      "Création d’une application web de gestion de dépenses en groupe, inspirée de Tricount. Mise en place d’une architecture MVC, d’un modèle de données adapté et de formulaires AJAX avec jQuery.",
  },
  {
    year: "2024",
    title: "Montée en compétences sur le web moderne",
    description:
      "Découverte et apprentissage de Next.js, TypeScript, TailwindCSS et shadcn/ui. Je commence à m’intéresser sérieusement à l’IA appliquée au développement.",
  },
  {
    year: "2025",
    title: "Portfolio interactif avec Chatbot IA",
    description:
      "Construction de ce portfolio pour présenter mes projets, expérimenter l’intégration de l’IA (OpenAI API) et montrer ma capacité à concevoir des expériences complètes front + back.",
  },
]

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* HERO */}
      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-muted/60 mb-3">
            <span className="text-lg">👨🏾‍💻</span>
            <span>À propos de moi</span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold">
            Yahya Sacko – développeur full-stack en construction, passionné par le web et l&apos;IA.
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            J’aime transformer des idées en applications concrètes : des outils web utiles, des
            interfaces interactives et des intégrations d&apos;IA qui apportent une vraie valeur.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.2fr)] items-start mt-4">
          {/* Texte principal */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="space-y-3 text-sm text-gray-800 dark:text-gray-100"
          >
            <p>
              Je m&apos;appelle <span className="font-semibold">Yahya Sacko</span>, je vis en
              Belgique et je suis en début de parcours dans le développement. J&apos;ai une approche
              très structurée du code : j’aime comprendre ce que je fais, organiser les projets,
              utiliser des architectures claires (MVC, MVVM, design patterns) et apprendre en
              construisant des choses concrètes.
            </p>
            <p>
              Mon parcours a commencé avec des technologies comme <span className="font-medium">
                Java, JavaFX, PHP et MySQL
              </span>{" "}
              à travers des projets d&apos;école. Ensuite, j&apos;ai progressivement basculé vers le{" "}
              <span className="font-medium">web moderne (Next.js, TypeScript, Tailwind)</span> et les{" "}
              <span className="font-medium">intégrations d&apos;IA</span>, en créant notamment ce
              portfolio avec un chatbot personnalisé.
            </p>
            <p>
              Je cherche aujourd&apos;hui à rejoindre une équipe où je peux à la fois{" "}
              <span className="font-medium">apporter</span> ce que je sais faire (projets full-stack,
              IA, bonnes pratiques) et <span className="font-medium">continuer à progresser</span> à
              travers des vrais projets, du feedback et des responsabilités.
            </p>
          </motion.div>

          {/* Carte profil */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card text-card-foreground p-4 text-xs space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-xl">
                👨🏾‍💻
              </div>
              <div>
                <div className="font-semibold text-sm">Yahya Sacko</div>
                <div className="text-muted-foreground">Développeur full-stack en devenir</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              <InfoLine label="Basé en" value="Belgique" />
              <InfoLine label="Focalisé sur" value="Web moderne & IA" />
              <InfoLine label="Stack actuelle" value="Next.js, TypeScript, PHP, Java" />
              <InfoLine label="États d&apos;esprit" value="Sérieux, curieux, persévérant" />
            </div>

            <div className="pt-2 border-t text-[11px] space-y-1">
              <div className="font-semibold">En dehors du code</div>
              <p className="text-muted-foreground">
                Je suis passionné par le football et le sport. Ça influence ma façon de travailler :
                discipline, répétition, envie de progresser petit à petit, mais tous les jours.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* TIMELINE */}
            {/* MON PARCOURS TECHNIQUE */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Mon parcours technique</h2>
        <p className="text-sm text-muted-foreground">
          Quelques étapes importantes qui résument comment j&apos;ai appris à coder et à structurer
          des projets.
        </p>

        <div className="relative mt-4">
          {/* Ligne verticale */}
          <div
            className="absolute left-3 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative flex gap-4 pl-8"
              >
                {/* Petit rond de la timeline */}
                <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full border-2 border-blue-500 bg-background" />

                {/* Colonne date */}
                <div className="w-16 flex-shrink-0 pt-[2px]">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {item.year}
                  </span>
                </div>

                {/* Contenu */}
                <div className="space-y-1">
                  <div className="text-sm font-medium">{item.title}</div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* COMPÉTENCES / STACK */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Compétences techniques</h2>
        <p className="text-sm text-muted-foreground">
          Voici un résumé des technologies et concepts avec lesquels je suis le plus à l’aise en ce
          moment.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(techStacks).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card text-card-foreground p-4 space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="text-[11px] border-dashed hover:border-solid cursor-default"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border rounded-2xl px-4 py-6 md:px-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-muted/60">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Travaillons ensemble sur votre prochain projet.
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Intéressé par un profil motivé, structuré et en progression constante ? Je serais ravi
            d&apos;échanger autour de vos besoins techniques.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects">
            <Button size="sm" variant="outline">
              ⭐ Voir mes projets
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm">✉️ Me contacter</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

/* ---- Sous-composants ---- */

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-[11px] font-medium">{value}</div>
    </div>
  )
}

function WorkCard({
  icon,
  title,
  lines,
}: {
  icon: string
  title: string
  lines: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="rounded-xl border bg-card text-card-foreground p-4 space-y-2"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <ul className="text-[11px] space-y-1 text-muted-foreground">
        {lines.map((line) => (
          <li key={line}>• {line}</li>
        ))}
      </ul>
    </motion.div>
  )
}
