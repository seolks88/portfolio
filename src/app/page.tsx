'use client'

import { motion } from 'framer-motion'
import { ScrollSpy } from '@/components/ui/scroll-spy'
import { cn } from '@/lib/utils'
import ScrollProgress from '@/components/magicui/scroll-progress'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Mail, Github, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

// 섹션 컴포넌트 임포트
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'

export default function Home() {
  const sections = [
    { id: '경력', label: '경력' },
    { id: '학력', label: '학력' },
    { id: '기술', label: '기술' },
    { id: '프로젝트', label: '프로젝트' }
  ]

  return (
    <div className='relative min-h-screen'>
      <ScrollProgress />
      <ScrollSpy
        sections={sections}
        offset={-100}
        activeClass='text-sky-500 dark:text-sky-400'
        className='fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex'>
        {active =>
          sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'flex h-3 w-3 rounded-full transition-all hover:scale-125',
                active === section.id
                  ? 'border-1 border-sky-600 bg-sky-500 dark:border-sky-500 dark:bg-sky-400'
                  : 'border-1 border-slate-300 bg-slate-200 hover:border-sky-400 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500'
              )}
              aria-label={section.label}
            />
          ))
        }
      </ScrollSpy>

      <main className='container mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10'>
        {/* 테마 토글 버튼 */}
        <div className='fixed right-4 top-4 z-50'>
          <ThemeToggle />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-16 flex flex-col items-center sm:mb-20'>
          <div className='relative mb-6 sm:mb-8'>
            <Avatar className='pointer-events-none h-28 w-28 shadow-md ring-4 ring-background transition-all duration-500 hover:scale-105 hover:shadow-lg sm:h-36 sm:w-36'>
              <AvatarImage
                src='/avatar.jpg'
                alt='설광수'
                className='object-cover object-center'
              />
              <AvatarFallback className='bg-primary/5 text-xl sm:text-2xl'>
                사진
              </AvatarFallback>
            </Avatar>
          </div>

          <div className='space-y-4 text-center'>
            <h1 className='leading-snug sm:leading-tight'>설광수</h1>
            <p className='text-sm text-muted-foreground sm:text-base'>
              소프트웨어 엔지니어
            </p>
          </div>

          <div className='text-body-base mx-auto mt-8 max-w-prose space-y-4 px-4 text-center sm:px-0'>
            <p>
              <span className='font-medium text-primary/90'>
                최신 AI 기술 트렌드
              </span>
              를 탐구하고 이를 활용한 실용적인 솔루션 개발에 열정을 가지고
              있습니다.
            </p>
            <p>
              <span className='font-medium text-primary/90'>
                {' '}
                AI 시스템 설계
              </span>
              와
              <span className='font-medium text-primary/90'>
                {' '}
                LLM 활용 서비스 개발
              </span>
              , 그리고
              <span className='font-medium text-primary/90'>
                {' '}
                사용자 중심의 UX
              </span>
              에 집중하고 있습니다.
            </p>
          </div>

          {/* 소셜 버튼 위에 추가 */}
          <p className='mt-4 text-xs text-muted-foreground/80'>
            * 모든 디바이스에 최적화된 포트폴리오를 제공합니다
          </p>

          <div
            className='mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4'
            style={{ animationDelay: '0.4s' }}>
            {[
              {
                href: 'mailto:seolks88@gmail.com',
                icon: Mail,
                text: 'seolks88@gmail.com',
                label: '이메일로 연락하기',
                variant: 'outline' as const,
                className:
                  'border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/50'
              },
              {
                href: 'https://github.com/seolks88',
                icon: Github,
                text: 'GitHub',
                label: '프로젝트 살펴보기',
                variant: 'outline' as const,
                external: true,
                className:
                  'border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/50'
              }
            ].map(
              ({
                href,
                icon: Icon,
                text,
                label,
                variant,
                external,
                className
              }) => (
                <Button
                  key={href}
                  variant={variant}
                  asChild
                  className={cn('group relative', className)}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className='flex items-center gap-2'
                    aria-label={label}>
                    <Icon className='h-4 w-4 transition-transform group-hover:scale-110' />
                    <span>{text}</span>
                    {external && (
                      <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-900 ring-[1.5px] ring-slate-200 dark:bg-white dark:text-slate-900 dark:ring-slate-200'>
                        <ExternalLink className='h-2.5 w-2.5' />
                      </span>
                    )}
                  </a>
                </Button>
              )
            )}
          </div>
        </motion.section>

        {/* 메인 콘텐츠 */}
        <div className='space-y-16 sm:space-y-24'>
          {[
            { title: '경력', Component: ExperienceSection },
            { title: '학력', Component: EducationSection },
            { title: '기술', Component: SkillsSection },
            { title: '프로젝트', Component: ProjectsSection }
          ].map(({ title, Component }, index) => (
            <motion.section
              key={title}
              id={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className='scroll-mt-16'>
              <div className='mb-8 flex items-center gap-4 sm:mb-10'>
                <h2>{title}</h2>
                <Separator className='flex-1' />
              </div>
              <Component />
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  )
}
