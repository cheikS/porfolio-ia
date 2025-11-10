"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-[85vh] text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Salut 👋, je suis <span className="text-blue-600 dark:text-blue-400">Cheick Sacko</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Développeur Full-Stack passionné par la technologie, l’IA et le web moderne.
        Bienvenue sur mon portfolio interactif !
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link href="/projects">
          <Button className="px-6 py-3 text-lg font-medium">
            🚀 Découvrir mes projets
          </Button>
        </Link>
      </motion.div>
    </main>
  )
}
