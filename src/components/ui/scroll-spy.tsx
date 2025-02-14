'use client'

import { useEffect, useState } from 'react'

interface ScrollSpyProps {
  sections: { id: string; label: string }[]
  offset?: number
  className?: string
  activeClass?: string
  children: (active: string) => React.ReactNode
}

// 간단한 throttle 함수: 이벤트 호출 빈도를 제한
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

  useEffect(() => {
    const handleScroll = () => {
      const pageBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // 페이지 하단에 도달했을 때 마지막 섹션 활성화
      if (pageBottom >= docHeight - 50) {
        setActive(sections[sections.length - 1].id)
        return
      }

      // 각 섹션의 위치에 따라 활성화
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
