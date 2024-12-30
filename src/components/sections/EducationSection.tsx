import { education } from '@/data/education'
import { BaseCard } from '@/components/BaseCard'
import { GraduationCap, Calendar, BookOpen, Trophy } from 'lucide-react'

export function EducationSection() {
  return (
    <div className='space-y-6'>
      {education.map((edu, index) => (
        <BaseCard
          key={index}
          className='group'
          style={{ animationDelay: `${index * 0.1}s` }}>
          <div className='space-y-6'>
            {/* 헤더 */}
            <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
              <div className='flex items-center gap-3'>
                <div className='rounded-md bg-gradient-to-br from-emerald-50 to-teal-50 p-2 ring-1 ring-emerald-400/50 dark:from-emerald-900/30 dark:to-teal-900/30 dark:ring-emerald-300/50'>
                  <GraduationCap className='h-5 w-5 text-emerald-600/70 dark:text-emerald-300/70' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-semibold'>{edu.school}</h3>
                  <p className='text-sm font-medium text-muted-foreground'>
                    {edu.degree}, {edu.major}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-1.5'>
                <Calendar className='h-4 w-4 text-emerald-600/70 dark:text-emerald-300/70' />
                <span className='text-sm text-muted-foreground'>
                  {edu.period}
                </span>
              </div>
            </div>

            {/* 연구 주제 */}
            {edu.research && (
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-sm font-medium'>
                  <BookOpen className='h-4 w-4 text-emerald-600/70 dark:text-emerald-300/70' />
                  <h4>연구 주제</h4>
                </div>
                <ul className='space-y-2 pl-6'>
                  {edu.research.map((item, idx) => (
                    <li
                      key={idx}
                      className='text-body-color relative text-sm before:absolute before:left-[-1em] before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70 before:content-[""]'>
                      {item.title}
                      {item.papers && (
                        <ul className='mt-1 space-y-1 pl-4'>
                          {item.papers.map((paper, paperIdx) => (
                            <li
                              key={paperIdx}
                              className='text-xs text-muted-foreground'>
                              - {paper}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 수상 실적 */}
            {edu.awards && (
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-sm font-medium'>
                  <Trophy className='h-4 w-4 text-emerald-600/70 dark:text-emerald-300/70' />
                  <h4>수상 실적</h4>
                </div>
                <ul className='space-y-2 pl-6'>
                  {edu.awards.map((award, idx) => (
                    <li
                      key={idx}
                      className='text-body-color relative text-sm before:absolute before:left-[-1em] before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-emerald-400/70 before:content-[""]'>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </BaseCard>
      ))}
    </div>
  )
}
