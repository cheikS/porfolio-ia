"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Navbar() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Projets" },
    { href: "/demo", label: "Démo" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "À propos" },
  ]

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
        {/* Logo à gauche */}
        <div className="shrink-0">
          <Link href="/" className="inline-flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Cheick</span>
            <span className="text-xl font-bold text-gray-700 dark:text-gray-300">.dev</span>
          </Link>
        </div>

        {/* Liens répartis sur la largeur */}
        <ul className="flex-1 grid grid-cols-5">
          {links.map((l) => (
            <li key={l.href} className="min-w-0">
              <Link
                href={l.href}
                className="block w-full text-center px-3 py-2 text-sm font-medium
                           text-gray-700 dark:text-gray-200
                           hover:bg-gray-100 dark:hover:bg-gray-800
                           hover:text-blue-600 dark:hover:text-blue-400
                           rounded-md transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Thème à droite */}
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
