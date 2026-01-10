// src/data/projects.ts

export type ProjectDetailSection = {
  title: string
  items: string[]
}

export type Project = {
  id: string
  title: string
  image: string
  shortDescription: string
  role: string
  year: string
  technologies: string[]
  github?: string
  demoPath?: string
  context: string
  overview: string
  features: ProjectDetailSection[]
  techHighlights: ProjectDetailSection[]
  learning: string[]
}

export const projects: Project[] = [
  /* -------------------------------------------------------------
     TRICOUNT
  -------------------------------------------------------------- */
  {
    id: "tricount",
    title: "Tricount – Application de gestion de dépenses",
    image: "/images/clicount.png",
    shortDescription:
      "Application web permettant de gérer des dépenses en groupe et de calculer automatiquement les soldes.",
    role: "Développeur full-stack (projet d'école en binôme)",
    year: "2023",
    technologies: ["PHP 8", "MySQL", "MVC", "jQuery", "AJAX"],
    github: "https://github.com/cheikS/tricount.git",
    demoPath: "/demo/tricount",

    context:
      "Projet réalisé dans le cadre d’un cours de développement web backend. Objectif : reproduire un système similaire à Tricount avec notre propre architecture MVC.",
    overview:
      "L’application permet de créer des groupes de dépenses, d’ajouter des opérations et de répartir automatiquement les montants entre les participants.",

    features: [
      {
        title: "Fonctionnalités principales",
        items: [
          "Création de tricounts avec description et membres.",
          "Ajout de dépenses (montant, libellé, payeur).",
          "Historique complet des opérations.",
          "Calcul automatique des dettes et soldes entre les utilisateurs.",
        ],
      },
      {
        title: "Interface & interactions",
        items: [
          "AJAX pour ajouter des dépenses sans rechargement.",
          "Messages d'erreurs/succès dynamiques.",
          "Navigation simple et intuitive.",
        ],
      },
    ],

    techHighlights: [
      {
        title: "Backend",
        items: [
          "Pattern MVC complet en PHP.",
          "DAO en MySQL avec PDO + requêtes préparées.",
          "Gestion de session et validation serveur.",
        ],
      },
      {
        title: "Frontend",
        items: [
          "Formulaires AJAX via jQuery.",
          "CSS simple mais efficace, adapté aux besoins du projet.",
        ],
      },
    ],

    learning: [
      "Construire une architecture MVC fonctionnelle.",
      "Collaborer en binôme avec Git et GitHub.",
      "Modéliser une base de données adaptée à la logique métier.",
    ],
  },

  /* -------------------------------------------------------------
     FARMING GAME
  -------------------------------------------------------------- */
  {
  id: "farming-game",
  title: "Farming Game – Jeu JavaFX MVVM",
  image: "/images/farming-game.png",
  shortDescription:
    "Jeu de gestion de ferme avec plantation, croissance de cultures et gestion de ressources.",
  role: "Développeur Java / JavaFX",
  year: "2022",
  technologies: ["Java", "JavaFX", "MVVM", "POO", "Design patterns"],
  github: "https://github.com/cheikS/farmGame.git",

  context:
    "Projet réalisé dans le cadre d'un cours avancé de programmation orientée objet. L’objectif était de mettre en pratique les design patterns (notamment MVVM) avec JavaFX.",
  overview:
    "Le joueur gère une petite ferme : plantation de cultures, gestion de l’inventaire, temps de croissance et saisons. Le projet met en avant une architecture claire basée sur des design patterns (MVVM, Repository, Observer via les bindings JavaFX).",

  features: [
    {
      title: "Gameplay",
      items: [
        "Plantation de différentes cultures avec temps de croissance et valeur de vente.",
        "Gestion d’un inventaire de cultures et des ressources disponibles.",
        "Évolution du temps de jeu (jours, saisons) impactant les cultures.",
      ],
    },
    {
      title: "Interface",
      items: [
        "UI JavaFX structurée en panneaux (ferme, inventaire, actions).",
        "Mises à jour automatiques de l’interface grâce aux bindings JavaFX.",
      ],
    },
  ],

  techHighlights: [
    {
      title: "Architecture & design patterns",
      items: [
        "Pattern MVVM : ViewModel centralise la logique de présentation et l’état.",
        "Pattern Repository pour séparer l’accès aux données de la logique métier.",
        "Utilisation du principe Observer via les propriétés JavaFX (StringProperty, BooleanProperty, etc.).",
      ],
    },
    {
      title: "Qualité du code",
      items: [
        "Classes métier claires (Crop, FarmState, etc.).",
        "Séparation nette entre UI (View), logique (ViewModel) et données (Model/Repository).",
      ],
    },
  ],

  learning: [
    "Appliquer concrètement plusieurs design patterns (MVVM, Repository, Observer) dans un projet réel.",
    "Structurer une application Java en couches distinctes pour faciliter l’évolution du code.",
    "Utiliser les bindings observables de JavaFX pour synchroniser automatiquement l’UI et l’état métier.",
  ],
},


  /* -------------------------------------------------------------
     PORTFOLIO IA
  -------------------------------------------------------------- */
  {
    id: "portfolio-ia",
    title: "Portfolio interactif avec Chatbot IA",
    image: "/images/portfolio-preview.jpeg",
    shortDescription:
      "Portfolio moderne en Next.js avec animations, thèmes, et un chatbot IA intégré.",
    role: "Développeur full-stack",
    year: "2025",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Framer Motion",
      "OpenAI API",
    ],
    github: "https://github.com/cheikS/portfolio-ia.git",

    context:
      "Projet personnel visant à créer une vitrine professionnelle moderne et interactive.",
    overview:
      "Ce portfolio présente mes projets, propose des démonstrations visuelles animées et intègre un chatbot IA permettant d’échanger avec les visiteurs.",

    features: [
      {
        title: "Expérience utilisateur",
        items: [
          "Interface fluide avec animations Framer Motion.",
          "Thème clair/sombre.",
          "Organisation claire : Projets, Démo, Contact, Chatbot.",
        ],
      },
      {
        title: "Chatbot IA",
        items: [
          "Widget flottant avec mon avatar.",
          "Réponses dynamiques via l'API OpenAI.",
          "Personnalité adaptée à mon profil.",
        ],
      },
    ],

    techHighlights: [
      {
        title: "Frontend",
        items: [
          "Next.js App Router.",
          "Tailwind + shadcn/ui.",
          "Composants animés avec Framer Motion.",
        ],
      },
      {
        title: "Backend / API",
        items: [
          "Route API Next.js connectée à OpenAI.",
          "Gestion propre des tokens via .env.local.",
        ],
      },
    ],

    learning: [
      "Créer un portfolio professionnel moderne.",
      "Intégrer un chatbot IA dans un site.",
      "Structurer un projet TypeScript avec composants réutilisables.",
    ],
  },
]
