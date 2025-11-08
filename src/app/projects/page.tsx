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

export default function ProjectsPage() {
  return (
    <section className="space-y-8 px-4 md:px-10 lg:px-20 py-10">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Mes projets</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Voici quelques réalisations récentes. Cliquez pour voir le code ou la démo.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
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
                  <Link href={p.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="default">Voir le code</Button>
                  </Link>
                )}
                {p.demo && (
                  <Link href={p.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Live demo</Button>
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
