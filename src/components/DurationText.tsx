import { useEffect, useState } from 'react'

export function DurationText({ startDate }: { startDate: string }) {
  const [timeText, setTimeText] = useState<string>('')

  useEffect(() => {
    const calculateDuration = () => {
      const start = new Date(startDate)
      const now = new Date()
      const diff = now.getTime() - start.getTime()

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      )
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      )
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return [
        `${years}년`,
        `${months}개월`,
        `${days}일`,
        `${hours}시간`,
        `${minutes}분`,
        `${seconds}초`
      ].join(' ')
    }

    const timer = setInterval(() => {
      setTimeText(calculateDuration())
    }, 1000)

    return () => clearInterval(timer)
  }, [startDate])

  return timeText ? `${timeText} 재직 중` : '로딩 중...'
}
