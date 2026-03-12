'use client'

import { useEffect, useRef, useState } from 'react'
import { trackSectionView } from '@/lib/analytics'

interface ScrollSpyProps {
  sections: { id: string; label: string }[]
  offset?: number
  className?: string
  activeClass?: string
  children: (active: string) => React.ReactNode
}

function throttle(func: () => void, limit: number) {
  let inThrottle = false
  return function () {
    if (!inThrottle) {
      func()
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function ScrollSpy({
  sections,
  offset = 0,
  className,
  children
}: ScrollSpyProps) {
  const [active, setActive] = useState('')
  const viewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const trackedRef = useRef<string>('')

  useEffect(() => {
    if (!active || active === trackedRef.current) {
      if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
      return
    }
    viewTimerRef.current = setTimeout(() => {
      trackSectionView(active)
      trackedRef.current = active
    }, 1500)
    return () => {
      if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
    }
  }, [active])

  useEffect(() => {
    const handleScroll = () => {
      const pageBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      if (pageBottom >= docHeight - 50) {
        setActive(sections[sections.length - 1].id)
        return
      }

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

    const throttledScroll = throttle(handleScroll, 100)
    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [sections, offset])

  return <div className={className}>{children(active)}</div>
}
