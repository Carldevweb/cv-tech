import { CvData } from '../models/cv.model';

export const CV_DATA: CvData = {
  header: {
    fullName: 'Charles Flahault Knezic',
    role: 'Développeur full stack junior',
    greeting: "Hello 👋🏻 I’m",
    photoUrl: 'assets/profil.jpg',

    softSkillsTitle: 'Soft skills',
    softSkills: [
      "Esprit d’analyse et problem solver",
      'Travail en équipe',
      'Adaptable et flexible',
      'Sens du relationnel et écoute active',
    ],
  },

  experiences: [
    {
      period: 'Juin 2024 – Sept 2024',
      title: 'Développeur full stack',
      context: 'Stagiaire de la formation',
      badge: 'most recent',
      logoUrl: 'assets/logos/m2i.png',
      highlights: [
        "Développement d’une API REST de gestion et combats de Pokémons.",
        'Modélisation base de données + scripts de reset et restauration.',
        'Tests et validation des endpoints via Postman (collection dédiée).',
      ],
    },
    {
      period: 'Sept 2022 – Nov 2022',
      title: 'Développeur full stack',
      context: 'Projet en entreprise (réel)',
      logoUrl: 'assets/logos/reyouzz.png',
      highlights: [
        "Développement d’une API REST en Python (Django).",
        'Implémentation d’opérations CRUD connectées à PostgreSQL.',
        'Participation à la maintenance et à l’évolution des fonctionnalités.',
      ],
    },
    {
      period: 'Mars 2022 – Sept 2022',
      title: 'Développeur full stack',
      context: 'Stagiaire de la formation',
      logoUrl: 'assets/logos/eni.png',
      highlights: [
        'Développement d’une plateforme web (projet de formation) en PHP/Symfony.',
        "Développement d’un outil de gestion (projet) en Java JEE + SQL Server.",
        'Conception orientée couches et structuration claire des composants.',
      ],
    },
  ],

  tools: {
    title: 'Outils',
    cards: [
      {
        type: 'icons',
        tag: 'Back end',
        items: [
          { label: 'Java', iconUrl: 'assets/icons/java.svg' },
          { label: 'Spring', iconUrl: 'assets/icons/spring.svg' },
          { label: 'REST', iconUrl: 'assets/icons/rest.svg' },
        ],
      },
      {
        type: 'icons',
        tag: 'Front end',
        items: [
          { label: 'HTML', iconUrl: 'assets/icons/html5.svg' },
          { label: 'Angular', iconUrl: 'assets/icons/angular.png' },
          { label: 'Figma', iconUrl: 'assets/icons/figma.svg' },
        ],
      },
      {
        type: 'icons',
        tag: 'BDD',
        items: [
          { label: 'PostgreSQL', iconUrl: 'assets/icons/postgresql.png' },
        ],
      },
      {
        type: 'icons',
        tag: 'Outils',
        items: [
          { label: 'Git', iconUrl: 'assets/icons/git.svg' },
          { label: 'Postman', iconUrl: 'assets/icons/postman.svg' },
        ],
      },
      {
        type: 'languages',
        tag: 'langues',
        items: [
          { label: 'Natif', flagUrl: 'assets/flags/france.png' },
          { label: 'Bilingue', flagUrl: 'assets/flags/royaume-uni.png' },
        ],
      },
    ],
  },};