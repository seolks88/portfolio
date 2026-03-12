// src/components/sections/SkillsSection.tsx

import { skills } from '@/data/skills'
import { BaseCard } from '@/components/BaseCard'
import { Badge } from '@/components/ui/badge'
import { Cloud, Layout, Brain, Server, Code } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SkillCategory, Skill } from '@/types/portfolio'

type CategoryIcon = {
  [key: string]: React.ComponentType<{ className?: string }>
}

const CATEGORY_ICONS: CategoryIcon = {
  'AI/LLM 핵심 역량': Brain,
  'Backend 기술': Server,
  '클라우드 & 인프라': Cloud,
  'Frontend 기술': Layout
}

const CATEGORY_COLORS: Record<
  string,
  { bg: string; icon: string; border: string }
> = {
  'AI/LLM 핵심 역량': {
    bg: 'from-violet-50 to-purple-50 dark:from-violet-800/40 dark:to-purple-900/40',
    icon: 'text-violet-500/70 dark:text-violet-400/70',
    border: 'border-violet-200 dark:border-violet-700'
  },
  'Backend 기술': {
    bg: 'from-blue-50 to-indigo-50 dark:from-blue-800/40 dark:to-indigo-900/40',
    icon: 'text-blue-500/70 dark:text-blue-400/70',
    border: 'border-blue-200 dark:border-blue-700'
  },
  '클라우드 & 인프라': {
    bg: 'from-cyan-50 to-sky-50 dark:from-cyan-800/40 dark:to-sky-900/40',
    icon: 'text-cyan-500/70 dark:text-cyan-400/70',
    border: 'border-cyan-200 dark:border-cyan-700'
  },
  'Frontend 기술': {
    bg: 'from-rose-50 to-pink-50 dark:from-rose-800/40 dark:to-pink-900/40',
    icon: 'text-rose-500/70 dark:text-rose-400/70',
    border: 'border-rose-200 dark:border-rose-700'
  }
}

export function SkillsSection() {
  const coreStacks = {
    'AI/LLM': ['RAG', 'Agent', 'Prompt Engineering', 'Function Calling'],
    Backend: ['Python', 'FastAPI', 'Elasticsearch', 'Firebase'],
    Cloud: ['AWS', 'GCP'],
    Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
  } as const

  return (
    <div className='max-w-full space-y-10'>
      {/* 주요 기술 스택 요약 */}
      <BaseCard className='mx-4 sm:mx-0'>
        <div className='space-y-5 p-4 sm:p-6'>
          <div className='flex items-center gap-3'>
            <div className='rounded-md bg-gradient-to-br from-slate-100 to-white p-2 shadow-sm ring-1 ring-slate-200/50 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-700/50'>
              <Code className='h-5 w-5 text-slate-600/80 dark:text-slate-300/80' />
            </div>
            <h3 className='bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-heading-3 font-semibold tracking-tight text-transparent dark:from-slate-100 dark:to-slate-400'>
              주요 기술 스택
            </h3>
          </div>

          <div className='text-body-color space-y-3'>
            {Object.entries(coreStacks).map(([category, techs]) => (
              <div
                key={category}
                className='group flex flex-wrap items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/50'>
                <span className='w-[90px] text-[15px] font-medium tracking-tight text-slate-700 dark:text-slate-300'>
                  {category}
                </span>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-2'>
                    {techs.map(tech => (
                      <Badge
                        key={tech}
                        variant='outline'
                        className='border-slate-200 bg-white/80 px-2.5 py-0.5 text-[13px] font-medium tracking-tight text-slate-700 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 hover:text-slate-900 group-hover:border-slate-300/70 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:group-hover:border-slate-700'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BaseCard>

      {/* 기존 상세 스킬 섹션 */}
      <div className='mx-4 grid gap-8 sm:mx-0 sm:grid-cols-1 md:grid-cols-2'>
        {(skills as SkillCategory[]).map((category, index) => {
          const Icon = CATEGORY_ICONS[category.category]
          const colors = CATEGORY_COLORS[category.category]

          return (
            <BaseCard
              key={index}
              className='group h-full'
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className='space-y-6'>
                {/* 헤더 */}
                <div className='flex items-center gap-3'>
                  <div
                    className={`rounded-md border bg-gradient-to-br p-2 ${colors.border} ${colors.bg}`}>
                    <Icon className={`h-5 w-5 ${colors.icon}`} />
                  </div>
                  <h3 className='text-heading-color text-lg font-semibold'>
                    {category.category}
                  </h3>
                </div>

                {/* 스킬 항목들 */}
                <div className='space-y-4'>
                  {category.items.map((item: Skill, idx: number) => (
                    <div
                      key={idx}
                      className='space-y-2'>
                      <h4 className='text-heading-color text-base font-semibold tracking-tight'>
                        {item.name}
                      </h4>
                      <ul className='space-y-2 pl-6'>
                        {item.details.map(
                          (detail: string, detailIdx: number) => (
                            <li
                              key={detailIdx}
                              className={cn(
                                'text-body-color relative text-sm before:absolute before:left-[-1em] before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:content-[""]',
                                category.category === 'AI/LLM 핵심 역량' &&
                                  'before:bg-violet-400/70',
                                category.category === 'Backend 기술' &&
                                  'before:bg-blue-400/70',
                                category.category === '클라우드 & 인프라' &&
                                  'before:bg-cyan-400/70',
                                category.category === 'Frontend 기술' &&
                                  'before:bg-rose-400/70'
                              )}>
                              {detail}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </BaseCard>
          )
        })}
      </div>
    </div>
  )
}
