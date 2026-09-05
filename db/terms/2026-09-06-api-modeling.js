export const apiAndModelingTerms = [
  {
    name: 'GUI',
    definition: '사용자가 창, 버튼, 메뉴, 아이콘 같은 시각 요소를 보고 클릭하거나 터치해 프로그램과 상호작용하는 그래픽 사용자 인터페이스. Graphical User Interface의 약자.',
    primaryExample: '용어 카드와 상세 페이지를 마우스로 눌러 이동하는 현재 웹 화면이 GUI다. 명령어를 직접 입력하는 CLI와 대비된다.',
    usageContext: '웹·모바일·데스크톱 앱에서 사용자가 기능을 발견하고 조작할 수 있는 화면을 설계할 때 사용한다.',
    mechanism: '화면의 시각 요소가 클릭·입력 같은 이벤트를 받고, 이벤트 처리 코드가 상태와 데이터를 변경한 뒤 변경 결과를 다시 화면에 그린다.',
    tags: ['GUI', 'UI', '프론트엔드', '사용자 경험', '인터페이스'],
    sourceKey: 'gui-2026-09-06',
    sourceText: 'GUI 용어 추가 요청',
    lesson: {
      memoryHook: '명령을 글자로 외워 치는 대신, 보이는 조작물을 눌러 프로그램과 대화하는 화면.',
      whyItMatters: '사용자는 내부 명령어나 데이터 구조를 몰라도 기능을 사용할 수 있습니다. 좋은 GUI는 가능한 행동과 현재 상태, 행동의 결과를 눈에 보이게 만듭니다.',
      logicSteps: ['프로그램 상태를 화면 요소로 표현한다.', '사용자가 버튼·입력창 등을 조작한다.', '이벤트 처리기가 명령을 실행하고 상태를 바꾼다.', '새 상태를 화면에 다시 렌더링한다.'],
      commonMistake: 'GUI는 화면의 예쁜 모양만 뜻하지 않습니다. 입력, 피드백, 오류 처리, 키보드 접근성까지 포함하는 상호작용 체계입니다.',
      relatedTerms: ['UI', 'UX', 'CLI', '이벤트', '렌더링']
    }
  },
  {
    name: 'API 프로덕트',
    definition: '여러 API 엔드포인트를 특정 사용자·비즈니스 목적에 맞춰 묶고 접근, 할당량, 인증, 과금 같은 운영 정책을 부여한 배포·관리 단위.',
    primaryExample: '같은 백엔드에서 조회 API만 담은 Public Product와 쓰기 API까지 포함한 Partner Product를 만들고 서로 다른 호출 한도와 OAuth 정책을 적용한다.',
    usageContext: 'Apigee, API Gateway, Kong, Azure API Management 같은 관리 계층에서 API를 소비자별 상품이나 계약 단위로 제공할 때 사용한다.',
    mechanism: '엔드포인트 묶음에 소비자 앱, API 키나 OAuth, quota·rate limit, 분석·과금 정책을 연결하고 게이트웨이가 요청마다 해당 정책을 집행한다.',
    tags: ['API', 'API 관리', '게이트웨이', '제품화', '정책'],
    sourceKey: 'api-product-2026-09-06',
    sourceText: 'Public·Partner·Internal API 묶음별 인증, 호출 한도, 과금 정책을 구분하는 API Product 메모',
    lesson: {
      memoryHook: 'API 여러 개에 대상 고객과 사용 규칙을 붙여 하나의 제공 상품으로 만든 것.',
      whyItMatters: '백엔드가 같아도 외부 개발자, 파트너, 내부 시스템이 필요한 기능과 허용 범위는 다릅니다. API 프로덕트는 코드를 복제하지 않고 이 차이를 운영 정책으로 관리합니다.',
      logicSteps: ['소비자 유형과 제공 목적을 정한다.', '허용할 엔드포인트를 하나의 묶음으로 선택한다.', '인증·호출량·과금·승인 정책을 연결한다.', '게이트웨이가 소비자 요청에 제품 정책을 적용한다.'],
      commonMistake: 'API 프로덕트를 단순한 Swagger 문서 묶음과 같다고 보면 안 됩니다. 문서화뿐 아니라 실제 접근과 사용량 정책을 집행하는 운영 단위입니다.',
      relatedTerms: ['API Gateway', 'API 스코프', 'API 카탈로그', 'Rate Limit']
    }
  },
  {
    name: 'BFF',
    definition: '웹, 모바일, 관리자 화면처럼 서로 다른 프론트엔드 유형마다 전용 백엔드 계층을 두어 내부 API를 조합·가공해 제공하는 아키텍처 패턴. Backend For Frontend의 약자.',
    primaryExample: '모바일 BFF가 사용자, 주문, 배송 API를 한 번에 호출해 작은 화면에 필요한 필드만 하나의 응답으로 반환한다.',
    usageContext: '클라이언트마다 필요한 데이터 모양과 호출 횟수, 인증 방식이 크게 다르거나 내부 도메인 API를 그대로 외부에 노출하고 싶지 않을 때 사용한다.',
    mechanism: '클라이언트가 전용 BFF를 호출하면 BFF가 여러 내부 서비스에 요청하고 결과를 조합·변환한 뒤 해당 클라이언트에 최적화된 응답을 만든다.',
    tags: ['API', 'BFF', '아키텍처', '프론트엔드', '게이트웨이'],
    sourceKey: 'bff-2026-09-06',
    sourceText: '클라이언트 유형별로 내부 API를 조합하고 필요한 API 세트만 노출하는 BFF 메모',
    lesson: {
      memoryHook: '모든 손님에게 같은 큰 주방을 보여주지 않고, 손님 유형별 전용 배식대를 둔다.',
      whyItMatters: '프론트엔드가 여러 내부 API의 복잡성과 변화에 직접 묶이는 것을 줄이고, 각 화면에 필요한 응답 모양과 성능을 독립적으로 최적화할 수 있습니다.',
      logicSteps: ['프론트엔드 유형별 요구 데이터를 정의한다.', '각 유형 앞에 전용 BFF 경계를 둔다.', 'BFF가 내부 도메인 API를 호출·조합한다.', '클라이언트에 맞춘 최소 응답을 반환한다.'],
      commonMistake: 'BFF에 모든 비즈니스 규칙을 몰아넣으면 또 하나의 거대한 백엔드가 됩니다. 핵심 도메인 규칙은 내부 서비스에 두고 BFF는 조합과 표현 변환에 집중하는 편이 좋습니다.',
      relatedTerms: ['API Gateway', '마이크로서비스', 'API 프로덕트', 'Aggregation']
    }
  },
  {
    name: 'API 스코프',
    definition: 'OAuth 2.0 등에서 토큰이 어떤 API 기능을 수행할 수 있는지 표현하는 권한 범위.',
    primaryExample: 'contracts:read 스코프는 계약 조회만 허용하고 contracts:write 스코프는 생성·수정 기능까지 허용한다.',
    usageContext: '클라이언트 앱이나 사용자의 액세스 토큰에 전체 권한 대신 필요한 API 기능만 최소한으로 부여할 때 사용한다.',
    mechanism: '인가 서버가 승인된 scope를 토큰에 담고, 리소스 서버가 요청 엔드포인트에 필요한 scope와 토큰의 scope를 비교해 허용 여부를 결정한다.',
    tags: ['API', 'OAuth 2.0', '인가', '보안', '최소 권한'],
    sourceKey: 'api-scope-2026-09-06',
    sourceText: '공개 읽기 세트와 내부 쓰기 세트처럼 API 기능군을 권한 단위로 묶는 API Scope 메모',
    lesson: {
      memoryHook: '토큰이 열 수 있는 기능의 문 목록.',
      whyItMatters: '토큰이 탈취되거나 클라이언트가 오작동해도 허용된 기능 밖으로 피해가 확대되는 것을 줄입니다.',
      logicSteps: ['API 기능을 의미 있는 권한 단위로 나눈다.', '사용자가 클라이언트에 필요한 scope를 승인한다.', '인가 서버가 scope가 담긴 토큰을 발급한다.', 'API 서버가 요청마다 필요한 scope를 대조한다.'],
      commonMistake: 'scope를 사용자 역할과 완전히 같은 것으로 보면 안 됩니다. 역할은 조직 내 지위를, scope는 특정 토큰에 위임된 API 범위를 표현하는 경우가 많습니다.',
      relatedTerms: ['OAuth 2.0', 'JWT', '인가', 'Role', '최소 권한']
    }
  },
  {
    name: 'Grouped OpenAPI',
    definition: '하나의 서비스가 가진 OpenAPI 명세를 대상, 도메인, 공개 범위 등에 따라 여러 문서 그룹으로 나누어 제공하는 구성 방식.',
    primaryExample: 'Public Spec에는 외부 조회 API만, Internal Spec에는 사내 운영·쓰기 API까지 포함해 각각 다른 Swagger UI로 제공한다.',
    usageContext: '전체 엔드포인트를 한 문서에 노출하지 않고 사용자별 문서 범위를 나누거나 큰 명세를 도메인 단위로 탐색하기 쉽게 만들 때 사용한다.',
    mechanism: '라우트 패턴, 태그, 패키지 또는 명시적 목록으로 엔드포인트를 필터링하고 그룹마다 별도의 OpenAPI JSON과 문서 화면을 생성한다.',
    tags: ['API', 'OpenAPI', 'Swagger', '문서화', '명세'],
    sourceKey: 'grouped-openapi-2026-09-06',
    sourceText: 'OpenAPI 명세를 Public Spec과 Internal Spec으로 분할하는 Swagger Group 메모',
    lesson: {
      memoryHook: '같은 API 지도를 독자별로 필요한 구역만 인쇄한 문서 세트.',
      whyItMatters: '외부 개발자에게 불필요한 내부 엔드포인트를 숨기고, 큰 API 문서를 목적별로 작게 나눠 탐색성을 높일 수 있습니다.',
      logicSteps: ['문서를 볼 대상과 분리 기준을 정한다.', '엔드포인트를 경로·태그·도메인별로 분류한다.', '그룹마다 별도 OpenAPI 명세를 생성한다.', '각 명세를 독립된 문서 URL로 제공한다.'],
      commonMistake: '문서에서 제외했다고 실제 API 접근이 차단되는 것은 아닙니다. 보안은 게이트웨이·인증·인가 정책으로 별도 강제해야 합니다.',
      relatedTerms: ['OpenAPI', 'Swagger UI', 'API 프로덕트', 'API 카탈로그']
    }
  },
  {
    name: 'API 카탈로그',
    definition: '조직의 API를 도메인, 소유팀, 공개 범위, 버전, 상태 같은 메타데이터와 함께 등록해 검색·탐색하게 하는 관리 인벤토리.',
    primaryExample: '개발자가 결제 도메인을 검색해 Public·Partner·Private API 목록, 담당팀, OpenAPI 문서와 사용 신청 경로를 확인한다.',
    usageContext: '여러 팀과 플랫폼에 흩어진 API를 전사적으로 발견하고 중복 개발을 줄이며 소유권과 수명주기를 관리할 때 사용한다.',
    mechanism: '각 API의 명세와 운영 메타데이터를 중앙 레지스트리에 수집하고 분류·검색·품질 검사·사용 신청 기능을 제공한다.',
    tags: ['API', '카탈로그', '거버넌스', '개발자 포털', '메타데이터'],
    sourceKey: 'api-catalog-2026-09-06',
    sourceText: '전사 API를 공개 범위와 도메인에 따라 분류해 탐색하게 하는 API Catalog 메모',
    lesson: {
      memoryHook: 'API 자체를 담는 창고가 아니라, 어떤 API가 어디에 있고 누가 관리하는지 알려주는 도서 목록.',
      whyItMatters: '조직이 커질수록 이미 있는 API를 모르고 다시 만들거나, 담당자를 찾지 못해 변경이 지연됩니다. 카탈로그는 발견 가능성과 책임 소재를 높입니다.',
      logicSteps: ['API 명세와 소유·상태 정보를 수집한다.', '도메인과 공개 범위로 분류한다.', '검색 가능한 중앙 목록에 게시한다.', '소비자는 문서·담당자·신청 경로를 찾아 사용한다.'],
      commonMistake: 'API 카탈로그를 DB 카탈로그와 혼동하면 안 됩니다. 전자는 조직의 API 인벤토리이고 후자는 SQL 계층에서 스키마를 담는 상위 컨테이너입니다.',
      relatedTerms: ['개발자 포털', 'API 프로덕트', 'OpenAPI', 'DB 카탈로그']
    }
  },
  {
    name: '주제영역',
    definition: '대규모 데이터 모델을 회원, 주문, 결제처럼 응집된 업무 주제별로 나눈 논리적 관리 구역. Subject Area라고도 한다.',
    primaryExample: '수천 개 엔터티가 있는 전사 모델에서 결제 관련 테이블만 모은 결제 주제영역 ERD를 별도 뷰로 관리한다.',
    usageContext: 'ERwin, DA#, ER/Studio 같은 모델링 도구에서 거대한 ERD를 업무 단위로 분할해 이해하고 소유권을 나눌 때 사용한다.',
    mechanism: '하나의 엔터티가 하나 이상의 주제영역 뷰에 포함될 수 있으며, 각 뷰는 전체 모델 중 해당 업무에 필요한 엔터티와 관계만 보여준다.',
    tags: ['DB', 'ERD', '데이터 모델링', '주제영역', 'EA'],
    sourceKey: 'subject-area-2026-09-06',
    sourceText: '대규모 ERD를 업무 기능이나 시스템 단위의 하위 뷰로 분할하는 Subject Area 메모',
    lesson: {
      memoryHook: '거대한 전사 지도를 업무별 확대 지도 여러 장으로 나눈 것.',
      whyItMatters: '전체 모델을 한 화면에서 다루면 관계를 읽기 어렵습니다. 주제영역은 관련 엔터티에 집중하면서 전체 모델과의 연결은 유지합니다.',
      logicSteps: ['업무 기능과 책임 경계를 파악한다.', '관련 엔터티와 관계를 묶는다.', '업무별 하위 ERD 뷰를 만든다.', '공통 엔터티와 영역 간 연결을 전체 모델에서 관리한다.'],
      commonMistake: '주제영역이 반드시 별도 물리 데이터베이스를 뜻하는 것은 아닙니다. 주로 하나의 논리 모델을 읽기 좋게 나누는 관리·표현 단위입니다.',
      relatedTerms: ['ERD', '엔터프라이즈 데이터 모델', '서브도메인', '스키마']
    }
  },
  {
    name: '엔터프라이즈 데이터 모델',
    definition: '기업 전체의 핵심 데이터 개념, 관계, 표준 용어와 원칙을 여러 시스템에 걸쳐 통합해 표현한 최상위 데이터 모델. EDM이라고도 한다.',
    primaryExample: 'CRM의 고객, 주문 시스템의 구매자, 정산 시스템의 거래처 개념을 전사 관점에서 연결하고 공통 식별 기준을 정의한다.',
    usageContext: '부서와 시스템마다 다른 데이터 정의를 정렬하고 전사 데이터 아키텍처, 통합, 거버넌스의 기준을 만들 때 사용한다.',
    mechanism: '개별 시스템 모델에서 공통 핵심 엔터티와 관계를 추출하고 표준 용어·식별자·소유권을 정의해 상위 개념 모델로 통합한다.',
    tags: ['DB', 'EDM', 'EA', '데이터 모델링', '거버넌스'],
    sourceKey: 'enterprise-data-model-2026-09-06',
    sourceText: '여러 이기종 DB와 시스템 모델을 통합하는 Enterprise Data Model 메모',
    lesson: {
      memoryHook: '각 시스템의 방 지도가 아니라 회사 전체 건물의 공통 설계도.',
      whyItMatters: '같은 고객이나 계약을 시스템마다 다르게 정의하면 통합과 분석이 어려워집니다. EDM은 전사 공통 언어와 연결 기준을 제공합니다.',
      logicSteps: ['시스템별 핵심 데이터 모델을 수집한다.', '같거나 겹치는 비즈니스 개념을 식별한다.', '전사 표준 정의와 관계를 합의한다.', '개별 시스템 모델을 상위 기준에 매핑한다.'],
      commonMistake: 'EDM을 모든 물리 컬럼을 담은 초대형 ERD로 만들면 유지하기 어렵습니다. 전사적으로 중요한 개념과 관계에 초점을 맞추고 세부 구현은 하위 모델에 둡니다.',
      relatedTerms: ['주제영역', '개념 데이터 모델', 'EA', '데이터 거버넌스']
    }
  },
  {
    name: '바운디드 컨텍스트',
    definition: '특정 도메인 모델과 용어가 하나의 일관된 의미로 적용되는 명시적 경계. Domain-Driven Design의 핵심 전략 패턴.',
    primaryExample: '주문 컨텍스트의 Customer는 주문자이고, 고객지원 컨텍스트의 Customer는 상담 대상이므로 같은 단어라도 서로 다른 모델로 관리한다.',
    usageContext: '복잡한 도메인을 여러 모델과 팀·서비스 경계로 나누고, 같은 용어가 문맥마다 다른 의미를 갖는 충돌을 통제할 때 사용한다.',
    mechanism: '경계 안에서는 하나의 유비쿼터스 언어와 모델을 일관되게 사용하고, 다른 컨텍스트와는 API·이벤트·변환 계층 같은 명시적 계약으로 통신한다.',
    tags: ['DDD', '바운디드 컨텍스트', '도메인 모델', 'MSA', '아키텍처'],
    sourceKey: 'bounded-context-2026-09-06',
    sourceText: 'DDD와 MSA에서 독립된 모델과 DB 경계를 정의하는 Bounded Context 메모',
    lesson: {
      memoryHook: '같은 단어가 같은 뜻으로 통하는 모델의 언어 국경.',
      whyItMatters: '전사에 하나의 거대한 모델을 강요하면 서로 다른 업무 의미가 충돌합니다. 경계를 두면 각 모델은 내부적으로 일관되고 외부 관계는 계약으로 관리할 수 있습니다.',
      logicSteps: ['업무 대화에서 의미가 함께 변하는 개념을 찾는다.', '하나의 언어와 규칙이 유지되는 경계를 정한다.', '경계 안의 모델과 책임을 독립적으로 관리한다.', '다른 컨텍스트와의 번역·통합 계약을 정의한다.'],
      commonMistake: '바운디드 컨텍스트를 마이크로서비스나 DB 하나와 무조건 1:1로 동일시하면 안 됩니다. 구현 경계와 정렬될 수 있지만 본질은 모델과 언어의 일관성 경계입니다.',
      relatedTerms: ['서브도메인', 'DDD', '유비쿼터스 언어', 'Context Map']
    }
  },
  {
    name: '서브도메인',
    definition: '전체 비즈니스 도메인을 문제 영역과 사업 능력 기준으로 나눈 하위 영역. 핵심, 지원, 일반 서브도메인 등으로 분류할 수 있다.',
    primaryExample: '전자상거래 도메인을 상품, 주문, 결제, 배송 같은 서브도메인으로 나누고 각 영역의 문제와 규칙을 분석한다.',
    usageContext: 'DDD에서 비즈니스가 해결해야 할 문제 공간을 분해하고 어디에 차별화 역량과 개발 투자를 집중할지 판단할 때 사용한다.',
    mechanism: '비즈니스 능력과 규칙의 응집도를 기준으로 문제 공간을 나누고, 각 서브도메인을 구현할 하나 이상의 바운디드 컨텍스트를 설계한다.',
    tags: ['DDD', '서브도메인', '도메인 분석', '비즈니스', '아키텍처'],
    sourceKey: 'subdomain-2026-09-06',
    sourceText: 'DDD에서 독립된 DB와 업무 경계를 설명할 때 함께 쓰이는 Subdomain 메모',
    lesson: {
      memoryHook: '서브도메인은 비즈니스 문제의 조각, 바운디드 컨텍스트는 그 문제를 푸는 모델의 경계.',
      whyItMatters: '기술 구조를 먼저 자르지 않고 비즈니스가 실제로 하는 일을 기준으로 시스템 경계를 설계하게 해줍니다.',
      logicSteps: ['전체 사업 도메인의 능력과 목표를 나열한다.', '규칙과 변화 이유가 함께 움직이는 문제를 묶는다.', '핵심·지원·일반 서브도메인으로 성격을 구분한다.', '각 문제를 구현할 바운디드 컨텍스트를 설계한다.'],
      commonMistake: '서브도메인과 바운디드 컨텍스트를 동의어로 쓰기 쉽습니다. 전자는 문제 공간, 후자는 해결 모델의 경계이며 항상 1:1인 것은 아닙니다.',
      relatedTerms: ['바운디드 컨텍스트', 'DDD', '핵심 도메인', '문제 공간']
    }
  },
  {
    name: 'DB 카탈로그',
    definition: 'SQL 표준의 논리 계층에서 여러 스키마와 그 메타데이터를 포함하는 상위 컨테이너. 제품에 따라 Database라는 이름으로 대응된다.',
    primaryExample: '하나의 PostgreSQL database 안에 public, audit 같은 여러 schema를 두거나, SQL 문맥에서 catalog 이름으로 데이터베이스를 지정한다.',
    usageContext: 'Column → Table → Schema → Catalog 계층을 설명하거나 DB 제품 간 객체 이름과 범위를 비교할 때 사용한다.',
    mechanism: '카탈로그는 스키마들을 이름 공간으로 묶고, 시스템 카탈로그는 내부 테이블·컬럼·제약조건·권한 같은 메타데이터를 저장한다.',
    tags: ['DB', 'SQL 표준', '카탈로그', '스키마', '메타데이터'],
    sourceKey: 'db-catalog-2026-09-06',
    sourceText: 'ANSI SQL에서 여러 Schema를 묶는 Catalog 또는 Database 계층 메모',
    lesson: {
      memoryHook: '테이블은 스키마 서랍에, 여러 스키마 서랍은 카탈로그 장에 들어간다.',
      whyItMatters: 'Database, Catalog, Schema라는 말은 제품마다 범위가 달라질 수 있습니다. 표준 계층을 알면 이름 충돌과 권한 범위를 이해하기 쉬워집니다.',
      logicSteps: ['컬럼을 모아 테이블을 만든다.', '관련 테이블을 스키마 이름 공간에 둔다.', '여러 스키마를 카탈로그가 포함한다.', 'DBMS 제품의 실제 용어와 표준 계층을 대응시킨다.'],
      commonMistake: '모든 DBMS가 Catalog와 Database를 똑같이 구현한다고 가정하면 안 됩니다. PostgreSQL, MySQL, SQL Server, Oracle은 이 용어의 실제 경계가 서로 다릅니다.',
      relatedTerms: ['스키마', '테이블', 'DB 클러스터', 'API 카탈로그']
    }
  },
  {
    name: 'DB 클러스터',
    definition: '하나의 DBMS 설치나 서버 프로세스 집합이 함께 관리하는 데이터베이스들의 물리·운영 묶음. 정확한 의미는 DB 제품마다 다르다.',
    primaryExample: 'PostgreSQL의 database cluster는 하나의 데이터 디렉터리와 서버 인스턴스가 관리하는 여러 database의 집합이다.',
    usageContext: 'DB 서버의 저장소, 프로세스, 장애 복구, 고가용성, 여러 데이터베이스의 운영 범위를 설명할 때 사용한다.',
    mechanism: '공통 DB 엔진과 운영 자원이 여러 카탈로그 또는 데이터베이스를 관리하며 시작·중지·백업·복제 같은 작업의 경계를 형성한다.',
    tags: ['DB', '클러스터', 'PostgreSQL', '인프라', '운영'],
    sourceKey: 'db-cluster-2026-09-06',
    sourceText: '여러 독립 데이터베이스를 묶는 PostgreSQL Database Cluster 등 물리 DB 계층 메모',
    lesson: {
      memoryHook: '여러 데이터베이스가 한 운영 지붕 아래 엔진과 자원을 공유하는 묶음.',
      whyItMatters: '백업, 장애, 업그레이드, 자원 경쟁의 범위를 판단하려면 데이터베이스보다 위의 운영 단위를 알아야 합니다.',
      logicSteps: ['DBMS 제품이 정의한 클러스터 경계를 확인한다.', '공유 데이터 디렉터리와 프로세스를 파악한다.', '그 안에 포함된 데이터베이스를 구분한다.', '백업·복제·장애 범위를 클러스터 기준으로 설계한다.'],
      commonMistake: 'DB 클러스터가 언제나 여러 서버의 고가용성 묶음을 뜻하는 것은 아닙니다. PostgreSQL에서는 한 서버 인스턴스가 관리하는 데이터 디렉터리 전체를 뜻하기도 합니다.',
      relatedTerms: ['DBMS 인스턴스', 'DB 카탈로그', '고가용성', '복제']
    }
  },
  {
    name: 'DBMS 인스턴스',
    definition: '메모리, 백그라운드 프로세스, 설정 등 실행 중인 DBMS 엔진의 한 실행 단위.',
    primaryExample: 'Oracle에서는 인스턴스의 메모리와 프로세스가 데이터베이스 파일을 열어 서비스를 제공하며, PostgreSQL에서는 한 서버 프로세스 집합이 하나의 클러스터를 관리한다.',
    usageContext: 'DB 서버 기동·중지, 메모리 설정, 연결, 장애 범위처럼 실행 중인 엔진을 설명할 때 사용한다.',
    mechanism: 'DBMS 실행 파일이 설정을 읽고 메모리 영역과 작업 프로세스를 시작한 뒤 저장 파일에 연결해 클라이언트 요청을 처리한다.',
    tags: ['DB', 'DBMS', '인스턴스', '프로세스', '인프라'],
    sourceKey: 'dbms-instance-2026-09-06',
    sourceText: '하나의 DB 소프트웨어 엔진 프로세스가 관리하는 실행 단위인 DBMS Instance 메모',
    lesson: {
      memoryHook: '데이터베이스가 저장된 자료라면, 인스턴스는 그 자료를 열어 일하는 실행 중 엔진.',
      whyItMatters: '저장 데이터와 실행 프로세스를 구분하면 재시작, 장애, 연결, 메모리 문제를 더 정확히 이해할 수 있습니다.',
      logicSteps: ['DBMS 프로세스를 시작한다.', '설정과 공유 메모리를 초기화한다.', '데이터 파일이나 클러스터를 연다.', '클라이언트 연결과 SQL 실행을 처리한다.'],
      commonMistake: 'Database와 Instance를 항상 같은 것으로 보면 안 됩니다. 제품에 따라 하나의 인스턴스가 여러 DB를 관리하거나 여러 인스턴스가 하나의 DB에 접근할 수 있습니다.',
      relatedTerms: ['DB 클러스터', 'Database', '프로세스', '데이터 파일']
    }
  },
  {
    name: '연합 데이터베이스',
    definition: '서로 다른 위치와 제품의 독립 데이터베이스를 연합 계층으로 연결해 사용자가 하나의 논리적 시스템처럼 조회하도록 만든 구조. Federated Database라고도 한다.',
    primaryExample: 'Oracle의 고객 데이터와 PostgreSQL의 주문 데이터, MySQL의 상품 데이터를 가상화 계층에서 조인해 하나의 분석 결과로 제공한다.',
    usageContext: '기존 DB를 물리적으로 한곳에 모두 복사하지 않고 이기종 데이터 원본을 통합 조회해야 할 때 사용한다.',
    mechanism: '연합 계층이 공통 쿼리를 각 원본 DB의 방언과 기능에 맞게 분해해 전송하고, 원격 결과를 수집·변환·조합해 반환한다.',
    tags: ['DB', '연합 데이터베이스', '데이터 가상화', '분산 시스템', '통합'],
    sourceKey: 'federated-database-2026-09-06',
    sourceText: 'Oracle, MySQL, PostgreSQL 같은 이기종 DB를 단일 시스템처럼 조회하는 Federated Database 메모',
    lesson: {
      memoryHook: '각자 사는 DB를 이사시키지 않고, 통역사가 한 질문을 나눠 묻고 답을 합친다.',
      whyItMatters: '기존 시스템의 자율성과 저장 위치를 유지하면서 조직 전체 데이터를 함께 조회할 수 있습니다.',
      logicSteps: ['사용자가 통합 계층에 하나의 쿼리를 보낸다.', '쿼리를 원본 DB별 하위 작업으로 분해한다.', '각 DB에서 가능한 연산을 실행한다.', '결과를 이동·변환·조합해 하나로 반환한다.'],
      commonMistake: '논리적으로 하나처럼 보인다고 성능과 트랜잭션도 단일 DB와 같지는 않습니다. 네트워크 지연, 원본 장애, 쿼리 이동 비용, 제품별 기능 차이가 존재합니다.',
      relatedTerms: ['데이터 가상화', '분산 쿼리', 'MDBS', 'ETL']
    }
  },
  {
    name: 'MDBS',
    definition: '자율적으로 운영되는 여러 데이터베이스를 연결해 하나의 분산 환경에서 접근·조정하는 멀티 데이터베이스 시스템. Multi-Database System의 약자.',
    primaryExample: '각 부서 DB가 자체 스키마와 운영 권한을 유지하면서 중앙 계층이 여러 DB에 걸친 조회와 작업 흐름을 조정한다.',
    usageContext: '독립 DB의 자율성을 유지해야 하지만 여러 시스템을 가로지르는 데이터 접근이나 업무 처리가 필요한 환경에서 사용한다.',
    mechanism: '전역 계층이 각 로컬 DB의 스키마와 기능을 매핑하고 요청을 분배하며, 필요하면 여러 DB 사이의 결과 통합과 트랜잭션 조정을 수행한다.',
    tags: ['DB', 'MDBS', '분산 시스템', '통합', '트랜잭션'],
    sourceKey: 'mdbs-2026-09-06',
    sourceText: '자율성을 유지하는 여러 독립 DB를 하나의 분산 시스템으로 연계하는 MDBS 메모',
    lesson: {
      memoryHook: '독립 정부를 유지하는 여러 DB가 공통 연합 규칙으로 함께 일하는 시스템.',
      whyItMatters: '하나의 중앙 DB로 통합하기 어려운 조직에서도 시스템 간 업무와 데이터 접근을 연결할 수 있습니다.',
      logicSteps: ['독립된 로컬 DB와 자율성 조건을 파악한다.', '전역 스키마와 로컬 스키마의 대응을 정의한다.', '요청을 관련 DB들에 분배한다.', '결과와 오류, 필요 시 분산 트랜잭션을 조정한다.'],
      commonMistake: 'MDBS와 연합 데이터베이스의 경계는 문헌마다 겹칩니다. 일반적으로 MDBS는 독립 DB들의 자율성과 분산 제어를 강조하고, 연합 DB는 통합된 논리적 조회 관점을 강조합니다.',
      relatedTerms: ['연합 데이터베이스', '분산 데이터베이스', '전역 스키마', '2단계 커밋']
    }
  }
];
