/* =========================
   HEADER
========================= */
export interface CvHeader {
  fullName: string;
  role: string;
  greeting: string;
  photoUrl: string;

  softSkillsTitle: string;
  softSkills: string[];
}

/* =========================
   EXPERIENCE
========================= */
export interface CvExperience {
  period: string;
  title: string;
  context: string;
  badge?: string;
  logoUrl?: string;
  highlights: string[];
}

/* =========================
   TOOLS (union type propre)
========================= */
export type CvToolCardType = 'icons' | 'languages';

export interface CvToolIconItem {
  label: string;
  iconUrl?: string;       // image locale : 'assets/icons/angular.png'
  deviconClass?: string;  // classe devicon : 'devicon-angular-plain colored'
}

export interface CvToolLanguageItem {
  label: string;
  flagUrl: string;
}

export interface CvToolCardBase {
  tag: string;
  type: CvToolCardType;
}

export interface CvToolIconsCard extends CvToolCardBase {
  type: 'icons';
  items: CvToolIconItem[];
}

export interface CvToolLanguagesCard extends CvToolCardBase {
  type: 'languages';
  items: CvToolLanguageItem[];
}

export type CvToolCard = CvToolIconsCard | CvToolLanguagesCard;

export interface CvToolsBox {
  title: string;
  cards: CvToolCard[];
}

/* =========================
   ROOT
========================= */
export interface CvData {
  header: CvHeader;
  experiences: CvExperience[];
  tools: CvToolsBox;
}