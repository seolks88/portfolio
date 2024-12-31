// src/components/project-card/ProjectCardContent.tsx
import { Project, PROJECT_TYPES } from '../../types/portfolio'
import { cn } from '../../lib/utils'

interface ProjectCardContentProps {
  project: Project
  isExpanded: boolean
}

export function ProjectCardContent({
  project,
  isExpanded
}: ProjectCardContentProps) {
  const renderListItem = (content: string, idx: number) => (
    <li
      key={idx}
      className={cn(
        "text-body-color relative whitespace-normal break-keep pl-5 text-sm before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:content-['']",
        project.type === PROJECT_TYPES.TOY
          ? 'before:bg-violet-400/70'
          : 'before:bg-blue-400/70'
      )}>
      {content}
    </li>
  )

  return (
    <div className='text-body-color space-y-8'>
      {/* 프로젝트 개요 */}
      {(project.overview?.purpose || project.overview?.background) && (
        <div className='space-y-2'>
          <h4 className='text-heading-color font-medium'>프로젝트 개요</h4>
          <ul className='space-y-2 pl-4'>
            {project.overview.purpose && (
              <li
                className={cn(
                  "text-body-color relative whitespace-normal break-keep pl-5 text-sm before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:content-['']",
                  project.type === PROJECT_TYPES.TOY
                    ? 'before:bg-violet-400/70'
                    : 'before:bg-blue-400/70'
                )}>
                {project.overview.purpose}
              </li>
            )}
            {project.overview.background && !isExpanded && (
              <li
                className={cn(
                  "text-body-color relative whitespace-normal break-keep pl-5 text-sm before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:content-['']",
                  project.type === PROJECT_TYPES.TOY
                    ? 'before:bg-violet-400/70'
                    : 'before:bg-blue-400/70'
                )}>
                {project.overview.background[0]}
              </li>
            )}
          </ul>
        </div>
      )}

      {/* 주요 성과 (일부만) */}
      {project.achievements && (
        <div className='space-y-2'>
          <h4 className='text-heading-color font-medium'>주요 성과</h4>
          <ul className='space-y-2 pl-4'>
            {project.achievements.slice(0, 2).map(renderListItem)}
          </ul>
        </div>
      )}

      {/* 핵심 기능 (일부만) */}
      {project.features && (
        <div className='space-y-2'>
          <h4 className='text-heading-color font-medium'>핵심 기능</h4>
          <ul className='space-y-2 pl-4'>
            {project.features.slice(0, 2).map(renderListItem)}
          </ul>
        </div>
      )}

      {/* 기술 스택 */}
      {project.techStack && (
        <div className='space-y-2'>
          <h4 className='text-heading-color font-medium'>기술 스택</h4>
          <div className='space-y-2 pl-4'>
            {project.techStack.map((techGroup, groupIdx) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const [category, techsStr] = techGroup.split(':')
              const techs = techsStr?.split(',').map(item => item.trim()) ?? []

              return (
                <div
                  key={groupIdx}
                  className='flex flex-wrap gap-1.5'>
                  {techs.map((tech, idx) => (
                    <span
                      key={`${groupIdx}-${idx}`}
                      className={cn(
                        project.type === PROJECT_TYPES.TOY
                          ? 'bg-violet-50 text-violet-700 ring-violet-600/20 dark:bg-violet-400/10 dark:text-violet-400 dark:ring-violet-400/30'
                          : 'bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
                        'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset'
                      )}>
                      {tech}
                    </span>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
