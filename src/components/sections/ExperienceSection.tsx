import { useEffect, useState } from 'react'
import { experience } from '@/data/experience'
import { BaseCard } from '@/components/BaseCard'
import { Building2, Calendar, Timer, Briefcase } from 'lucide-react'

export function ExperienceSection() {
  const [, forceUpdate] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate({})
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='space-y-6'>
      {experience.map((exp, index) => {
        const duration =
          typeof exp.duration === 'function' ? exp.duration() : exp.duration

        return (
          <BaseCard
            key={index}
            className='group'
            style={{ animationDelay: `${index * 0.1}s` }}>
            <div className='space-y-6'>
              {/* 헤더 */}
              <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-md bg-gradient-to-br from-blue-50 to-sky-50 p-2 ring-1 ring-blue-400/50 dark:from-blue-900/30 dark:to-sky-900/30 dark:ring-blue-300/50'>
                    <Building2 className='h-5 w-5 text-blue-600/70 dark:text-blue-300/70' />
                  </div>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-semibold'>{exp.company}</h3>
                    <p className='text-sm font-medium text-muted-foreground'>
                      {exp.role}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-end gap-2'>
                  <div className='flex items-center gap-1.5'>
                    <Calendar className='h-4 w-4 text-blue-600/70 dark:text-blue-300/70' />
                    <span className='text-sm text-slate-600 dark:text-slate-300'>
                      {exp.period}
                    </span>
                  </div>
                  {duration && (
                    <div className='flex flex-col items-end gap-1'>
                      <div className='flex items-center gap-1.5'>
                        <Timer className='h-4 w-4 text-blue-600/70 dark:text-blue-300/70' />
                        <span className='text-sm text-slate-600 dark:text-slate-300'>
                          {duration.text}
                        </span>
                      </div>
                      <span className='text-xs text-slate-500 dark:text-slate-400'>
                        {duration.subtext}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 주요 업무 */}
              {exp.details && (
                <div className='space-y-2'>
                  <div className='flex items-center gap-2 text-sm font-medium'>
                    <Briefcase className='h-4 w-4 text-blue-600/70 dark:text-blue-300/70' />
                    <h4>주요 업무</h4>
                  </div>
                  <ul className='space-y-2 pl-6'>
                    {exp.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className='text-body-color relative text-sm before:absolute before:left-[-1em] before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-blue-400/70 before:content-[""]'>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </BaseCard>
        )
      })}
    </div>
  )
}
