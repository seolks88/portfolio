'use client'

import { useEffect, useState } from 'react'
import { calculateDuration } from '@/lib/dateUtils'

export function DurationText({ startDate }: { startDate: string }) {
  const [timeText, setTimeText] = useState<string>('')

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeText(calculateDuration(startDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [startDate])

  return timeText ? `${timeText} 재직 중` : '로딩 중...'
}
