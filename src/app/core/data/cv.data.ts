import { CvData } from '../models/cv.model';

export const CV_DATA: CvData = {
  header: {
    fullName: 'Charles Flahault Knezic',
    role: 'Développeur full stack junior',
    greeting: "Hello 👋🏻 I'm",
    photoUrl: 'assets/profil.jpg',

    softSkillsTitle: 'Soft skills',
    softSkills: [
      "Esprit d'analyse et problem solver",
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
        "Développement d'une API REST de gestion et combats de Pokémons.",
        'Modélisation base de données + scripts de reset et restauration.',
        'Tests et validation des endpoints via Postman (collection dédiée).',
      ],
    },
    {
      period: 'Sept 2022 – Nov 2022',
      title: 'Développeur full stack',
      context: 'Projet en entreprise',
      logoUrl: 'assets/logos/reyouzz.png',
      highlights: [
        "Développement d'une API REST en Python (Django).",
        "Implémentation d'opérations CRUD connectées à PostgreSQL.",
        "Participation à la maintenance et à l'évolution des fonctionnalités.",
      ],
    },
    {
      period: 'Mars 2022 – Sept 2022',
      title: 'Développeur full stack',
      context: 'Stagiaire de la formation',
      logoUrl: 'assets/logos/eni.png',
      highlights: [
        "Développement d'une plateforme web (projet de formation) en PHP/Symfony.",
        "Développement d'un outil de gestion (projet) en Java JEE + SQL Server.",
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
          { label: 'Java', deviconClass: 'devicon-java-plain colored' },
          { label: 'Spring', deviconClass: 'devicon-spring-plain colored' },
          { label: 'PHP', deviconClass: 'devicon-php-plain colored' },
          { label: 'Symfony', deviconClass: 'devicon-symfony-plain' },
          { label: 'Django', deviconClass: 'devicon-django-plain colored' },
          { label: 'Maven', iconUrl: 'assets/icons/maven.png' },
        ],
      },
      {
        type: 'icons',
        tag: 'Front end',
        items: [
          { label: 'HTML', deviconClass: 'devicon-html5-plain colored' },
          { label: 'CSS', deviconClass: 'devicon-css3-plain colored' },
          { label: 'JavaScript', deviconClass: 'devicon-javascript-plain colored' },
          { label: 'Bootstrap', deviconClass: 'devicon-bootstrap-plain colored' },
          { label: 'Angular', deviconClass: 'devicon-angularjs-plain colored' },
          { label: 'React', deviconClass: 'devicon-react-original colored' },
        ],
      },
      {
        type: 'icons',
        tag: 'BDD',
        items: [
          { label: 'PostgreSQL', deviconClass: 'devicon-postgresql-plain colored' },
          { label: 'MySQL', deviconClass: 'devicon-mysql-plain colored' },
        ],
      },
      {
        type: 'icons',
        tag: 'Outils',
        items: [
          { label: 'GitHub', deviconClass: 'devicon-github-original' },
          { label: 'Docker', deviconClass: 'devicon-docker-plain colored' },
          { label: 'Jira', deviconClass: 'devicon-jira-plain colored' },
          { label: 'Figma', deviconClass: 'devicon-figma-plain colored' },
          { label: 'Maven', iconUrl: 'assets/icons/maven.png' },
        ],
      },
      {
        type: 'languages',
        tag: 'langues',
        items: [
          { label: 'Natif', flagUrl: 'assets/icons/france.png' },
          { label: 'Bilingue', flagUrl: 'assets/icons/royaume-uni.svg' },
        ],
      },
    ],
  },
};