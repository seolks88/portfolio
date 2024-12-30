import { Education } from '@/types/portfolio'

export const education: Education[] = [
  {
    school: '고려대학교',
    degree: '박사',
    major: '컴퓨터학과',
    period: '2012.03 - 2018.08',
    type: '석박통합과정',
    advisor: '홍길동 교수',
    lab: '소프트웨어 공학 연구실',
    research: [
      {
        title: '자가적응형 소프트웨어(Self-Adaptive Software) 관련 연구'
      },
      {
        title: '의료 분야 관련 개인 정보 보호 처리 관련 연구',
        papers: ['IEEE ACCESS (Impact Factor: 3.4, 피인용수: 131회)']
      },
      {
        title: '소셜네트워크에서 사용자 간 친밀도 관련 연구'
      }
    ],
    awards: [
      '한국정보과학회 우수논문상 (2012)',
      '한국정보과학회 우수논문상 (2014)',
      'ACSA 2014 Best Paper Award'
    ]
  }
]
