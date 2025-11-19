// src/data/projects.ts

export type ProjectDetailSection = {
  title: string
  items: string[]
}

export type Project = {
  id: string
  title: string
  shortDescription: string
  role: string
  year: string
  technologies: string[]
  github?: string
  demoPath?: string // ex: "/demo/tricount"
  context: string
  overview: string
  features: ProjectDetailSection[]
  techHighlights: ProjectDetailSection[]
  learning: string[]
}

export const projects: Project[] = [
  {
    id: "tricount",
    title: "Tricount – Application de gestion de dépenses",
    shortDescription:
      "Application web permettant de créer des groupes et de répartir automatiquement les dépenses entre amis.",
    role: "Développeur full-stack (projet d’école en binôme)",
    year: "2023",
    technologies: ["PHP 8", "MySQL", "MVC", "jQuery", "AJAX"],
    github: "https://github.com/cheikS/clicount",
    demoPath: "/demo/tricount",
    context:
      "Projet réalisé dans le cadre d’un cours de programmation web backend. Objectif : reproduire le concept de Tricount avec notre propre architecture MVC.",
    overview:
      "L’utilisateur peut créer un tricount, ajouter des participants, enregistrer des dépenses et visualiser automatiquement qui doit combien à qui. J’ai travaillé sur l’architecture MVC, la structure de la base de données ainsi que la logique de calcul des soldes.",
    features: [
      {
        title: "Fonctionnalités principales",
        items: [
          "Création de groupes de dépenses (tricounts) avec description et participants.",
          "Ajout de dépenses avec montant, libellé, payeur et répartition.",
          "Affichage de l’historique des opérations pour chaque tricount.",
          "Calcul automatique des soldes entre participants.",
        ],
      },
      {
        title: "UX & interactions",
        items: [
          "Formulaires AJAX (jQuery) pour ajouter des dépenses sans rechargement de page.",
          "Messages d’erreurs et de succès côté serveur et côté client.",
          "Interface simple et rapide à prendre en main.",
        ],
      },
    ],
    techHighlights: [
      {
        title: "Backend",
        items: [
          "Architecture MVC en PHP : controllers, modèles, vues séparés.",
          "Connexion MySQL via PDO et requêtes préparées.",
          "Validation serveur des données (montants, libellés, identifiants).",
        ],
      },
      {
        title: "Frontend",
        items: [
          "jQuery & AJAX pour la communication asynchrone.",
          "Organisation du HTML/CSS en composants réutilisables.",
        ],
      },
    ],
    learning: [
      "Structurer une application PHP en MVC pour faciliter la maintenance.",
      "Travailler en binôme avec Git et GitHub.",
      "Mise en place d’un modèle de données adapté à la logique métier (balances entre utilisateurs).",
    ],
  },

  {
    id: "farming-game",
    title: "Farming Game – Jeu JavaFX MVVM",
    shortDescription:
      "Jeu de gestion de ferme en JavaFX : plantation, croissance des cultures et gestion de ressources.",
    role: "Développeur Java / JavaFX",
    year: "2022",
    technologies: ["Java", "JavaFX", "MVVM", "POO"],
    github: "https://github.com/cheikS/farming-game",
    context:
      "Projet réalisé dans le cadre d’un cours de programmation orientée objet avancée. Objectif : mettre en pratique l’architecture MVVM avec JavaFX.",
    overview:
      "L’application permet de gérer une petite ferme : le joueur plante des cultures, gère le temps de croissance et la valeur de revente. L’interface est construite avec JavaFX, en séparant clairement Vue, ViewModel et Modèle.",
    features: [
      {
        title: "Gameplay",
        items: [
          "Plantation de différentes cultures avec temps de croissance et valeur de vente.",
          "Gestion d’un inventaire de cultures.",
          "Évolution du temps de jeu (jours, saisons).",
        ],
      },
      {
        title: "Ergonomie",
        items: [
          "Interface JavaFX avec boutons, listes et panneaux organisés.",
          "Mises à jour automatiques de l’UI via les bindings JavaFX.",
        ],
      },
    ],
    techHighlights: [
      {
        title: "Architecture",
        items: [
          "Pattern MVVM : ViewModel chargé de la logique et des états observables.",
          "Utilisation des propriétés JavaFX (StringProperty, BooleanProperty, etc.).",
        ],
      },
      {
        title: "Qualité du code",
        items: [
          "Classes métier claires (Crop, FarmState, etc.).",
          "Séparation nette entre logique de présentation et logique métier.",
        ],
      },
    ],
    learning: [
      "Mettre en œuvre MVVM sur un projet Java concret.",
      "Utiliser les bindings JavaFX pour synchroniser l’UI et le ViewModel.",
      "Structurer un petit jeu en couches (UI, logique, données).",
    ],
  },

  {
    id: "portfolio-ia",
    title: "Portfolio interactif avec Chatbot IA",
    shortDescription:
      "Portfolio moderne développé avec Next.js, présentant mes projets et intégrant un chatbot IA personnalisé.",
    role: "Développeur full-stack",
    year: "2025",
    technologies: ["Next.js 15", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion", "OpenAI API"],
    github: "https://github.com/cheikS/portfolio-ia", // adapte si besoin
    context:
      "Projet personnel pour présenter mon parcours, mes projets et expérimenter l’intégration d’un chatbot IA dans un site Next.js.",
    overview:
      "Ce portfolio sert de vitrine technique et professionnelle. Il met en avant mes projets, propose des démonstrations interactives et inclut un chatbot IA qui répond aux visiteurs comme si c’était moi.",
    features: [
      {
        title: "Expérience utilisateur",
        items: [
          "Navigation claire avec sections Projets, Démo, Contact.",
          "Animation fluide des cartes projets (Framer Motion).",
          "Thème clair/sombre et mise en avant des compétences clés.",
        ],
      },
      {
        title: "Chatbot IA",
        items: [
          "Widget flottant avec avatar 👨🏾‍💻 pour ouvrir/fermer le chat.",
          "Route API Next.js connectée à OpenAI pour générer les réponses.",
          "Personnalisation du système de l’IA pour qu’elle parle de mes projets.",
        ],
      },
    ],
    techHighlights: [
      {
        title: "Frontend",
        items: [
          "Next.js App Router (pages server et client).",
          "TailwindCSS + composants shadcn/ui pour une UI cohérente.",
          "Framer Motion pour les animations d’entrée et de survol.",
        ],
      },
      {
        title: "Backend / API",
        items: [
          "Route API Next.js hébergée avec Vercel.",
          "Utilisation de l’OpenAI API (chat completions).",
          "Gestion des variables d’environnement (.env.local).",
        ],
      },
    ],
    learning: [
      "Concevoir un portfolio orienté recruteurs (UX, message, clarté).",
      "Intégrer un service d’IA dans une application Next.js.",
      "Structurer un projet TypeScript avec des composants réutilisables.",
    ],
  },
]
