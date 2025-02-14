import { Project, PROJECT_TYPES } from '@/types/portfolio'
import { cn } from '../../lib/utils'
import { Github, Play, FileText } from 'lucide-react'

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
      {/* ★ shortSummary가 있으면 상단에 출력 */}
      {project.shortSummary && (
        <div
          className={cn(
            'relative bg-slate-50/80 px-4 py-3 text-sm text-slate-600',
            'border-l-2 border-transparent',
            'transition-colors duration-200',
            'dark:bg-slate-800/40 dark:text-slate-300',
            project.type === PROJECT_TYPES.TOY
              ? 'border-l-violet-400/70 hover:border-l-violet-400'
              : 'border-l-blue-400/70 hover:border-l-blue-400'
          )}>
          <div className='relative leading-relaxed tracking-[-0.01em]'>
            {project.shortSummary}
          </div>
        </div>
      )}

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
              const [, techsStr] = techGroup.split(':')
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

      {/* 프로젝트 링크 */}
      {(project.github ||
        project.demo?.video ||
        project.demo?.presentation) && (
        <div className='space-y-2'>
          <h4 className='text-heading-color font-medium'>프로젝트 링크</h4>
          <div className='flex flex-wrap gap-2'>
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                  'text-sm font-medium',
                  'transition-colors duration-200',
                  project.type === PROJECT_TYPES.TOY
                    ? 'bg-violet-50 text-violet-700 hover:bg-violet-100 dark:bg-violet-400/10 dark:text-violet-400 dark:hover:bg-violet-400/20'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/20'
                )}>
                <Github className='h-4 w-4' />
                GitHub
              </a>
            )}
            {project.demo?.video && (
              <a
                href={project.demo.video.url}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                  'text-sm font-medium',
                  'transition-colors duration-200',
                  project.type === PROJECT_TYPES.TOY
                    ? 'bg-violet-50 text-violet-700 hover:bg-violet-100 dark:bg-violet-400/10 dark:text-violet-400 dark:hover:bg-violet-400/20'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/20'
                )}>
                <Play className='h-4 w-4' />
                데모 영상
              </a>
            )}
            {project.demo?.presentation && (
              <a
                href={project.demo.presentation.url}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                  'text-sm font-medium',
                  'transition-colors duration-200',
                  project.type === PROJECT_TYPES.TOY
                    ? 'bg-violet-50 text-violet-700 hover:bg-violet-100 dark:bg-violet-400/10 dark:text-violet-400 dark:hover:bg-violet-400/20'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/20'
                )}>
                <FileText className='h-4 w-4' />
                발표자료
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
