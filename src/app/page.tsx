'use client'

import { motion } from 'framer-motion'
import { ScrollSpy } from '@/components/ui/scroll-spy'
import { cn } from '@/lib/utils'
import ScrollProgress from '@/components/magicui/scroll-progress'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

// 섹션 컴포넌트 임포트
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ResearchSection } from '@/components/sections/ResearchSection'

export default function Home() {
  const sections = [
    { id: 'intro', label: '소개' },
    { id: 'experience', label: '경력' },
    { id: 'education', label: '학력' },
    { id: 'skills', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'research', label: '연구' }
  ]

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const headerOffset = 80
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = window.pageYOffset + elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

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
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'flex h-3 w-3 rounded-full transition-all hover:scale-125',
                active === section.id
                  ? 'border border-sky-600 bg-sky-500 dark:border-sky-500 dark:bg-sky-400'
                  : 'border border-slate-300 bg-slate-200 hover:border-sky-400 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500'
              )}
              aria-label={section.label}
              data-tooltip={section.label}
            />
          ))
        }
      </ScrollSpy>

      <main className='container mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10'>
        <div className='fixed right-4 top-4 z-50 hidden items-center gap-2 md:flex'>
          <Button
            variant='ghost'
            size='icon'
            className='relative h-9 w-9 rounded-full'
            asChild>
            <a
              href='https://github.com/seolks88'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub 프로필 방문하기'>
              <Github className='h-4 w-4' />
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <motion.section
          id='intro'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-20 flex flex-col items-center sm:mb-20'>
          <div className='relative mb-6 sm:mb-8'>
            <Avatar className='pointer-events-none h-28 w-28 shadow-md ring-4 ring-background transition-all duration-500 hover:scale-105 hover:shadow-lg sm:h-36 sm:w-36'>
              <AvatarImage
                src='/avatar.png'
                alt='설광수 프로필 사진'
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

          <div className='mx-auto mt-8 max-w-prose space-y-4 px-4 text-center text-body-base sm:px-0'>
            <p>
              <span className='font-medium text-primary/90'>
                최신 AI 기술 트렌드
              </span>
              를 탐구하고 이를 활용한 실용적인 솔루션 개발에 열정을 가지고
              있습니다.
            </p>
            <p>
              <span className='font-medium text-primary/90'>
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

          <p className='mt-4 text-xs text-muted-foreground/80'>
            * 모든 디바이스에 최적화된 포트폴리오를 제공합니다
          </p>
        </motion.section>

        <div className='space-y-20'>
          <motion.section
            id='experience'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='scroll-mt-16'>
            <div className='mb-8 flex items-center gap-4 sm:mb-10'>
              <h2>경력</h2>
              <Separator className='flex-1' />
            </div>
            <ExperienceSection />
          </motion.section>

          <motion.section
            id='education'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='scroll-mt-16'>
            <div className='mb-8 flex items-center gap-4 sm:mb-10'>
              <h2>학력</h2>
              <Separator className='flex-1' />
            </div>
            <EducationSection />
          </motion.section>

          <motion.section
            id='skills'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='scroll-mt-16'>
            <div className='mb-8 flex items-center gap-4 sm:mb-10'>
              <h2>기술</h2>
              <Separator className='flex-1' />
            </div>
            <SkillsSection />
          </motion.section>

          <motion.section
            id='projects'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='scroll-mt-16'>
            <div className='mb-8 flex items-center gap-4 sm:mb-10'>
              <h2>프로젝트</h2>
              <Separator className='flex-1' />
            </div>
            <ProjectsSection />
          </motion.section>

          <motion.section
            id='research'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='scroll-mt-16'>
            <div className='mb-8 flex items-center gap-4 sm:mb-10'>
              <h2>연구</h2>
              <Separator className='flex-1' />
            </div>
            <ResearchSection />
          </motion.section>
        </div>
      </main>
    </div>
  )
}
