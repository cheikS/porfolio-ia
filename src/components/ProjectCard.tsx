"use client"

import { useState } from "react"
import type { Project } from "@/data/projects"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="flex flex-col h-full">
        <CardHeader>
          {/* 📷 Aperçu du projet */}
          {project.image && (
            <div className="w-full h-40 mb-3 overflow-hidden rounded-md border border-gray-200 dark:border-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <CardTitle className="text-lg">{project.title}</CardTitle>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {project.shortDescription}
          </p>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px]">
                {t}
              </Badge>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            {project.year} • {project.role}
          </p>
        </CardContent>

        <CardFooter className="mt-auto flex gap-2 justify-between">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="text-xs">
                🔍 Voir les détails
              </Button>
            </DialogTrigger>
            <ProjectDialogContent project={project} />
          </Dialog>

          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button size="sm" variant="outline" className="text-xs">
                  Code GitHub
                </Button>
              </a>
            )}
            {project.demoPath && (
              <a href={project.demoPath}>
                <Button size="sm" variant="ghost" className="text-xs">
                  Démo
                </Button>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function ProjectDialogContent({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription className="text-xs">
          {project.role} • {project.year}
        </DialogDescription>
      </DialogHeader>

      {/* 📷 Image en grand dans la modal */}
      {project.image && (
        <div className="w-full h-56 mt-3 mb-4 overflow-hidden rounded-md border border-gray-200 dark:border-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="mt-2 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <Badge key={t} variant="outline" className="text-[10px]">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-4 text-sm space-y-2">
        <p className="text-gray-600 dark:text-gray-300">{project.context}</p>
        <p className="text-gray-600 dark:text-gray-300">{project.overview}</p>
      </div>

      <Tabs defaultValue="features" className="mt-4">
        <TabsList className="grid grid-cols-3 text-xs">
          <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
          <TabsTrigger value="tech">Techniques</TabsTrigger>
          <TabsTrigger value="learning">Ce que j&apos;ai appris</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="mt-3 space-y-3 text-sm">
          {project.features.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[13px] mb-1">{section.title}</h3>
              <ul className="list-disc list-inside text-[13px] space-y-0.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="tech" className="mt-3 space-y-3 text-sm">
          {project.techHighlights.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[13px] mb-1">{section.title}</h3>
              <ul className="list-disc list-inside text-[13px] space-y-0.5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="learning" className="mt-3 text-sm">
          <ul className="list-disc list-inside text-[13px] space-y-0.5">
            {project.learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
