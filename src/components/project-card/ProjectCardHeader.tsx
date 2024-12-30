// src/components/project-card/ProjectCardHeader.tsx
import { Briefcase, Calendar, Code2, Rocket, Timer } from 'lucide-react'
import { Project, PROJECT_TYPES } from '../../types/portfolio'
import { cn } from '../../lib/utils'

function getProjectTypeStyles(type: string) {
  switch (type) {
    case PROJECT_TYPES.TOY:
      return {
        icon: (
          <Rocket className='h-5 w-5 text-violet-600 dark:text-violet-300' />
        ),
        wrapper:
          'border-violet-400 hover:border-violet-500 dark:border-violet-300/50 dark:hover:border-violet-200',
        iconWrapper:
          'bg-violet-50 ring-1 ring-violet-400 dark:bg-violet-900/30 dark:ring-violet-300/50',
        periodIcon: 'text-violet-600/70 dark:text-violet-300/70',
        durationStyle:
          'border-violet-300 bg-violet-50/50 text-violet-700 dark:border-violet-300/30 dark:bg-violet-900/20 dark:text-violet-200'
      }
    case PROJECT_TYPES.COMPANY:
      return {
        icon: (
          <Briefcase className='h-5 w-5 text-blue-600 dark:text-blue-300' />
        ),
        wrapper:
          'border-blue-400 hover:border-blue-500 dark:border-blue-300/50 dark:hover:border-blue-200',
        iconWrapper:
          'bg-blue-50 ring-1 ring-blue-400 dark:bg-blue-900/30 dark:ring-blue-300/50',
        periodIcon: 'text-blue-600/70 dark:text-blue-300/70',
        durationStyle:
          'border-blue-300 bg-blue-50/50 text-blue-700 dark:border-blue-300/30 dark:bg-blue-900/20 dark:text-blue-200'
      }
    default:
      return {
        icon: <Code2 className='h-5 w-5 text-slate-600 dark:text-slate-300' />,
        wrapper:
          'border-slate-300 hover:border-slate-400 dark:border-slate-600/50 dark:hover:border-slate-500',
        iconWrapper:
          'bg-slate-50 ring-1 ring-slate-300 dark:bg-slate-800/50 dark:ring-slate-600/50',
        periodIcon: 'text-slate-600/70 dark:text-slate-300/70',
        durationStyle:
          'border-slate-300 bg-slate-50/50 text-slate-700 dark:border-slate-600/30 dark:bg-slate-800/30 dark:text-slate-200'
      }
  }
}

interface ProjectCardHeaderProps {
  project: Project
}

export function ProjectCardHeader({ project }: ProjectCardHeaderProps) {
  const styles = getProjectTypeStyles(project.type)

  return (
    <div className='mb-6 flex items-start justify-between gap-4'>
      {/* 왼쪽 아이콘 + 제목 */}
      <div className='flex items-center gap-4'>
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-lg',
            styles.iconWrapper
          )}>
          {styles.icon}
        </div>
        <div className='space-y-1'>
          <h3 className='text-heading-3 tracking-tight'>{project.title}</h3>
          {project.subtitle && (
            <p className='text-body-sm text-body-color'>{project.subtitle}</p>
          )}
        </div>
      </div>

      {/* 오른쪽 기간 정보 */}
      <div className='flex flex-col items-end gap-2.5'>
        {project.period && (
          <div className='flex items-center gap-2 rounded-full bg-slate-100/50 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-800/50 dark:text-slate-300'>
            <Calendar className={cn('h-4 w-4', styles.periodIcon)} />
            <time>{project.period}</time>
          </div>
        )}
        {project.duration && (
          <div
            className={cn(
              'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
              styles.durationStyle
            )}>
            <Timer className='mr-1.5 h-3.5 w-3.5' />
            {project.duration}
          </div>
        )}
      </div>
    </div>
  )
}
