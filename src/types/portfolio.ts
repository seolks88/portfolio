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

export enum PROJECT_TYPES {
  TOY = 'toy',
  COMPANY = 'company'
}

interface DemoContent {
  title: string
  url: string
  embedUrl: string
}

export interface Demo {
  video?: DemoContent
  presentation?: DemoContent
}

export interface Overview {
  purpose?: string
  background?: string[]
  ideas?: string[]
  implementation?: string[]
  marketAnalysis?: string[]
}

export interface Learnings {
  [key: string]: string[]
}

interface ProjectLinks {
  github?: string
  demo?: {
    video?: {
      title: string
      url: string
      embedUrl: string
    }
    presentation?: {
      title: string
      url: string
      embedUrl: string
    }
  }
  live?: string
  blog?: string
}

export interface Project {
  title: string
  subtitle?: string
  award?: string
  type: string
  period?: string
  duration?: string
  shortSummary?: string
  overview?: Overview
  achievements?: string[]
  features?: string[]
  learnings?: Learnings
  techStack?: string[]
  github?: string
  demo?: {
    video?: {
      title: string
      url: string
      embedUrl: string
    }
    presentation?: {
      title: string
      url: string
      embedUrl: string
    }
  }
  links?: ProjectLinks
  images?: {
    thumbnail?: string
    gallery?: string[]
    alt?: string
  }
}

export enum CONTENT_TYPES {
  PROJECT = 'project',
  RESEARCH = 'research'
}

type ResearchProgress = {
  completed?: string[]
  ongoing?: string[]
  planned?: string[]
}

export interface ResearchContent {
  type: CONTENT_TYPES.RESEARCH
  title: string
  period: string
  shortSummary: string
  overview: {
    purpose: string
    background?: string[]
    progress?: ResearchProgress
  }
  topics: string[]
  techStack: string[]
  learnings?: {
    [key: string]: string[]
  }
}
