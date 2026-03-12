'use client'

import { useEffect, useState } from 'react'

export function DurationText({ startDate }: { startDate: string }) {
  const [timeText, setTimeText] = useState<string>('')

  useEffect(() => {
    // 1일 단위로 업데이트
    const timer = setInterval(
      () => {
        const duration = calculateSimpleDuration(startDate)
        setTimeText(duration)
      },
      1000 * 60 * 60 * 24
    ) // 24시간마다 업데이트

    // 초기값 설정
    setTimeText(calculateSimpleDuration(startDate))

    return () => clearInterval(timer)
  }, [startDate])

  return timeText ? `${timeText} 재직 중` : '로딩 중...'
}

function calculateSimpleDuration(startDate: string): string {
  const start = new Date(startDate)
  const now = new Date()
  const diff = now.getTime() - start.getTime()

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  )

  return `${years}년 ${months}개월`
}
