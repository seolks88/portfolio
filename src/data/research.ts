import { CONTENT_TYPES, ResearchContent } from '@/types/portfolio'

export const currentResearch: ResearchContent[] = [
  {
    type: CONTENT_TYPES.RESEARCH,
    title: '도메인 특화 LLM 모델 파인튜닝 연구 (계획 단계)',
    period: '2024.12 ~',
    shortSummary:
      'PEFT와 DPO 기반 대규모 언어 모델의 도메인 특화 학습 연구 계획',
    overview: {
      purpose: '효율적인 LLM 파인튜닝 방법론 연구',
      background: ['LoRA 기반 효율적 학습 방식에 대한 사전 조사'],
      progress: {
        completed: [],
        ongoing: [],
        planned: [
          'PEFT 기법 학습 및 실습',
          '도메인 데이터 구축',
          'DPO 기반 선호도 학습'
        ]
      }
    },
    topics: ['LLM 파인튜닝 기법 연구', '파라미터 및 메모리 최적화'],
    techStack: ['PyTorch', 'Transformers', 'PEFT', 'DPO'],
    learnings: {
      '현재 연구 중인 내용': [],
      '향후 연구 계획': ['파인튜닝 기법 비교 분석', '도메인 특화 최적화 전략']
    }
  }
]
