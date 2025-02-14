import { CONTENT_TYPES, ResearchContent } from '@/types/portfolio'

export const currentResearch: ResearchContent[] = [
  {
    type: CONTENT_TYPES.RESEARCH,
    title: '도메인 특화 LLM 모델 파인튜닝 연구 (초기단계)',
    period: '2024.12 ~',
    shortSummary:
      '도메인 특화 태스크를 위한 PEFT와 DPO 기반 대규모 언어 모델의 효율적 학습 및 성능 최적화 연구',
    overview: {
      purpose: '효율적인 LLM 파인튜닝 방법론 연구 및 실제 적용 사례 구축',
      background: ['Low-Rank Adaptation (LoRA) 기반 효율적 학습 방식 연구'],
      progress: {
        completed: [],
        ongoing: [
          'LoRA, QLoRA 등 PEFT 기법 학습',
          'Hugging Face PEFT 라이브러리 활용 실습',
          '다양한 하이퍼파라미터 조정 및 반복 실험',
          '도메인 특화 데이터셋 구축 및 전처리',
          '실험 결과 수집 및 성능 메트릭 분석'
        ],
        planned: ['DPO 기반 선호도 학습 실험']
      }
    },
    topics: [
      'LLM 파인튜닝 기법 비교 연구 및 성능 평가',
      '효율적인 파라미터 최적화 방법론 연구',
      '메모리 최적화 및 학습 안정성 향상 실험'
    ],
    techStack: ['PyTorch', 'Transformers', 'PEFT', 'DPO', 'TensorBoard'],
    learnings: {
      '현재 연구 중인 내용': [
        '다양한 파인튜닝 기법의 성능/효율성 비교 분석',
        '도메인 특화 모델을 위한 최적 파인튜닝 전략 수립',
        '학습 안정성 확보를 위한 기법 연구'
      ],
      '후속 연구 계획': [
        '도메인 특화 모델을 위한 최적 파인튜닝 전략 수립',
        '다중 작업 학습을 위한 효율적인 방법론 연구',
        '프롬프트 엔지니어링과 파인튜닝 결합 연구'
      ]
    }
  }
]
