// src/components/project-card/ProjectCard.tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Project } from '../../types/portfolio'
import { ProjectCardHeader } from './ProjectCardHeader'
import { ProjectCardContent } from './ProjectCardContent'
import { ProjectCardDetail } from './ProjectCardDetail'

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
  const handleCardClick = () => {
    onToggle(!isExpanded)
  }

  return (
    <motion.div
      layout='position'
      layoutId={`card-${project.title}`}
      onClick={handleCardClick}
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
      className='group relative cursor-pointer overflow-hidden rounded-lg border border-slate-200/80 bg-transparent p-6 transition-colors hover:bg-slate-50/50 dark:border-slate-700/50 dark:hover:bg-slate-800/50'>
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

      <motion.div
        layout='position'
        className='mt-4 flex justify-center'>
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
          <Button
            variant='ghost'
            size='sm'
            className='hover:bg-transparent'
            onClick={e => {
              e.stopPropagation()
              onToggle(!isExpanded)
            }}>
            <ChevronDown className='h-4 w-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100' />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
