// src/components/project-card/ProjectCardDetail.tsx
import { motion } from 'framer-motion'
import { Project } from '../../types/portfolio'

const staggerDelay = 0.03

const fadeInUp = {
  initial: { y: 10, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      delay: staggerDelay * index,
      opacity: { duration: 0.3 }
    }
  }),
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      type: 'easeInOut',
      duration: 0.2
    }
  }
}

export function ProjectCardDetail({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: 'auto',
        opacity: 1,
        transition: {
          height: {
            type: 'spring',
            stiffness: 70,
            damping: 15
          },
          opacity: { duration: 0.2 }
        }
      }}
      exit={{
        height: 0,
        opacity: 0,
        transition: {
          height: {
            type: 'spring',
            stiffness: 70,
            damping: 15
          },
          opacity: { duration: 0.2 }
        }
      }}
      className='overflow-hidden'>
      <motion.div
        layout
        className='mt-6 space-y-6 border-t border-slate-200/50 pt-6 dark:border-slate-800/50'>
        {/* 기획 배경 */}
        {project.overview?.background && (
          <motion.div className='space-y-2'>
            <motion.h4
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className='text-heading-color text-sm font-medium'>
              기획 배경
            </motion.h4>
            <motion.ul className='space-y-2 pl-6'>
              {project.overview.background.map((item, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={fadeInUp}
                  className='relative text-sm before:absolute before:left-[-1em] before:content-["•"]'>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* 핵심 기능 전체 목록 */}
        {project.features && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='space-y-2'>
            <motion.h4
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className='text-heading-color text-sm font-medium'>
              핵심 기능
            </motion.h4>
            <motion.ul
              className='space-y-2 pl-6'
              initial='initial'
              animate='animate'>
              {project.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={fadeInUp}
                  className='word-break-keep-all relative whitespace-normal break-keep text-sm before:absolute before:left-[-1em] before:content-["•"]'>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* 학습 내용 */}
        {project.learnings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className='space-y-4'>
            <motion.h4
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className='text-heading-color text-sm font-medium'>
              학습 내용
            </motion.h4>
            {Object.entries(project.learnings).map(
              ([category, items], categoryIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * categoryIdx }}
                  className='space-y-2'>
                  <motion.h5
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                    custom={categoryIdx}
                    className='text-sm font-medium'>
                    {category}
                  </motion.h5>
                  <motion.ul
                    className='space-y-2 pl-6'
                    initial='initial'
                    animate='animate'>
                    {items?.map((item, idx) => (
                      <motion.li
                        key={idx}
                        custom={idx}
                        variants={fadeInUp}
                        className='relative text-sm before:absolute before:left-[-1em] before:content-["•"]'>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
