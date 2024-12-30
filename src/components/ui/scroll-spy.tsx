'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollSpyProps {
  sections: { id: string; label: string }[]
  offset?: number
  activeClass?: string
  className?: string
  children: (active: string) => React.ReactNode
}

export function ScrollSpy({
  sections,
  offset = 0,
  activeClass,
  className,
  children
}: ScrollSpyProps) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const pageBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // 페이지 하단에 도달했을 때 마지막 섹션을 활성화
      if (pageBottom >= docHeight - 50) {
        setActive(sections[sections.length - 1].id)
        return
      }

      // 일반적인 스크롤 위치에 따른 섹션 활성화
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top + offset < window.innerHeight / 3) {
            setActive(section.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections, offset])

  return <div className={className}>{children(active)}</div>
}
