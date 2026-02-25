export type CvLink = {
    label: string;
    url: string;
};

export type CvExperience = {
    period: string;
    title: string;
    company: string;
    stack?: string[];
    bullets: string[];
};

export type CvEducation = {
    year: string;
    title: string;
    school: string;
};

export type CvData = {
    identity: {
        firstName: string;
        lastName: string;
        role: string;
        location: string;
        email: string;
        phone: string;
        photoUrl: string;
        tags: string[];
        links: CvLink[];
    };
    profile: string;
    keySkills: string[];
    mainProject: {
        title: string;
        bullets: string[];
    };
    experiences: CvExperience[];
    education: CvEducation[];
    softSkills: string[];
};