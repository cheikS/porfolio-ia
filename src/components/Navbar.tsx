"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/ThemeToggle"


export function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Yahya<span className="text-gray-600 dark:text-gray-300">.dev</span></h1>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link href="/" className="hover:text-blue-500 transition">Accueil</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="hover:text-blue-500 transition">À propos</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" className="hover:text-blue-500 transition">Projets</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </nav>
  )
}
