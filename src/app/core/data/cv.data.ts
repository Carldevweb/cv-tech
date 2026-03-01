import { CvData } from '../models/cv.model';

export const CV_DATA: CvData = {
  header: {
    fullName: 'Charles Flahault Knezic',
    role: 'Développeur full stack junior',
    greeting: "Hello 👋🏻 I'm",
    photoUrl: 'assets/profil.jpg',
    softSkillsTitle: 'Soft skills',
    softSkills: [
      'Résolution de problèmes complexes',
      'Collaboration en équipe Agile',
      'Montée en compétences rapide',
      'Communication technique et fonctionnelle',
    ],
  },

  experiences: [
    {
      period: '2026',
      title: 'Développeur full stack',
      context: 'Projet personnel',
      badge: 'most recent',
      logoUrl: 'assets/icons/github.png',
      highlights: [
        "Conception d'une API REST sécurisée (JWT, rôles USER/ADMIN) avec Spring Boot 3.3 et PostgreSQL — authentification stateless, CRUD articles/catégories, upload de médias et reset de mot de passe par email.",
        "Développement d'une SPA Angular 19 connectée via JWT — guards de routes, interceptors HTTP, gestion des rôles et UI responsive inspirée d'une maquette Figma.",
      ],
    },
    {
      period: 'Juin 2024 – Sept 2024',
      title: 'Développeur full stack',
      context: 'Stagiaire de la formation',
      logoUrl: 'assets/logos/m2i.png',
      highlights: [
        "Développement d'une API REST de gestion et combats de Pokémons.",
        'Tests et validation des endpoints via Postman (collection dédiée).',
      ],
    },
    {
      period: 'Sept 2022 – Nov 2022',
      title: 'Développeur full stack',
      context: 'Projet en entreprise',
      logoUrl: 'assets/logos/reyouzz.png',
      highlights: [
        "Développement d'une API REST en Python (Django) avec opérations CRUD connectées à PostgreSQL.",
        "Participation à la maintenance et à l'évolution des fonctionnalités.",
      ],
    },
    {
      period: 'Mars 2022 – Sept 2022',
      title: 'Développeur full stack',
      context: 'Stagiaire de la formation',
      logoUrl: 'assets/logos/eni.png',
      highlights: [
        "Développement d'une plateforme web en PHP/Symfony et d'un outil de gestion en Java JEE + SQL Server.",
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

  footer: {
    educationTitle: 'Formation',
    educations: [
      {
        year: '2024',
        title: 'Développeur Full Stack Java',
        school: 'M2i',
        tags: ['#Java21', '#JEE', '#Jira', '#Spring boot', '#Angular', '#Typescript', '#Docker'],
        highlight: true,
      },
      {
        year: '2022',
        title: 'Développeur web et mobile',
        school: 'Eni',
        tags: ['#CSS/HTML', '#Symfony', '#PHP', '#Github', '#Java', '#méthodes Agiles', '#JEE'],
      },
      {
        year: '2021',
        title: 'L2 Philosophie',
        school: 'Université de Nantes',
      },
      {
        year: '2019',
        title: 'DAEU Littéraire',
        school: 'Université Paris Diderot',
      },
    ],
    hobbiesTitle: 'Hobbies',
    hobbies: [
      'sport et bien-être',
      "Jeu d'échecs",
      'lecture',
      'sorties culturelles',
      'cinéma',
      'voyages',
    ],
    contact: {
      callToAction: "Discutons ! Je suis prêt à travailler sur des projets passionnants",
      linkedinUrl: 'https://www.linkedin.com/in/charles-knezic/',
      email: 'carlflahault@gmail.com',
      githubUrl: 'https://github.com/Carldevweb',
    },
  },
};