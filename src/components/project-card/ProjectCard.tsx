import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Project } from '@/types/portfolio'
import { ProjectCardHeader } from './ProjectCardHeader'
import { ProjectCardContent } from './ProjectCardContent'
import { ProjectCardDetail } from './ProjectCardDetail'
import { cn } from '../../lib/utils'
import { trackProjectSelect } from '@/lib/analytics'

interface ProjectCardProps {
  project: Project
  isExpanded: boolean
  onToggle: (expanded: boolean) => void
}

export function ProjectCard({
  project,
  isExpanded,
  onToggle
}: ProjectCardProps) {
  const isExpandable = !!(
    project.overview?.background ||
    (project.features && project.features.length > 2) ||
    project.learnings
  )

  const handleCardClick = () => {
    if (isExpandable) {
      if (!isExpanded) trackProjectSelect(project.id)
      onToggle(!isExpanded)
    }
  }

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleCardClick()
  }

  return (
    <motion.div
      onClick={handleCardClick}
      layout='position'
      layoutId={`card-${project.title}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 70,
          damping: 15
        }
      }}
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'group relative overflow-hidden rounded-lg border border-slate-200/80 bg-transparent p-6 transition-all duration-200 dark:border-slate-700/50',
        isExpandable && [
          'cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/50',
          'hover:shadow-md dark:hover:shadow-slate-900/50'
        ]
      )}>
      <motion.div layout='position'>
        <ProjectCardHeader project={project} />
        <ProjectCardContent
          project={project}
          isExpanded={isExpanded}
        />
      </motion.div>

      <AnimatePresence>
        {isExpanded && <ProjectCardDetail project={project} />}
      </AnimatePresence>

      {isExpandable && (
        <div className='mt-4 flex justify-end'>
          <Button
            variant='ghost'
            size='sm'
            onClick={handleButtonClick}
            className='group/button text-muted-foreground hover:text-foreground'>
            <span className='mr-2'>{isExpanded ? '접기' : '자세히 보기'}</span>
            <motion.div
              initial={false}
              animate={{
                rotate: isExpanded ? 180 : 0,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }
              }}>
              <ChevronDown className='h-4 w-4 transition-transform group-hover/button:translate-y-0.5' />
            </motion.div>
          </Button>
        </div>
      )}
    </motion.div>
  )
}
