import { PROJECT_TYPES, Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    title: '개인화 코드 분석 시스템 개발',
    subtitle: '토이프로젝트, CodeCast',
    type: PROJECT_TYPES.TOY,
    period: '2024-12',
    duration: '개발기간 2주',
    shortSummary:
      '코드 습관 분석 + 자동 피드백 제공. LLM 기반 멀티 에이전트로 품질 향상',
    overview: {
      purpose:
        '개발자들의 코딩 습관을 분석하고 맞춤형 피드백을 제공하는 AI 기반 코드 분석 시스템',
      background: [
        '코딩 습관 개선 및 코드 품질 향상을 위해 기획',
        'LLM을 활용해 자동 코드 리뷰 및 분석 과정을 구축, 반복 피드백 제공',
        '매일 오전 9시, 이전날 변경된 코드를 분석하여 “팟캐스트” 형식 인사이트 제공'
      ],
      marketAnalysis: [
        '기존 서비스는 민감 코드정보를 외부 클라우드로 전송하는 보안 이슈 존재',
        '완전 로컬 처리 및 오픈소스 공개로 코드 투명성과 신뢰성 확보'
      ]
    },
    features: [
      'Multi-Agent 협업 분석(개선, 칭찬, 발견, 심층분석 등)',
      'LangGraph 기반 자가회복 프로세스로 멀티 에이전트 안정성 강화',
      '사용자 코딩 습관 장기 메모리화 → 반복 피드백 제공',
      '시맨틱 검색 + BM25 결합 하이브리드 RAG 시스템',
      '로컬 완전 처리로 보안 위험 최소화'
    ],
    achievements: [
      '개발자별 코드 작성 습관 파악 및 맞춤형 피드백 제공',
      '완전 로컬 환경 도입으로 보안 리스크 감소',
      '지속적 자동 분석으로 실제 코드 품질과 개발자 역량 향상'
    ],
    github: 'https://github.com/seolks88/CodeCast',
    techStack: [
      'Backend: Python, FastAPI, LangGraph',
      'AI/ML: RAG, Multi-Agent System',
      'Database: Vector DB, Long-term Memory Store',
      'Frontend: React, TypeScript, Next.js'
    ]
  },
  {
    title: '정책 추천 시스템 개발',
    subtitle: '토이프로젝트, 정책이음, 2024 서울프롬프톤 공모전',
    type: PROJECT_TYPES.TOY,
    period: '2024-12',
    shortSummary:
      '사용자 맞춤 정책을 LLM으로 대화형 추천. FAQ 자동생성과 웹 검색 연동',
    overview: {
      purpose:
        'LLM을 활용한 대화형 정책 추천 플랫폼을 통해 사용자별 맞춤 정책을 제안',
      ideas: [
        '멀티턴 대화 기반 정책 추천',
        '웹 검색(뉴스·유튜브·블로그) 연동',
        'FAQ 자동 생성 및 통계'
      ],
      implementation: [
        '대규모 정책 문서 Chunking + 예상 Q&A 임베딩(RAG)',
        'GCP, Google LLM(Gemini) 활용'
      ]
    },
    learnings: {
      Conversation: [
        '정책 후보군이 많은 경우 단계적 질문을 통해 범위 축소',
        '사용자 프로파일(나이·직업·성별)을 고려한 우선순위',
        '대화 종료 시점 설정 (정보 수집 vs 사용자 피로도)'
      ],
      FAQ: [
        '채팅 로그에서 유사 질문 군집화 (자카드 계수)',
        '개인정보 제거, 키워드 추출 통한 표준화',
        '빈도 기반 통계 및 자동 개선'
      ],
      UX: [
        '정책 정보 제공 프로세스 단순화',
        '사용자 피드백 기반 대화 흐름 최적화'
      ]
    },
    techStack: [
      'Backend: Python, FastAPI',
      'Cloud: Firebase (Functions), Firestore, Auth, Hosting, CI/CD',
      'AI/ML: Google LLM (Gemini), Text Embedding API',
      'Database: GCP BigQuery',
      'Frontend: React, Next.js, TypeScript, Tailwind, Redux'
    ],
    demo: {
      video:
        'https://drive.google.com/file/d/1TcZYelrb7lDDAXdrtnLTlhBOWEBQh-UK/view?usp=sharing',
      presentation:
        'https://drive.google.com/file/d/160jp_-A4dpgV1Abi9xA21o8UpZAWA30f/view?usp=drive_link'
    },
    features: [
      '멀티턴 대화 시스템 (컨텍스트 유지)',
      '사용자 프로필 기반 맞춤 정책 추천 알고리즘',
      '웹 크롤링으로 실시간 정책 정보 업데이트',
      '대규모 정책 문서 RAG 처리 및 임베딩',
      '유사 질문 군집화로 FAQ 자동 생성',
      '사용자 피드백 기반 추천 로직 개선'
    ]
  },
  {
    title: '라이브 쇼핑 도우미 개발',
    subtitle: 'Live+',
    type: PROJECT_TYPES.COMPANY,
    period: '2024.06 - 2024.10',
    shortSummary:
      '쇼핑 라이브 방송의 실시간 채팅 응대 자동화 + 방송 진행 보조 기능 통합',
    overview: {
      purpose:
        '실시간 채팅 응대 자동화와 방송 진행 보조 도구를 제공하여 라이브 커머스 효율 향상',
      ideas: ['실시간 채팅 관리 시스템', '방송 진행 보조 기능']
    },
    features: [
      '메시지 처리 파이프라인 (질문성 메시지 감지, LLM 답변 카드 생성)',
      'Human-in-the-Loop 검수 (답변 재생성·확장·직접수정, 승인/폐기 결정)',
      'RAG 기반 자동 응답 (Groundedness Check 적용)',
      '구매인증 자동 검증 (네이버 API 연동)',
      '답변 품질 관리 시뮬레이터',
      '실시간 채팅 통계·분석'
    ],
    achievements: [
      '대량 메시지 처리 최적화 (실시간 폭주 대응)',
      'SSE를 통한 실시간 채팅 스트리밍 처리',
      '좌우 분할 레이아웃으로 채팅·질문관리 UX 개선',
      '답변 스트리밍 렌더링, 제스처 기능 등 다양한 실시간 인터랙션'
    ],
    techStack: [
      'Backend: Python, FastAPI, RAG, Crawling',
      'Frontend: TypeScript, Next.js, Tailwind, ShadcnUI, Redux',
      'Infrastructure: Firebase (Auth, Firestore)'
    ]
  },
  {
    title: '품질팀 업무 자동화 기술 지원',
    subtitle: 'QualiERP',
    period: '2024.06 - 2024.07',
    type: PROJECT_TYPES.COMPANY,
    shortSummary:
      'CS·품질팀 문서 처리 자동화. LLM 파이프라인 + Elastic 실시간 분석 도입',
    overview: {
      background: [
        'CS/품질팀 간 문서 분산으로 연간 240시간 업무 손실',
        '비정형 데이터로 인한 분석 지연 (월 2회→일간)',
        '수작업 처리로 인한 오류 발생'
      ],
      implementation: [
        'LLM 기반 문서 파싱 파이프라인 구축',
        'Elastic 기반 실시간 데이터 처리·대시보드 구성'
      ]
    },
    achievements: [
      '데이터 분석 자동화(월 2회→일간 단위)로 추이 분석 세밀화',
      '분석 시간 90% 단축 (월 40h→4h)',
      '정확도 향상 + 연간 약 500만원 비용 절감',
      '실시간 데이터 기반 의사결정으로 품질 이슈 대응 시간 단축'
    ],
    techStack: ['Backend: Python, Elastic, Kibana', 'Frontend: Streamlit']
  },
  {
    title: '문서 생성기',
    subtitle: '정부 지원과제 문서 자동화',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.08 - 2023.11',
    shortSummary:
      'Multi-Agent 파이프라인으로 정부과제 문서 대량 자동 생성. 2,000시간→200시간 단축',
    overview: {
      background: [
        '정부 지원과제 문서 작성: 1,000+ 토픽 × 2페이지 → 2,000시간 소요',
        '일관된 품질 확보 필요'
      ],
      implementation: [
        'Multi-Agent 기반 문서 생성 파이프라인',
        '주제 분석 → 콘텐츠 생성 → 품질 검증 → 번역/변환',
        '영문 처리 후 한글화로 토큰 비용 절감',
        'Few-shot 프롬프트 재사용으로 효율화'
      ]
    },
    features: [
      'GPT-4로 Few-shot 예시 생성, GPT-3.5로 추론 진행',
      'Google Sheets 연동으로 작업 현황 실시간 공유',
      '문서 품질 일관성 85% 이상 유지'
    ],
    achievements: [
      '문서 작성 시간 90% 단축(2,000h→200h), 프로젝트 비용 70% 절감',
      '재작업 비율 5% 미만, 품질 일관성 85% 이상 확보'
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
    shortSummary:
      'Desktop 어디서든 단축키로 음성 입력. Groq Whisper Turbo로 STT 속도 50% 단축',
    overview: {
      purpose: '단축키 하나로 AI 음성 입력해 업무 병목(타이핑)을 제거',
      background: [
        'AI 도구 사용 시 텍스트 입력이 병목',
        '데스크톱 환경에서 체계적인 음성 입력 솔루션 부재',
        '오픈소스 유지보수 중단 이슈 발생'
      ],
      implementation: [
        '글로벌 단축키(cmd+shift+;)로 즉시 음성 입력',
        '항상 대기하는 AI 비서 컨셉(백그라운드 프로세스)',
        '인식 실패 시 자동 복구'
      ]
    },
    features: [
      'OS 레벨 글로벌 단축키 등록 및 충돌 방지',
      'Groq Whisper Turbo API로 응답 지연 50% 이상 단축',
      '세션 히스토리 관리 + 시스템 트레이 통합',
      '음성 인식 실패 시 자동 재시도'
    ],
    achievements: [
      '프롬프트 입력 시간 30% 단축 → 업무 생산성 향상',
      '성능 최적화로 재택 근무 환경 개선'
    ],
    techStack: [
      'Frontend: Electron, JavaScript',
      'AI: OpenAI Whisper, Groq Whisper Turbo',
      'System: Global Shortcuts, Clipboard Management'
    ]
  },
  {
    title: '코드 컨텍스트 최적화 도구',
    subtitle: 'Merge',
    type: PROJECT_TYPES.TOY,
    period: '2023.12',
    shortSummary:
      '대규모 코드베이스에서 필요한 부분만 추출해 LLM에 제공. 컨텍스트 크기 90% 이상 축소',
    overview: {
      background: [
        '코드가 방대해지면 LLM의 정확도 저하, 컨텍스트 초과 문제가 발생',
        '코드 복잡도 증가에 따른 추론 정확도 하락'
      ],
      ideas: [
        '선별적 코드 컨텍스트 추출',
        'LLM 친화적 포맷으로 변환',
        'CLI 기반 즉각적 코드 추출 시스템'
      ]
    },
    features: [
      'JSON 기반 코드 그룹 설정',
      '프로젝트 폴더 전체 탐색 및 자동 분류',
      '모델별 맞춤 프롬프트 포맷팅(Claude=XML, GPT=Markdown)',
      '파일 구조 메타데이터 자동첨부',
      '프로젝트 컨텍스트 압축'
    ],
    achievements: [
      '코드 컨텍스트를 최대 90% 이상 축소(3만→3천줄)',
      'LLM 응답 정확도 유지 + 대규모 프로젝트 지원'
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
      '텍스트 입력만으로 여러 형태의 다이어그램 생성. Mermaid+LLM 결합',
    overview: {
      purpose:
        '텍스트 입력만으로 시퀀스·클래스·플로우차트 등 다이어그램 자동 생성',
      background: [
        'Claude Artifact 등 무료 서비스 부재 (당시 기준)',
        '국내 다이어그램 자동화 도구 부족',
        '유료 SaaS 서비스 커스터마이징 한계'
      ]
    },
    features: [
      '텍스트 기반 다이어그램 자동 생성',
      '사용자 맞춤 수정 지원',
      '8가지 다이어그램 유형 지원',
      '복수 LLM 파이프라인으로 품질 개선',
      'Flask/React 기반 실시간 스트리밍 렌더링'
    ],
    achievements: [
      '스트리밍 UI로 사용자 경험 개선',
      '부분 수정 시 실시간 업데이트 지원',
      '기존 Artifact 대비 동적 렌더링 구현'
    ],
    techStack: [
      'Backend: Python, Flask',
      'Frontend: React, Mermaid',
      'AI: GPT-3.5/4'
    ],
    demo: {
      video:
        'https://drive.google.com/file/d/1eNwKt5s0et-vMnTzFz8faELMdPi3nYx2/view?usp=sharing'
    }
  },
  {
    title: '고객 응대 챗봇 시스템 개발',
    subtitle: 'CS 챗봇',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.06 - 2024.06',
    shortSummary:
      '24/7 CS 챗봇. 매뉴얼 RAG 기반 스트리밍 응답으로 CS 부담 30% 절감',
    overview: {
      background: [
        '24/7 실시간 고객 문의 대응 필요',
        'CS팀 업무량 증가, 일관된 응답 품질 관리 필요'
      ],
      implementation: [
        '제품 매뉴얼 기반 RAG 시스템',
        'PDF 자동 처리 파이프라인',
        '실시간 스트리밍 응답'
      ]
    },
    features: [
      '매뉴얼 데이터 전처리·정규화',
      'OpenAI TextEmbedding-2 벡터화',
      'LlamaIndex 활용 검색 최적화',
      'AWS Lambda 서버리스 + Docker 배포 자동화',
      'FastAPI 기반 고성능 백엔드'
    ],
    achievements: [
      '24/7 자동 응대로 CS 부하 완화',
      '챗봇 선응답으로 30% 문의 해결',
      '실시간 스트리밍으로 사용자 응답 대기 감소'
    ],
    techStack: [
      'Backend: Python, FastAPI',
      'AI/ML: OpenAI GPT-3.5, TextEmbedding-2, LlamaIndex',
      'Infrastructure: AWS Lambda, Docker'
    ]
  },
  {
    title: '리뷰 이관 서비스 개발',
    subtitle: '리뷰 마이그레이션 도구',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.12 - 2024.12',
    duration: '개발기간 1개월 후 유지보수',
    shortSummary:
      '네이버 쇼핑몰의 실제 리뷰를 자사 플랫폼으로 이관하여 신뢰도와 전환율을 높이는 자동화 도구',
    overview: {
      purpose:
        '네이버 쇼핑몰의 실사용자 리뷰를 자사 이커머스 플랫폼에 효과적으로 이관해 구매 전환율을 높이는 시스템',
      implementation: [
        'Streamlit 기반 관리자 UI로 리뷰 이관 프로세스 시각화',
        '리뷰 필터링 로직으로 스팸·중복·부적절 리뷰 자동 검출 및 데이터 정제',
        '크레마(Crema) 리뷰 API 연동을 통해 자동 등록 및 중복 방지'
      ]
    },
    achievements: [
      '합법적 절차를 통해 검증된 실제 리뷰를 확보해 플랫폼 신뢰도 향상',
      '사용자 리뷰가 풍부해지면서 매출 전환율 상승에 기여'
    ],
    techStack: [
      'Backend: Python, Streamlit',
      'API: Crema Review API',
      'Tools: Data Filtering, Validation'
    ]
  },
  {
    title: '데이터 크롤링 시스템 개발',
    subtitle: '멀티 노드 크롤러',
    type: PROJECT_TYPES.COMPANY,
    period: '2021.01 - 2024.06',
    duration: '개발기간 1개월 이후 유지보수',
    shortSummary:
      '멀티 노드 병렬 크롤링으로 대규모 웹 데이터 수집, Elasticsearch 분석 환경으로 쇼핑 트렌드 파악',
    overview: {
      purpose:
        '병렬 크롤링 시스템을 통해 대규모 웹 데이터를 빠르고 안정적으로 수집하고, Elasticsearch로 분석·활용',
      implementation: [
        '멀티 노드 병렬 처리 구조 설계(노드 간 작업 분산 및 스케줄링)',
        '실시간 모니터링과 에러 복구 자동화 기능 구현',
        'Elasticsearch 기반 대용량 데이터 인덱싱·분석 파이프라인 구축'
      ]
    },
    achievements: [
      '병렬 크롤링 효율로 기존 대비 최대 3~4배 이상의 데이터 수집 속도 확보',
      'Elasticsearch 분석을 통해 쇼핑 트렌드·키워드 흐름 파악이 용이해짐'
    ],
    techStack: [
      'Backend: Python, Scrapy',
      'Database: Elasticsearch',
      'Infrastructure: Multi-node Architecture'
    ]
  },
  {
    title: '미로 스마트홈 모바일 앱',
    subtitle: 'MIRO Smart Home',
    type: PROJECT_TYPES.COMPANY,
    period: '2019.04 - 2020.09',
    shortSummary:
      'IoT 기기 제어를 위한 모바일 앱 기획·관리, 다양한 제품으로 확장하며 UX 개선에 주력',
    overview: {
      purpose:
        'IoT 제품(가습기, 공기청정기, 선풍기 등)을 모바일로 제어할 수 있는 앱을 기획·관리하고, 일부 기능 유지보수',
      implementation: [
        '앱 시나리오·상세 기능 기획 및 스토리보드 작성',
        '외주 개발사 및 디자이너 일정 조율로 안정적 프로젝트 진행',
        '런칭 후 버그 수정 및 기능 개선 코드 유지보수'
      ]
    },
    achievements: [
      'IoT 제품 제어 범위를 지속적으로 확장(가습기 → 공기청정기·선풍기)',
      'UI/UX 개선을 통해 사용자 만족도 및 앱 재사용률 상승'
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
      '제품 메시지 동작 자동화 테스트 설계·구현, 반복 테스트 시간 대폭 절감으로 품질 안정화',
    overview: {
      purpose:
        'IoT 기기의 메시지 송수신 동작을 자동으로 검증해 품질을 개선하고, 테스트 리소스를 절감',
      implementation: [
        '테스트 스크립트(Scenario) 스키마 정의로 표준화된 테스트 체계 마련',
        '시나리오별 자동화 코드 작성(Python 기반)으로 반복·회귀 테스트 효율 극대화'
      ]
    },
    achievements: [
      '반복적인 테스트 작업 시간 크게 단축(수작업 대비 70~80% 절감)',
      '오류 추적·품질 검증 정확도 향상으로 릴리스 품질 안정화'
    ],
    techStack: [
      'Backend: Python',
      'Testing: Pytest, Automation Framework',
      'IoT: MQTT Protocol'
    ]
  },
  {
    title: '시계열 데이터 시각화 환경 구축',
    subtitle: 'IoT Analytics Platform',
    type: PROJECT_TYPES.COMPANY,
    period: '2018.09 - 2020.09',
    shortSummary:
      'Elasticsearch + Kibana 기반으로 IoT 데이터 수집·시각화, 마케팅·제품 개선 전략 수립 지원',
    overview: {
      purpose:
        '대량의 IoT 디바이스에서 발생하는 시계열 데이터를 효율적으로 수집·분석·시각화하는 플랫폼 구축',
      implementation: [
        'Elasticsearch 클러스터 운영으로 대규모 로그·센서 데이터 처리',
        'Kibana 대시보드 구성으로 실시간 데이터 시각화',
        '서버 상태 모니터링 및 이상 감지 기능 도입'
      ]
    },
    achievements: [
      '시각화 대시보드로 제품 개선 아이디어 발굴 및 마케팅 전략 수립 용이',
      '데이터 기반 의사결정 문화 정착(실시간 로그 분석 환경)'
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
      'Naver Clova, Kakao Home 등 음성 AI 스피커와 IoT 기기를 연동해 음성 제어 기능 확장',
    overview: {
      purpose:
        'Naver Clova, Kakao Home 등 음성 인공지능 스피커와 자사 IoT 기기를 연동하여 음성 명령을 통한 제어 기능 제공',
      implementation: [
        'OAuth 2.0 인증 프로세스 설계·구현으로 안전한 기기 연동',
        'RESTful API 핸들러 개발(제어·피드백·상태 조회 등)',
        'AWS 마이크로서비스 활용(Lambda, API Gateway)로 확장성 확보'
      ]
    },
    achievements: [
      'AI 스피커 음성 제어 범위를 IoT 기기로 확대해 사용자 편의성 대폭 향상',
      'IoT 제품 경쟁력 강화 및 브랜드 인지도 상승'
    ],
    techStack: [
      'Backend: Node.js, Express',
      'Authentication: OAuth 2.0',
      'Infrastructure: AWS Lambda, API Gateway'
    ]
  }
]
