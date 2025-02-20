// src/data/projects.ts

import { PROJECT_TYPES, Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    title: '개인화 코드 분석 시스템',
    subtitle: '토이프로젝트, CodeCast',
    award: 'GALA2024 Special Award',
    type: PROJECT_TYPES.TOY,
    period: '2024-12',
    duration: '개발기간 2주',
    shortSummary: '코딩 습관 분석 및 자동 피드백 제공 (LLM 멀티 에이전트 활용)',
    overview: {
      purpose: '개발자 코딩 습관을 분석해 맞춤형 피드백을 제공하는 AI 시스템',
      background: [
        '코딩 습관 개선 및 코드 품질 향상을 목표로 기획',
        'LLM을 이용한 자동 코드 리뷰 및 반복 피드백 구축',
        '매일 오전 9시에 전날 변경된 코드를 분석, 팟캐스트 형식으로 인사이트 전달'
      ],
      marketAnalysis: [
        '외부 전송 없이 로컬에서 처리해 보안 이슈 최소화',
        '오픈소스 공개로 투명성과 신뢰도 확보'
      ]
    },
    features: [
      'Multi-Agent 협업 분석 (칭찬, 발견, 심층분석 등)',
      'LangGraph 활용 자가회복 프로세스',
      '코딩 습관 장기 메모리화 및 반복 피드백',
      '시맨틱 + BM25 하이브리드 RAG 시스템',
      '로컬 처리로 보안 위험 최소화'
    ],
    achievements: [
      '맞춤형 피드백으로 개발자 역량 향상',
      '로컬 환경 도입으로 보안 리스크 감소',
      '지속적 자동 분석으로 코드 품질 개선'
    ],
    github: 'https://github.com/seolks88/CodeCast',
    techStack: [
      'Backend: Python, FastAPI, LangGraph',
      'AI/ML: RAG, Multi-Agent System',
      'Database: VectorDB, Long-term Memory',
      'Frontend: React, TypeScript, Next.js'
    ],
    images: {
      gallery: [
        '/images/projects/codecast/image_1.png',
        '/images/projects/codecast/image_2.png'
      ]
    }
  },
  {
    title: '정책 추천 시스템',
    subtitle: '토이프로젝트, 정책이음',
    award: '2024 서울프롬프톤 공모전 우수상',
    type: PROJECT_TYPES.TOY,
    period: '2024-07',
    shortSummary: 'LLM 활용 대화형 정책 추천, FAQ 자동 생성 및 웹 검색 연동',
    overview: {
      purpose: '사용자별 맞춤 정책을 대화형으로 추천하는 LLM 기반 플랫폼',
      ideas: [
        '멀티턴 대화형 정책 추천',
        '뉴스/블로그/유튜브 검색 연동',
        'FAQ 자동 생성 및 통계'
      ],
      implementation: [
        '정책 문서 Chunking + 예상 Q&A 임베딩(RAG)',
        'GCP, Google LLM(Gemini) 활용'
      ]
    },
    learnings: {
      Conversation: [
        '단계적 질문으로 후보군 축소',
        '사용자 프로필(나이/직업/성별) 기반 우선순위 설정',
        '대화 종료 시점 고려 (정보 제공 vs 피로도)'
      ],
      FAQ: [
        '유사 질문 군집화(자카드 계수)',
        '개인정보 제거 후 표준화',
        '질문 빈도 통계화 및 자동 개선'
      ],
      UX: [
        '정책 정보 탐색 프로세스 간소화',
        '사용자 피드백으로 대화 흐름 최적화'
      ]
    },
    techStack: [
      'Backend: Python (FastAPI)',
      'Cloud: Firebase',
      'AI: Google LLM (Gemini), Text Embeddings',
      'Database: BigQuery',
      'Frontend: React, Next.js, TS, Tailwind, Redux'
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
    },
    features: [
      '멀티턴 대화 시스템 (컨텍스트 유지)',
      '사용자 프로필 기반 정책 추천 로직',
      '실시간 정책 정보 업데이트(웹 크롤링)',
      'RAG 기반 문서 임베딩',
      '유사 질문 군집화로 FAQ 자동 생성',
      '사용자 피드백 기반 추천 로직 개선'
    ]
  },
  {
    title: '라이브 쇼핑 도우미',
    subtitle: 'Live+',
    type: PROJECT_TYPES.COMPANY,
    period: '2024.06 - 2024.10',
    shortSummary: '라이브 방송 실시간 채팅 자동 응대 + 방송 진행 보조 기능',
    overview: {
      purpose: '실시간 채팅 자동화와 방송 지원 도구로 라이브 커머스 효율화',
      ideas: ['실시간 채팅 관리 시스템', '방송 진행 보조 기능']
    },
    features: [
      '질문 메시지 감지 및 LLM 답변 카드 생성',
      'Human-in-the-Loop 검수 (답변 재생성, 수정, 승인)',
      'RAG 기반 자동 응답 (Groundedness Check)',
      '구매인증 자동 검증 (네이버 API 연동)',
      '답변 품질 관리 시뮬레이터',
      '실시간 채팅 통계/분석'
    ],
    achievements: [
      '대량 메시지 처리 최적화',
      'SSE 기반 실시간 채팅 스트리밍',
      '좌우 분할 레이아웃으로 UX 개선',
      '스트리밍 답변 렌더링 및 제스처 기능'
    ],
    techStack: [
      'Backend: Python, FastAPI, RAG, Crawling',
      'Frontend: TypeScript, Next.js, Tailwind, ShadcnUI, Redux',
      'Infrastructure: Firebase (Auth, Firestore)'
    ]
  },
  {
    title: '품질팀 업무 자동화',
    subtitle: 'QualiERP',
    period: '2024.06 - 2024.07',
    type: PROJECT_TYPES.COMPANY,
    shortSummary: 'CS·품질팀 문서 파이프라인 자동화 + Elastic 실시간 분석',
    overview: {
      background: [
        '문서 분산으로 연간 240시간 업무 손실',
        '비정형 데이터로 분석 지연 (월 2회→일간)',
        '수작업으로 오류 발생'
      ],
      implementation: [
        'LLM 기반 문서 파싱 파이프라인',
        'Elastic 실시간 데이터 처리 및 대시보드'
      ]
    },
    achievements: [
      '데이터 분석 자동화로 월 2회→일간 분석 전환',
      '분석 시간 90% 단축 (40h→4h)',
      '정확도 향상 및 연간 비용 절감',
      '실시간 데이터로 품질 이슈 대응 시간 단축'
    ],
    techStack: ['Backend: Python, Elastic, Kibana', 'Frontend: Streamlit']
  },
  {
    title: '문서 생성기',
    subtitle: '정부 지원과제 문서 자동화',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.08 - 2023.11',
    shortSummary:
      'Multi-Agent 파이프라인으로 정부과제 문서 대량 자동 생성 (2,000h→200h)',
    overview: {
      background: [
        '1,000+ 토픽 x 2페이지 = 2,000시간 소요',
        '일관된 품질 유지 필요'
      ],
      implementation: [
        'Multi-Agent 문서 생성 파이프라인',
        '주제 분석→콘텐츠 생성→품질 검증→번역',
        '영문 처리 후 한글화로 토큰 비용 절감',
        'Few-shot 프롬프트 재사용'
      ]
    },
    features: [
      'GPT-4 Few-shot 예시 생성, GPT-3.5로 추론',
      'Google Sheets 연동으로 작업 현황 공유',
      '문서 품질 일관성 85% 이상 유지'
    ],
    achievements: [
      '문서 작성 시간 90% 단축, 비용 70% 절감',
      '재작업 5% 미만, 품질 85% 이상 유지'
    ],
    techStack: [
      'Backend: Python, OpenAI API',
      'Tools: Google Sheets API, python-docx',
      'Frontend: Streamlit'
    ]
  },
  {
    title: '음성 기반 AI 프롬프팅 도구',
    subtitle: 'WhisperMate',
    type: PROJECT_TYPES.TOY,
    period: '2024.01',
    shortSummary: '단축키로 음성 입력, Groq Whisper Turbo로 STT 속도 50% 향상',
    overview: {
      purpose: '단축키로 빠르게 음성 입력해 타이핑 병목 제거',
      background: [
        'AI 도구 사용 시 텍스트 입력이 번거로움',
        '데스크톱용 음성 입력 솔루션 부재',
        '오픈소스 유지보수 중단 문제'
      ],
      implementation: [
        '글로벌 단축키(cmd+shift+;)로 즉시 음성 입력',
        '백그라운드 프로세스로 상시 대기',
        '인식 실패 시 자동 복구'
      ]
    },
    features: [
      'OS 레벨 단축키 등록/충돌 방지',
      'Groq Whisper Turbo로 응답 지연 절반 축소',
      '세션 히스토리 및 시스템 트레이 통합',
      '인식 실패 시 자동 재시도'
    ],
    achievements: [
      '프롬프트 입력 시간 30% 단축',
      '성능 최적화로 재택 근무 생산성 개선'
    ],
    techStack: [
      'Frontend: Electron, JavaScript',
      'AI: OpenAI Whisper, Groq Whisper Turbo'
    ]
  },
  {
    title: '코드 컨텍스트 최적화 도구',
    subtitle: 'Merge',
    type: PROJECT_TYPES.TOY,
    period: '2023.12',
    shortSummary:
      '필요한 코드만 추출해 LLM에 제공, 컨텍스트 크기 최대 90% 축소',
    overview: {
      background: [
        '코드가 방대해지면 LLM 정확도·컨텍스트 초과 문제 발생',
        '코드 복잡도 증가로 추론 정확도 하락'
      ],
      ideas: [
        '선별적 코드 컨텍스트 추출',
        'LLM 친화적 포맷 변환',
        'CLI 기반 코드 추출 시스템'
      ]
    },
    features: [
      'JSON 기반 코드 그룹 설정',
      '전체 폴더 탐색 후 자동 분류',
      '모델별 맞춤 프롬프트 포맷(Claude=XML, GPT=Markdown)',
      '파일 구조 메타데이터 자동 첨부',
      '프로젝트 컨텍스트 압축'
    ],
    achievements: [
      '코드 컨텍스트 최대 90% 축소',
      'LLM 응답 정확도 유지와 대규모 프로젝트 지원'
    ],
    techStack: [
      'Backend: Python',
      'Tools: JSON Configuration',
      'AI: LLM API Integration'
    ]
  },
  {
    title: 'Text-To-Diagram 자동화 도구',
    subtitle: 'PlanLogic',
    type: PROJECT_TYPES.TOY,
    period: '2023.11',
    shortSummary:
      '텍스트 입력으로 시퀀스·클래스·플로우차트 등 다이어그램 자동 생성',
    overview: {
      purpose: '텍스트만으로 다양한 다이어그램을 자동 생성',
      background: [
        '당시 무료 다이어그램 자동화 서비스 부족',
        '국내 다이어그램 자동화 도구가 거의 없음',
        '유료 SaaS 커스터마이징 한계'
      ]
    },
    features: [
      '텍스트 기반 다이어그램 생성',
      '사용자 맞춤 수정 기능',
      '8가지 다이어그램 유형 지원',
      '복수 LLM 파이프라인으로 품질 개선',
      'Flask/React 기반 실시간 스트리밍 렌더링'
    ],
    achievements: [
      '스트리밍 UI로 사용자 경험 향상',
      '부분 수정 시 즉시 업데이트',
      '기존 Artifact 대비 동적 렌더링 구현'
    ],
    techStack: [
      'Backend: Python, Flask',
      'Frontend: React, Mermaid',
      'AI: GPT-3.5/4'
    ],
    demo: {
      video: {
        title: '다이어그램 생성기 데모',
        url: 'https://drive.google.com/file/d/1eNwKt5s0et-vMnTzFz8faELMdPi3nYx2/view?usp=sharing',
        embedUrl:
          'https://drive.google.com/file/d/1eNwKt5s0et-vMnTzFz8faELMdPi3nYx2/preview'
      }
    }
  },
  {
    title: '고객 응대 챗봇 시스템',
    subtitle: 'CS 챗봇',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.06 - 2024.06',
    shortSummary:
      '24/7 CS 챗봇, 매뉴얼 RAG 기반 스트리밍 응답으로 CS 부담 30% 감소',
    overview: {
      background: [
        '24시간 실시간 고객 문의 대응 필요',
        'CS팀 업무량 증대로 일관된 응답 품질 필요'
      ],
      implementation: [
        '제품 매뉴얼 기반 RAG 시스템',
        'PDF 자동 처리 파이프라인',
        '실시간 스트리밍 응답'
      ]
    },
    features: [
      '매뉴얼 데이터 전처리/정규화',
      'OpenAI TextEmbedding-2 벡터화',
      'LlamaIndex 검색 최적화',
      'AWS Lambda + Docker 자동화 배포',
      'FastAPI 기반 고성능 백엔드'
    ],
    achievements: [
      '24시간 자동 응대 제공으로 CS 부담 경감',
      '챗봇 선응답으로 30% 문의 해결',
      '스트리밍 응답으로 사용자 대기 시간 단축'
    ],
    techStack: [
      'Backend: Python, FastAPI',
      'AI/ML: OpenAI GPT-3.5, TextEmbedding-2, LlamaIndex',
      'Infrastructure: AWS Lambda, Docker'
    ]
  },
  {
    title: '리뷰 이관 서비스',
    subtitle: '리뷰 마이그레이션 도구',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.12 - 2024.12',
    duration: '개발 1개월 후 유지보수',
    shortSummary:
      '네이버 쇼핑몰 리뷰를 자사 플랫폼으로 자동 이관, 구매 전환율 향상',
    overview: {
      purpose: '검증된 실제 리뷰를 자사 이커머스 플랫폼으로 이전해 전환율 개선',
      implementation: [
        'Streamlit 기반 관리자 UI로 리뷰 이관 프로세스 시각화',
        '스팸/중복/부적절 리뷰 자동 필터링',
        'Crema 리뷰 API 연동으로 자동 등록 및 중복 방지'
      ]
    },
    achievements: [
      '합법적 절차로 실제 리뷰 확보, 플랫폼 신뢰도 상승',
      '리뷰 증가로 매출 전환율 상승'
    ],
    techStack: [
      'Backend: Python, Streamlit',
      'API: Crema Review API',
      'Tools: Data Filtering, Validation'
    ]
  },
  {
    title: '데이터 크롤링 시스템',
    subtitle: '멀티 노드 크롤러',
    type: PROJECT_TYPES.COMPANY,
    period: '2021.01 - 2024.06',
    duration: '개발 1개월 후 유지보수',
    shortSummary:
      '멀티 노드 병렬 크롤링으로 대규모 웹 데이터 수집, Elasticsearch로 트렌드 분석',
    overview: {
      purpose: '병렬 크롤링으로 대규모 웹 데이터를 신속·안정적으로 수집/분석',
      implementation: [
        '멀티 노드 병렬 처리 설계 (노드 분산·스케줄링)',
        '실시간 모니터링 및 에러 자동 복구',
        'Elasticsearch 기반 대용량 데이터 인덱싱·분석'
      ]
    },
    achievements: [
      '병렬 크롤링으로 데이터 수집 속도 3~4배 향상',
      'Elasticsearch 분석으로 쇼핑 트렌드·키워드 파악 용이'
    ],
    techStack: [
      'Backend: Python, Selenium',
      'Database: Elasticsearch',
      'Infrastructure: Multi-node Architecture'
    ]
  },
  {
    title: '미로 스마트홈 모바일 앱',
    subtitle: 'MIRO Smart Home',
    type: PROJECT_TYPES.COMPANY,
    period: '2019.04 - 2020.09',
    shortSummary: 'IoT 기기 제어 모바일 앱 기획/관리, 제품 확장 및 UX 개선',
    overview: {
      purpose:
        '가습기/공기청정기/선풍기 등을 모바일 앱으로 제어, 기능 유지보수',
      implementation: [
        '앱 시나리오 및 세부 기능 기획, 스토리보드 작성',
        '외주 개발사·디자이너와 일정 조율',
        '런칭 후 버그 수정 및 기능 개선'
      ]
    },
    achievements: [
      'IoT 제품 제어 범위를 지속 확장',
      'UI/UX 개선으로 사용자 만족도 및 재사용률 상승'
    ],
    techStack: [
      'Mobile: React Native',
      'Backend: Node.js',
      'Infrastructure: AWS'
    ]
  },
  {
    title: 'IoT 제품 테스트 검증 프로그램',
    subtitle: 'IoT Test Automation',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.12 - 2019.03',
    shortSummary:
      '메시지 동작 자동화 테스트, 반복 테스트 시간 감소로 품질 안정화',
    overview: {
      purpose:
        'IoT 기기 송수신 동작을 자동 검증해 품질 개선 및 테스트 자원 절감',
      implementation: [
        '테스트 스크립트(Scenario) 스키마 정의로 표준화',
        'Python 기반 자동화 코드로 반복 테스트 효율 극대화'
      ]
    },
    achievements: [
      '반복 테스트 시간 70~80% 단축',
      '오류 추적·품질 검증 정확도 향상'
    ],
    techStack: [
      'Backend: Python',
      'Testing: Pytest, Automation Framework',
      'IoT: MQTT Protocol'
    ]
  },
  {
    title: '시계열 데이터 시각화 환경',
    subtitle: 'IoT Analytics Platform',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.09 - 2020.09',
    shortSummary:
      'Elasticsearch + Kibana로 IoT 데이터 수집/시각화, 마케팅 및 제품 개선 지원',
    overview: {
      purpose: 'IoT 디바이스에서 발생하는 대규모 시계열 데이터를 분석·시각화',
      implementation: [
        'Elasticsearch 클러스터 운영으로 대용량 로그/센서 데이터 처리',
        'Kibana 대시보드로 실시간 데이터 시각화',
        '서버 상태 모니터링 및 이상 감지'
      ]
    },
    achievements: [
      '실시간 대시보드로 제품 개선·마케팅 전략 도출',
      '데이터 기반 의사결정 문화 정착'
    ],
    techStack: [
      'Database: Elasticsearch',
      'Visualization: Kibana',
      'Infrastructure: ELK Stack'
    ]
  },
  {
    title: 'IoT 기기 인공지능 스피커 연동',
    subtitle: 'AI Speaker Integration',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.08 - 2018.09',
    shortSummary:
      'Naver Clova·Kakao Home 등 AI 스피커와 IoT 기기 연동, 음성 제어 기능 강화',
    overview: {
      purpose: '스피커 음성 명령으로 IoT 기기를 제어하는 기능 제공',
      implementation: [
        'OAuth 2.0 인증으로 안전한 기기 연동',
        'RESTful API 핸들러 (제어·피드백·상태 조회)',
        'AWS Lambda, API Gateway 활용 확장성 확보'
      ]
    },
    achievements: [
      'AI 스피커 음성 제어 범위 확대, 사용자 편의성 향상',
      'IoT 제품 경쟁력 강화 및 브랜드 인지도 상승'
    ],
    techStack: [
      'Backend: Node.js, Express',
      'Authentication: OAuth 2.0',
      'Infrastructure: AWS Lambda, API Gateway'
    ]
  }
]
