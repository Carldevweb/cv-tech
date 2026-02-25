import { CvData } from '../models/cv.model';

export const CV_DATA: CvData = {
    identity: {
        firstName: 'Prénom',
        lastName: 'NOM',
        role: 'Développeur Full Stack Java / Angular',
        location: 'Lyon',
        email: 'email@domain.com',
        phone: '+33 …',
        photoUrl: 'assets/profile.jpg',
        tags: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'Angular 19', 'PostgreSQL'],
        links: [
            { label: 'GitHub', url: 'https://github.com/' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/' }
        ],
    },
    profile: 'Développeur orienté back-end, spécialisé Java / Spring Boot, avec intégration front Angular.',
    keySkills: [
        'API REST sécurisées',
        'Architecture en couches',
        'JWT / Spring Security',
        'Intégration Angular',
    ],
    mainProject: {
        title: 'Application full stack sécurisée',
        bullets: [
            'Backend Spring Boot avec rôles et JWT',
            'DTO, validation, PostgreSQL',
            'Frontend Angular avec guards et interceptors',
        ],
    },
    experiences: [
        {
            period: '2024',
            title: 'Développeur Full Stack',
            company: 'M2I',
            stack: ['Spring Boot', 'Angular', 'PostgreSQL'],
            bullets: [
                'Développement API REST',
                'Intégration front-back',
            ],
        }
    ],
    education: [
        { year: '2024', title: 'Développeur Full Stack Java', school: 'M2I' }
    ],
    softSkills: ['Rigueur', 'Analyse', 'Autonomie']
};