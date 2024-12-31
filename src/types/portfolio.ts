export interface Profile {
  name: string
  role: string
  specialization: string
  contacts: Contact[]
}

export interface Contact {
  type: string
  value: string
  href: string
  external?: boolean
}

interface ResearchItem {
  title: string
  papers?: string[]
  achievements?: string[]
}

export interface Education {
  school: string
  degree: string
  major: string
  period: string
  type?: string
  advisor?: string
  lab?: string
  research?: ResearchItem[]
  awards?: string[]
  gpa?: string
}

export interface Experience {
  company: string
  period: string
  role: string
  duration: string
  details: string[]
}

export interface Skill {
  name: string
  details: string[]
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

export interface ProjectDemo {
  video?: string
  presentation?: string
}

export const PROJECT_TYPES = {
  TOY: 'toy',
  COMPANY: 'company',
  OTHER: 'other'
} as const

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES]

export interface Project {
  title: string
  subtitle?: string
  type: ProjectType
  period?: string
  duration?: string
  shortSummary?: string
  overview?: {
    purpose?: string
    background?: string[]
    implementation?: string[]
    marketAnalysis?: string[]
    ideas?: string[]
    role?: string[]
    features?: string[]
  }
  features?: string[]
  achievements?: string[]
  techStack?: string[]
  demo?: {
    video?: string
    presentation?: string
  }
  learnings?: {
    conversation?: string[]
    ux?: string[]
    faq?: string[]
    backend?: string[]
    frontend?: string[]
    devops?: string[]
    [key: string]: string[] | undefined
  }
  github?: string
}
