export const experience = [
  {
    company: '(주)미로',
    period: '2018.06.25 - 현재',
    role: 'AI SW 개발자 (LLM/RAG)',
    duration: () => {
      const startDate = new Date('2018-06-25')
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

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

      const timeText = [
        `${years}년`,
        `${months}개월`,
        `${days}일`,
        `${hours}시간`,
        `${minutes}분`,
        `${seconds}초`
      ].join(' ')

      return {
        text: `${timeText} 재직 중`,
        subtext: '(전문연구요원 복무 3년 포함)'
      }
    },
    details: [
      'LLM/RAG 기반 대화형 AI 시스템 설계 및 개발',
      'AWS 서버리스 기반 확장 가능한 마이크로서비스 설계',
      'Elastic/Kibana 기반 실시간 데이터 분석 시스템 구축',
      '웹 크롤링 시스템 설계 및 데이터 수집 자동화'
    ]
  }
]
