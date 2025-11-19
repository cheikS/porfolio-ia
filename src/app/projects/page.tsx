// src/app/projects/page.tsx

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Mes projets</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Voici une sélection de projets qui illustrent mon expérience en développement web, Java et
          intégration de l&apos;IA. Clique sur &quot;Voir les détails&quot; pour comprendre le contexte, les
          fonctionnalités et les choix techniques.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  )
}
