import * as React from 'react'
import { currentResearch } from '@/data/research'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  CircleDot,
  CalendarClock
} from 'lucide-react'

export function ResearchSection() {
  const research = currentResearch[0]

  return (
    <div className='space-y-8'>
      <div className='space-y-6'>
        <motion.div
          layout='position'
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
          className='group relative overflow-hidden rounded-lg border border-slate-200/80 bg-transparent p-6 transition-colors dark:border-slate-700/50'>
          <div className='space-y-4'>
            {/* 헤더 */}
            <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
              <div className='flex items-center gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-400 dark:bg-emerald-900/30 dark:ring-emerald-300/50'>
                  <BookOpen className='h-5 w-5 text-emerald-600 dark:text-emerald-300' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-2xl tracking-tight'>{research.title}</h3>
                </div>
              </div>

              <div className='flex items-center gap-2 rounded-full bg-slate-100/50 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-800/50 dark:text-slate-300'>
                <Calendar className='h-4 w-4 text-emerald-500' />
                <time>{research.period}</time>
              </div>
            </div>

            {/* 연구 내용 */}
            <div className='text-body-color space-y-8'>
              {/* 요약 */}
              <div className='relative border-l-2 border-l-emerald-400/70 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 transition-colors duration-200 hover:border-l-emerald-400 dark:bg-slate-800/40 dark:text-slate-300'>
                <div className='relative leading-relaxed tracking-[-0.01em]'>
                  {research.shortSummary}
                </div>
              </div>

              {/* 연구 개요 */}
              <div className='space-y-2'>
                <h4 className='text-heading-color font-medium'>연구 개요</h4>
                <ul className='space-y-2 pl-4'>
                  {research.overview.background?.map((item, idx) => (
                    <li
                      key={idx}
                      className='text-body-color relative whitespace-normal break-keep pl-5 text-sm before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 주요 주제 */}
              <div className='space-y-2'>
                <h4 className='text-heading-color font-medium'>주요 주제</h4>
                <ul className='space-y-2 pl-4'>
                  {research.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className='text-body-color relative whitespace-normal break-keep pl-5 text-sm before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70'>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 기술 스택 */}
              <div className='space-y-2'>
                <h4 className='text-heading-color font-medium'>사용 기술</h4>
                <div className='space-y-2 pl-4'>
                  <div className='flex flex-wrap gap-1.5'>
                    {research.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className='inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/30'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 진행 상황 */}
              {research.overview.progress && (
                <div className='space-y-4'>
                  <h4 className='text-heading-color font-medium'>진행 상황</h4>
                  <div className='space-y-4'>
                    {/* 완료된 작업 */}
                    {research.overview.progress.completed &&
                      research.overview.progress.completed.length > 0 && (
                        <div className='space-y-2'>
                          <div className='flex items-center gap-2'>
                            <CheckCircle2 className='h-4 w-4 text-emerald-500 dark:text-emerald-400' />
                            <span className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                              완료된 작업
                            </span>
                          </div>
                          <ul className='space-y-2 pl-6'>
                            {research.overview.progress.completed.map(
                              (item, idx) => (
                                <li
                                  key={idx}
                                  className='relative pl-5 text-sm text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70'>
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {/* 진행 중인 작업 */}
                    {research.overview.progress.ongoing && (
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                          <CircleDot className='h-4 w-4 text-emerald-500 dark:text-emerald-400' />
                          <span className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                            진행 중
                          </span>
                        </div>
                        <ul className='space-y-2 pl-6'>
                          {research.overview.progress.ongoing.map(
                            (item, idx) => (
                              <li
                                key={idx}
                                className='relative pl-5 text-sm text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70'>
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* 예정된 작업 */}
                    {research.overview.progress.planned && (
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                          <CalendarClock className='h-4 w-4 text-emerald-500 dark:text-emerald-400' />
                          <span className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                            예정된 작업
                          </span>
                        </div>
                        <ul className='space-y-2 pl-6'>
                          {research.overview.progress.planned.map(
                            (item, idx) => (
                              <li
                                key={idx}
                                className='relative pl-5 text-sm text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70'>
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
