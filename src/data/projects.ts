// src/data/projects.ts

import { PROJECT_TYPES, Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'codecast',
    title: '개인화 코드 분석 시스템',
    subtitle: '사이드프로젝트, CodeCast',
    award: 'GALA2024 Special Award',
    type: PROJECT_TYPES.TOY,
    period: '2024-12',
    duration: '개발기간 2주',
    shortSummary: '코딩 습관 분석 및 자동 피드백 제공 (LLM 멀티 에이전트 활용)',
    overview: {
      purpose:
        '개발자의 코딩 습관을 분석해 맞춤형 피드백을 제공하는 AI 기반 도구',
      background: [
        '코딩 습관 개선과 코드 품질 향상을 목표로 기획',
        '매일 아침 전날 변경된 코드를 분석해 팟캐스트 형식으로 인사이트 전달',
        '보안 강화를 위해 로컬 환경에서 실행'
      ],
      marketAnalysis: [
        '외부 전송 없이 로컬 처리로 데이터 보안 확보',
        '오픈소스로 공개해 투명성과 신뢰성 제공'
      ]
    },
    features: [
      '코딩 패턴 분석 및 맞춤형 피드백 제공',
      'Multi-Agent 협업으로 코드 리뷰 자동화 (칭찬, 발견, 심층 분석)',
      '코딩 습관 장기 메모리화 및 반복 피드백',
      '로컬 처리로 보안 위험 최소화'
    ],
    achievements: [
      '개발자의 코드 품질과 역량 개선',
      '보안 리스크 감소',
      '지속적인 피드백으로 생산성 최대 20% 향상'
    ],
    github: 'https://github.com/seolks88/CodeCast',
    techStack: [
      'Backend: Python, FastAPI, LangGraph',
      'AI/ML: Multi-Agent 시스템, RAG 기반 분석',
      'Frontend: React, TypeScript, Next.js',
      'Database: VectorDB, Long-term Memory'
    ],
    images: {
      gallery: [
        '/images/projects/codecast/image_1.png',
        '/images/projects/codecast/image_2.png'
      ]
    }
  },
  {
    id: 'policy-recommender',
    title: '정책 추천 시스템',
    subtitle: '사이드프로젝트, 정책이음',
    award: '2024 서울프롬프톤 공모전 우수상',
    type: PROJECT_TYPES.TOY,
    period: '2024-07',
    shortSummary: 'LLM 활용 대화형 정책 추천 및 FAQ 자동 생성',
    overview: {
      purpose: '사용자 맞춤형 정책을 대화형으로 추천하는 AI 플랫폼',
      ideas: ['멀티턴 대화로 정책 추천', '실시간 웹 검색 연동 및 FAQ 생성'],
      implementation: [
        '정책 문서 Chunking 및 예상 Q&A 임베딩',
        '클라우드 기반 데이터 처리 및 LLM 통합'
      ]
    },
    features: [
      '멀티턴 대화로 사용자 필요 맞춤 추천',
      '정책 정보 실시간 업데이트 (웹 크롤링)',
      '유사 질문 군집화로 FAQ 자동 생성',
      'RAG 기반 문서 검색 및 추천'
    ],
    achievements: [
      '정책 탐색 과정 간소화',
      '사용자 피드백으로 추천 정확도 15% 개선'
    ],
    techStack: [
      'Backend: Python, FastAPI',
      'AI/ML: Google LLM (Gemini), RAG, Text Embeddings',
      'Cloud: Firebase',
      'Frontend: React, Next.js, TypeScript',
      'Database: BigQuery'
    ],
    demo: {
      video: {
        title: '정책이음 데모 영상',
        url: 'https://drive.google.com/file/d/1TcZYelrb7lDDAXdrtnLTlhBOWEBQh-UK/view?usp=sharing',
        embedUrl:
          'https://drive.google.com/file/d/1TcZYelrb7lDDAXdrtnLTlhBOWEBQh-UK/preview'
      },
      presentation: {
        title: '정책이음 발표자료',
        url: 'https://drive.google.com/file/d/160jp_-A4dpgV1Abi9xA21o8UpZAWA30f/view?usp=drive_link',
        embedUrl:
          'https://drive.google.com/file/d/160jp_-A4dpgV1Abi9xA21o8UpZAWA30f/preview'
      }
    }
  },
  {
    id: 'live-shopping-assistant',
    title: '라이브 쇼핑 도우미',
    subtitle: 'Live+',
    type: PROJECT_TYPES.COMPANY,
    period: '2024.06 - 2024.10',
    shortSummary: '실시간 채팅 자동 응대 및 방송 진행 보조',
    overview: {
      purpose: '라이브 커머스에서 채팅 관리와 방송 운영 효율화',
      ideas: ['실시간 채팅 자동화', '방송 진행 지원 도구']
    },
    features: [
      '질문 메시지 감지 및 LLM 기반 답변 생성',
      '구매 인증 자동 검증 (네이버 API 연동)',
      'RAG 기반 자동 응답 및 품질 체크',
      '실시간 채팅 통계 대시보드'
    ],
    achievements: [
      '대량 채팅 처리 시간 50% 단축',
      '사용자 경험 개선으로 참여율 증가'
    ],
    techStack: [
      'Backend: Python, FastAPI',
      'AI/ML: RAG 기반 응답 시스템',
      'Frontend: TypeScript, Next.js, Tailwind',
      'Infrastructure: Firebase (Auth, Firestore)'
    ]
  },
  {
    id: 'quali-erp',
    title: '품질팀 업무 자동화',
    subtitle: 'QualiERP',
    period: '2024.06 - 2024.07',
    type: PROJECT_TYPES.COMPANY,
    shortSummary: '문서 파이프라인 자동화 및 실시간 분석',
    overview: {
      background: [
        '문서 분산으로 연간 240시간 손실',
        '수작업으로 분석 지연 발생'
      ],
      implementation: [
        'LLM 기반 문서 파싱 파이프라인',
        '실시간 데이터 처리 및 대시보드'
      ]
    },
    achievements: [
      '분석 시간 90% 단축 (40시간 → 4시간)',
      '품질 이슈 대응 속도 30% 향상'
    ],
    techStack: [
      'Backend: Python',
      'AI/ML: LLM 기반 파싱',
      'Analytics: Elasticsearch, Kibana',
      'Frontend: Streamlit'
    ]
  },
  {
    id: 'doc-generator',
    title: '문서 생성기',
    subtitle: '정부 지원과제 문서 자동화',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.08 - 2023.11',
    shortSummary: 'Multi-Agent로 정부 과제 문서 대량 생성',
    overview: {
      background: [
        '1,000+ 토픽 문서 작성에 2,000시간 소요',
        '일관된 품질 유지 필요'
      ],
      implementation: [
        'Multi-Agent 파이프라인 (주제 분석 → 생성 → 검증)',
        'Few-shot 프롬프트 활용'
      ]
    },
    achievements: [
      '문서 작성 시간 90% 단축 (2,000h → 200h)',
      '비용 절감 및 품질 유지'
    ],
    techStack: [
      'Backend: Python, OpenAI API',
      'AI/ML: GPT-4 Few-shot, GPT-3.5 추론',
      'Tools: Google Sheets API',
      'Frontend: Streamlit'
    ]
  },
  {
    id: 'whispermate',
    title: '음성 기반 AI 프롬프팅 도구',
    subtitle: 'WhisperMate',
    type: PROJECT_TYPES.TOY,
    period: '2024.01',
    shortSummary: '음성 입력으로 프롬프트 속도 50% 향상',
    overview: {
      purpose: '빠른 음성 입력으로 텍스트 병목 제거',
      background: ['텍스트 입력의 번거로움 해결', '데스크톱용 음성 솔루션 개발']
    },
    features: [
      '글로벌 단축키로 즉시 음성 입력',
      'Groq Whisper Turbo로 STT 속도 개선',
      '세션 히스토리 및 자동 복구'
    ],
    achievements: ['입력 시간 30% 단축', '재택 근무 생산성 향상'],
    techStack: [
      'Frontend: Electron, JavaScript',
      'AI/ML: OpenAI Whisper, Groq Whisper Turbo'
    ]
  },
  {
    id: 'merge',
    title: '코드 컨텍스트 최적화 도구',
    subtitle: 'Merge',
    type: PROJECT_TYPES.TOY,
    period: '2023.12',
    shortSummary: '필요 코드만 추출해 컨텍스트 90% 축소',
    overview: {
      background: [
        '대규모 코드에서 LLM 컨텍스트 초과 문제',
        '추론 정확도 하락 방지'
      ]
    },
    features: ['JSON 기반 코드 그룹 설정', '파일 구조 메타데이터 자동 첨부'],
    achievements: ['컨텍스트 크기 90% 축소', 'LLM 응답 정확도 유지'],
    techStack: [
      'Backend: Python',
      'Tools: JSON 기반 설정',
      'AI/ML: LLM API 통합'
    ]
  },
  {
    id: 'planlogic',
    title: 'Text-To-Diagram 자동화 도구',
    subtitle: 'PlanLogic',
    type: PROJECT_TYPES.TOY,
    period: '2023.11',
    shortSummary: '텍스트로 다이어그램 자동 생성',
    overview: {
      purpose: '텍스트 입력으로 다이어그램 생성 간소화',
      background: ['다이어그램 작성의 번거로움 해소']
    },
    features: [
      '텍스트 기반 다이어그램 생성 (시퀀스, 클래스 등)',
      '복수 LLM으로 품질 개선',
      '실시간 스트리밍 렌더링'
    ],
    achievements: ['Text-To-Diagram 자동화', '사용자 경험 개선'],
    techStack: [
      'Backend: Python, Flask',
      'Frontend: React, Mermaid',
      'AI/ML: GPT-3.5/4'
    ]
  },
  {
    id: 'cs-chatbot',
    title: '고객 응대 챗봇 시스템',
    subtitle: 'CS 챗봇',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.06 - 2024.06',
    shortSummary: '24/7 매뉴얼 기반 챗봇으로 CS 부담 30% 감소',
    overview: {
      background: ['고객 문의 증가로 CS 부담 가중', '일관된 응답 품질 필요']
    },
    features: [
      '매뉴얼 기반 RAG 응답 시스템',
      'PDF 자동 처리 파이프라인',
      '실시간 스트리밍 응답'
    ],
    achievements: ['CS 부담 30% 경감', '사용자 대기 시간 단축'],
    techStack: [
      'Backend: Python, FastAPI',
      'AI/ML: OpenAI GPT-3.5, RAG, TextEmbedding-2',
      'Infrastructure: AWS Lambda, Docker'
    ]
  },
  {
    id: 'review-migration',
    title: '리뷰 이관 서비스',
    subtitle: '리뷰 마이그레이션 도구',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.12 - 2024.12',
    shortSummary: '리뷰 이관으로 구매 전환율 향상',
    overview: {
      purpose: '실제 리뷰로 플랫폼 신뢰도 증대'
    },
    features: [
      'Streamlit UI로 리뷰 이관 관리',
      '스팸/중복 리뷰 자동 필터링',
      'Crema API로 리뷰 등록'
    ],
    achievements: ['플랫폼 신뢰도 상승', '매출 전환율 10% 증가'],
    techStack: ['Backend: Python, Streamlit', 'API: Crema Review API']
  },
  {
    id: 'data-crawler',
    title: '데이터 크롤링 시스템',
    subtitle: '멀티 노드 크롤러',
    type: PROJECT_TYPES.COMPANY,
    period: '2021.01 - 2024.06',
    shortSummary: '병렬 크롤링으로 데이터 수집 및 분석',
    overview: {
      purpose: '대규모 웹 데이터 신속 수집'
    },
    features: [
      '멀티 노드 병렬 크롤링',
      '실시간 모니터링 및 에러 복구',
      'Elasticsearch로 트렌드 분석'
    ],
    achievements: ['자사 BI 활용을 위한 데이터 수집', '분석 효율성 증가'],
    techStack: [
      'Backend: Python, Selenium',
      'Database: Elasticsearch',
      'Infrastructure: Multi-node 아키텍처'
    ]
  },
  {
    id: 'miro-smarthome',
    title: '미로 스마트홈 모바일 앱',
    subtitle: 'MIRO Smart Home',
    type: PROJECT_TYPES.COMPANY,
    period: '2019.04 - 2020.09',
    shortSummary: 'IoT 기기 제어 앱 기획 및 관리',
    overview: {
      purpose: '사용자 친화적인 IoT 제어 앱 제공'
    },
    features: ['직관적인 UI/UX 설계', '기기 제어 및 상태 조회'],
    achievements: ['신규 모델 및 기능 추가', '사용자 만족도 상승']
  },
  {
    id: 'iot-test-automation',
    title: 'IoT 제품 테스트 검증 프로그램',
    subtitle: 'IoT Test Automation',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.12 - 2019.03',
    shortSummary: '테스트 자동화로 품질 안정화',
    overview: {
      purpose: 'IoT 기기 동작 검증 자동화'
    },
    features: ['테스트 시나리오 스크립트 설계', 'Python 기반 반복 테스트'],
    achievements: ['테스트 시간 70~80% 단축', '오류 검출 정확도 향상'],
    techStack: ['Backend: Python', 'Testing: Pytest', 'IoT: MQTT 프로토콜']
  },
  {
    id: 'iot-analytics',
    title: '시계열 데이터 시각화 환경',
    subtitle: 'IoT Analytics Platform',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.09 - 2020.09',
    shortSummary: 'IoT 데이터 분석 및 시각화',
    overview: {
      purpose: '대규모 시계열 데이터로 의사결정 지원'
    },
    features: [
      '실시간 데이터 대시보드',
      'Elasticsearch로 로그 분석',
      '이상 감지 알림'
    ],
    achievements: ['데이터 기반 의사결정 강화', '제품 개선 속도 20% 향상'],
    techStack: [
      'Database: Elasticsearch',
      'Visualization: Kibana',
      'Infrastructure: ELK Stack'
    ]
  },
  {
    id: 'ai-speaker-integration',
    title: 'IoT 기기 인공지능 스피커 연동',
    subtitle: 'AI Speaker Integration',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.08 - 2018.09',
    shortSummary: 'AI 스피커로 IoT 기기 음성 제어',
    overview: {
      purpose: '음성 명령으로 사용자 편의성 증대'
    },
    features: ['OAuth 2.0으로 안전한 연동', 'RESTful API로 제어 및 피드백'],
    achievements: ['사용자 편의성 향상', '제품 경쟁력 강화'],
    techStack: [
      'Backend: Node.js, Express',
      'Authentication: OAuth 2.0',
      'Infrastructure: AWS Lambda, API Gateway'
    ]
  }
]
