import * as React from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/project-card/ProjectCard'
import { Rocket, Briefcase, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function ProjectsSection() {
  const [expandedCards, setExpandedCards] = React.useState<Set<string>>(
    new Set()
  )

  const toggleAllCards = () => {
    if (expandedCards.size === projects.length) {
      setExpandedCards(new Set())
    } else {
      setExpandedCards(new Set(projects.map(p => p.title)))
    }
  }

  return (
    <div className='space-y-8'>
      {/* 레전드 영역과 토글 버튼 */}
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center gap-4 rounded-full border border-slate-200/80 bg-slate-50/50 px-4 py-1.5 text-xs dark:border-slate-800/50 dark:bg-slate-900/50'>
          <div className='flex items-center gap-1.5'>
            <Rocket className='h-3.5 w-3.5 text-violet-500 dark:text-violet-400' />
            <span className='font-medium text-slate-600 dark:text-slate-300'>
              토이 프로젝트
            </span>
          </div>
          <div className='h-3 w-px bg-slate-200 dark:bg-slate-700' />
          <div className='flex items-center gap-1.5'>
            <Briefcase className='h-3.5 w-3.5 text-blue-500 dark:text-blue-400' />
            <span className='font-medium text-slate-600 dark:text-slate-300'>
              업무 프로젝트
            </span>
          </div>
        </div>

        <Button
          variant='ghost'
          size='sm'
          onClick={toggleAllCards}
          className='group flex items-center gap-2 text-sm'>
          {expandedCards.size === projects.length ? '모두 접기' : '모두 펼치기'}
          <motion.div
            animate={{
              rotate: expandedCards.size === projects.length ? 180 : 0
            }}
            transition={{ duration: 0.2 }}>
            <ChevronDown className='h-4 w-4' />
          </motion.div>
        </Button>
      </div>

      {/* 프로젝트 카드 목록 */}
      <div className='space-y-6'>
        {projects.map((project, idx) => {
          const isExpandable = !!(
            project.overview?.background ||
            (project.features && project.features.length > 2) ||
            project.learnings
          )

          return (
            <ProjectCard
              key={idx}
              project={project}
              isExpanded={isExpandable && expandedCards.has(project.title)}
              onToggle={expanded => {
                if (!isExpandable) return // 확장 불가능한 경우 토글하지 않음

                const newExpandedCards = new Set(expandedCards)
                if (expanded) {
                  newExpandedCards.add(project.title)
                } else {
                  newExpandedCards.delete(project.title)
                }
                setExpandedCards(newExpandedCards)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
