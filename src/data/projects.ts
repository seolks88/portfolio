import { PROJECT_TYPES, Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    title: '개인화 코드 분석 시스템 개발',
    subtitle: '토이프로젝트, CodeCast',
    type: PROJECT_TYPES.TOY,
    period: '2024-12',
    duration: '개발기간 2주',
    shortSummary:
      '코드 습관 분석 + 자동 피드백 제공 토이 프로젝트. LLM 기반 협업 에이전트로 품질 향상',
    overview: {
      purpose:
        '개발자들의 코딩 습관을 분석하고 맞춤형 피드백을 제공하는 AI 기반 코드 분석 시스템',
      background: [
        '개발자들의 코딩 습관 개선과 실질적인 성장을 돕기 위해 기획',
        'LLM의 강력한 기능을 활용하여 코드 리뷰 및 분석 과정을 자동화하고, 개발자에게 맞춤형 피드백을 제공',
        '매일 오전 9시, 전날 변경된 코드를 분석하여 팟캐스트 형식으로 다양한 관점의 인사이트 제공'
      ],
      marketAnalysis: [
        '기존 코드 분석 서비스들은 민감한 코드 정보를 외부 클라우드로 전송해야 하는 보안 문제가 있었음',
        '이러한 문제를 해결하기 위해 완전 로컬 처리 방식을 채택하고, 오픈소스로 공개하여 코드의 투명성과 신뢰성을 확보'
      ]
    },
    features: [
      'Multi-Agent 협업 환경: 개선/칭찬/발견/심층분석 등 다양한 에이전트가 코드 분석',
      'LangGraph 프레임워크 기반 자가 회복 프로세스 구현 → 멀티 에이전트 안정성 강화',
      '사용자의 코딩 습관(장기 메모리) 관리해 반복적 피드백 제공',
      '시맨틱 검색과 BM25를 결합한 하이브리드 RAG 시스템으로 정확도 향상',
      '로컬 완전 처리로 민감 코드 보호 및 오픈소스 공개를 통한 투명성 확보'
    ],
    achievements: [
      '개발자의 코드 작성 습관을 분석하여 맞춤형 피드백 제공',
      '완전 로컬 환경으로 보안 위험 최소화',
      '지속적인 분석·개선을 통해 실제 코드 품질과 개발자 역량 향상에 기여'
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
    overview: {
      purpose:
        '사용자별로 맞춤형 정책을 추천하기 위해 LLM을 활용한 대화형 정책 추천 플랫폼 구축',
      ideas: [
        '인터랙티브 대화시스템(멀티턴 대화)',
        '웹 검색(뉴스·유튜브·블로그) 연동',
        'FAQ 자동 생성 및 통계'
      ],
      implementation: [
        'RAG 구축 시 대규모 정책 문서 Chunking + 예상 Q&A 임베딩',
        'GCP, Google LLM(Gemini) 활용'
      ]
    },
    learnings: {
      conversation: [
        '정책 후보군이 많을 경우, 추가 질문으로 범위를 좁히는 전략',
        '다음 질문 선택 로직 (나이/성별/직업 등 우선순위)',
        '대화 종료 시점 결정 (충분한 정보 수집 vs 사용자 피로도)'
      ],
      faq: [
        '채팅 로그에서 유사 질문 군집화 (자카드 계수 활용)',
        '개인정보 제거 및 키워드 추출을 통한 표준화',
        '빈도 기반 통계 및 자동 개선'
      ],
      ux: ['정책 정보 제공 방식 간소화', '사용자 피드백 기반 대화 흐름 최적화']
    },
    techStack: [
      'Backend: Python, FastAPI',
      'Cloud: Firebase Functions, Firestore, Authentication, Hosting, CI/CD',
      'AI/ML: Google LLM (Gemini API), Text Embedding API',
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
      '인터랙티브 대화 시스템 구현 (멀티턴 대화, 컨텍스트 유지)',
      '사용자 프로필 기반 맞춤형 정책 추천 알고리즘',
      '웹 크롤링을 통한 실시간 정책 정보 업데이트 (뉴스/블로그/유튜브)',
      'RAG 시스템으로 대규모 정책 문서 처리 및 임베딩',
      '유사 질문 군집화를 통한 FAQ 자동 생성',
      '사용자 피드백 기반 추천 시스템 개선'
    ]
  },
  {
    title: '라이브 쇼핑 도우미 개발',
    subtitle: 'Live+',
    type: PROJECT_TYPES.COMPANY,
    period: '2024.06 - 2024.10',
    overview: {
      purpose:
        '쇼핑 라이브 방송의 실시간 채팅 응대 자동화 및 방송 진행 보조 도구 개발',
      ideas: ['실시간 채팅 관리 시스템', '방송 진행 보조 도구']
    },
    features: [
      '메시지 처리 파이프라인 구축 (사용자 채팅 입력 수신/분류, 질문성 메시지 자동 감지, LLM 기반 답변 카드 생성)',
      'Human-in-the-Loop 검수 단계 구현 (답변 재생성/확장/직접수정 옵션, 답변 승인 또는 폐기 결정)',
      'RAG 기반 자동 응답 시스템 실험 (Groundedness Check로 신뢰도 검증)',
      '구매인증 자동 검증 (네이버 API 연동)',
      '답변 품질 관리 시뮬레이터 구현',
      '실시간 채팅 통계 및 분석'
    ],
    achievements: [
      '대량 메시지 처리 최적화',
      'BE/FE 양방향 비동기 처리로 실시간 채팅 폭주 상황에서의 메시지 처리',
      'SSE(Server-Sent Events) 구현으로 실시간 채팅 메시지의 효율적 스트리밍 처리',
      '좌측 채팅관리, 우측 질문관리 분할 레이아웃으로 UX 최적화',
      '답변 스트리밍 렌더링, 제스처 기능, 실시간 애니메이션 구현',
      '최저가 스캔, 돌림판 등 방송 진행 보조 도구 통합'
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
    overview: {
      background: [
        'CS팀/품질팀 간 문서 관리 체계 분산으로 인한 연간 약 240시간의 업무 손실 발생',
        '비정형 데이터로 인한 분석 지연 (월 2회 → 일간 단위 개선 필요)',
        '수작업 기반 데이터 처리로 인한 오류 발생'
      ],
      implementation: [
        'LLM 기반 문서 파싱 파이프라인 구축',
        'Elastic 기반 실시간 데이터 처리 시스템 구축'
      ]
    },
    achievements: [
      '월 2회 수동으로 진행되던 데이터 분석을 일간 단위로 자동화하여 세밀한 추이 분석을 가능하게 함',
      '데이터 처리 시간 90% 단축 (월 40시간 → 4시간)',
      '데이터 정확도 향상',
      '연간 약 500만원 인건비 절감 효과',
      '실시간 데이터 기반 의사결정으로 품질 이슈 대응 시간 단축'
    ],
    techStack: ['Backend: Python, Elastic, Kibana', 'Frontend: Streamlit']
  },
  {
    title: '문서 생성기',
    subtitle: '정부 지원과제 문서 자동화',
    type: PROJECT_TYPES.COMPANY,
    period: '2023.08 - 2023.11',
    overview: {
      background: [
        '정부 지원과제 문서 작성 업무 (1,000개 이상의 토픽별 2페이지 분량)',
        '수작업 시 예상 소요시간 2,000시간 이상',
        '일관된 품질의 문서 작성 필요'
      ],
      implementation: [
        'Multi-Agent 기반 문서 생성 파이프라인 구축',
        '주제 분석 에이전트: 토픽 계층구조 추출',
        '콘텐츠 생성 에이전트: 섹션별 내용 작성',
        '품질 관리 에이전트: 일관성/완성도 검증',
        '번역/변환 에이전트: 최종 문서화'
      ]
    },
    features: [
      '영문 처리 후 한글화 전략으로 토큰 비용 60% 절감',
      'Few-shot 프롬프트 재사용으로 호출 효율화',
      'GPT-4로 고품질 Few-shot 예시 생성',
      'GPT-3.5로 실제 추론 진행',
      'Google Sheets 연동으로 실시간 진행상황 공유',
      '팀 전체 문서 작성 현황 대시보드 구축'
    ],
    achievements: [
      '문서 작성 시간 90% 단축 (2,000시간 → 200시간)',
      '프로젝트 비용 70% 절감',
      '문서 품질 표준화로 재작업 비율 5% 미만',
      '문서 품질 일관성 85% 이상 확보'
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
    overview: {
      purpose: '단축키 기반 음성 입력으로 AI 도구 사용성 개선',
      background: [
        'AI 도구 활용 시 텍스트 입력이 업무 병목 지점으로 작용',
        '기존 데스크톱 환경의 음성 입력 솔루션 부재',
        '시중 오픈소스의 에러 처리 미흡 및 지원 중단 이슈'
      ],
      implementation: [
        '어떤 앱을 사용 중이더라도 단일 단축키(cmd+shift+;)로 즉시 음성 입력 가능',
        '"항상 사용 가능한 AI 비서" 컨셉으로 접근성 극대화',
        '음성 인식 실패 시에도 작업 연속성 보장'
      ]
    },
    features: [
      'OS 레벨 글로벌 단축키 등록 및 충돌 방지',
      '백그라운드 프로세스 최적화로 상시 대기 상태 유지',
      '음성 인식 실패 시 자동 복구 메커니즘 구현',
      'Groq Whisper Turbo API 통합으로 응답 지연 50% 이상 단축',
      '세션 히스토리 관리로 작업 연속성 보장',
      '시스템 트레이 통합으로 리소스 관리 효율화'
    ],
    achievements: [
      '프롬프트 입력 시간 30% 단축',
      '재택 시 일일 업무 생산성 향상',
      'Groq API 도입으로 응답 지연 50% 이상 개선'
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
    overview: {
      background: [
        '개발 시 코드가 길어질 경우 LLM의 코드 이해도 저하 문제 발생',
        '대규모 코드베이스에서 컨텍스트 길이 초과 이슈',
        '코드 복잡도 증가에 따른 LLM 추론 정확도 감소'
      ],
      ideas: [
        '필요한 코드 컨텍스트만 선택적 추출',
        'LLM 친화적 포맷으로 자동 변환',
        'CLI 기반 즉각적 코드 추출 시스템'
      ]
    },
    features: [
      'JSON 기반 사전 정의 코드 그룹 설정',
      '프로젝트 하위 폴더 전체 탐색 기능',
      '기능별 관련 코드 자동 분류 및 추출',
      '모델별 맞춤 프롬프트 포맷팅 (Claude: XML 형식, GPT: 마크다운)',
      '파일 구조 메타데이터 자동 첨부',
      '프로젝트 컨텍스트 압축 처리'
    ],
    achievements: [
      '코드 컨텍스트 크기 90% 이상 감소 (3만줄 → 3천줄)',
      'LLM 응답 정확도 유지',
      '프로젝트 규모 증가에도 일관된 개발 속도 유지'
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
    overview: {
      purpose: '텍스트 입력만으로 다양한 형태의 다이어그램 자동 생성',
      background: [
        'Claude Artifact 등 무료 서비스 부재 (현재는 다수 존재)',
        '국내 다이어그램 자동화 도구 시장 미성숙',
        '소수 유료 SaaS 서비스의 커스터마이징 한계'
      ]
    },
    features: [
      '텍스트 입력 기반 다이어그램 자동 생성',
      '사용자 요구사항 맞춤 수정 지원',
      '8가지 다이어그램 유형 지원 (시퀀스, 클래스, 플로우차트, 스테이트, ER, 간트, 쿼드런트, 유저저니)',
      '복수 LLM 파이프라인으로 다이어그램 품질 개선',
      'Flask/React 기반 실시간 스트리밍 렌더링'
    ],
    achievements: [
      '스트리밍 효과로 사용자 경험 개선',
      'Artifact보다 더 동적인 렌더링 구현',
      '부분 수정 시 스트리밍 업데이트 지원'
    ],
    techStack: [
      'Backend: Python, Flask',
      'Frontend: React, Mermaid',
      'AI: LLM API (GPT-3.5/4)'
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
    overview: {
      background: [
        '24/7 실시간 고객 문의 대응 필요성',
        'CS팀 업무 부하 분산',
        '일관된 응답 품질 유지 요구'
      ],
      implementation: [
        '제품 매뉴얼 기반 RAG 시스템 구축',
        '실시간 스트리밍 응답 구현',
        'PDF 매뉴얼 자동 처리 파이프라인'
      ]
    },
    features: [
      '매뉴얼 데이터 전처리 및 정규화',
      'OpenAI TextEmbedding-2 기반 벡터화',
      'LlamaIndex 활용 검색 최적화',
      'AWS Lambda 기반 서버리스 아키텍처',
      'Docker 컨테이너화로 배포 자동화',
      'FastAPI 기반 고성능 백엔드'
    ],
    achievements: [
      '24/7 문의 대응으로 고객 만족도 향상',
      'CS팀 인입 전 AI 챗봇으로 30% 문의 해결',
      '실시간 스트리밍으로 응답 대기 시간 체감 감소',
      'PDF 매뉴얼 자동 처리로 컨텐츠 업데이트 효율화'
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
    overview: {
      purpose:
        '네이버 쇼핑몰의 실제 상품 리뷰를 자사 이커머스 플랫폼으로 효율적으로 이관하여 구매 전환율을 향상',
      implementation: [
        'Streamlit 기반의 직관적인 관리자 인터페이스를 구축',
        '리뷰 필터링 로직 개발을 통한 데이터 정제 시스템을 구현',
        '크레마(Crema) 리뷰 API 연동으로 자동화된 리뷰 등록 및 중복 방지 시스템을 개발'
      ]
    },
    achievements: [
      '합법적인 방식으로 검증된 실제 리뷰 데이터를 확보',
      '플랫폼 신뢰도 향상 및 매출 증대를 달성'
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
    overview: {
      purpose: '멀티 노드 기반 병렬 크롤링 시스템 구축',
      implementation: [
        '실시간 모니터링',
        '에러 복구 자동화',
        'Elasticsearch 기반 대용량 데이터 관리·분석'
      ]
    },
    achievements: [
      '쇼핑 트렌드 분석을 위한 데이터 수집 환경 확보',
      '병렬 처리를 통한 크롤링 효율성 향상'
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
    overview: {
      purpose: 'IoT 제품 제어를 위한 모바일 앱 기획 및 관리',
      implementation: [
        '앱 시나리오 및 상세 기능 기획',
        '스토리보드 작성',
        '외주 개발사 및 디자이너 일정 조율',
        '버그 개선 및 기능 개선 코드 유지보수'
      ]
    },
    achievements: [
      'IoT 제품 제어 지원 범위 확장(가습기→공기청정기, 선풍기)',
      'UI/UX 개선으로 사용자 만족도 향상'
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
    overview: {
      purpose: '제품 메시지 동작 검증 자동화 테스트 프로그램 설계/구현',
      implementation: [
        '테스트 스크립트 스키마 정의',
        '테스트 시나리오별 자동화 코드 작성'
      ]
    },
    achievements: [
      '반복 테스트 시간 대폭 단축',
      '오류 추적 및 품질 검증 정확도 향상'
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
    overview: {
      purpose: 'IoT 데이터 수집/시각화 환경 구축',
      implementation: [
        'Elasticsearch 클러스터 운영',
        'Kibana 시각화 도입',
        '데이터 분석 및 서버 상태 모니터링'
      ]
    },
    achievements: [
      '시각화 그래프 활용을 통한 제품 개선',
      '마케팅 전략 수립 지원'
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
    overview: {
      purpose: 'Naver Clova, Kakao Home 인공지능 스피커와 IoT 기기 연동',
      implementation: [
        'OAuth 2.0 인증 프로세스 설계/구현',
        'RESTful API 핸들러 개발',
        'AWS 마이크로서비스 활용'
      ]
    },
    achievements: [
      'Naver Clova 및 Kakao Home 스피커와 IoT 제품 연동 성공',
      '사용자 음성 제어 기능 확장'
    ],
    techStack: [
      'Backend: Node.js, Express',
      'Authentication: OAuth 2.0',
      'Infrastructure: AWS Lambda, API Gateway'
    ]
  }
]
