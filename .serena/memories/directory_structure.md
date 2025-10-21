# 디렉토리 구조

## 주요 디렉토리

### `docs/` - 콘텐츠 디렉토리
- **Algorithms/**: 알고리즘 관련 문서
  - `ITA/`: Introduction to Algorithms 관련
- **Language/**: 프로그래밍 언어 관련 문서
  - `Cpp/`: C++ 관련
  - `Swift/`: Swift 관련 (SwiftUI, 기본 문법, 함수, 데이터타입 등)
  - `C/`: C 언어 관련
- **Bootcamp/**: 부트캠프 경험 정리
  - `Apple/`: Apple Developer Academy 관련
  - `42GS/`: 42 Gyeongsan 관련 (다양한 과제들)
- **utilities/**: 유틸리티 관련 문서
- **ui-components/**: UI 컴포넌트 예제

### `_includes/` - Jekyll 인클루드 파일들
- 헤더, 푸터, 네비게이션 등 공통 컴포넌트
- CSS, JavaScript 파일들
- Mermaid 설정
- 검색 관련 파일들

### `_layouts/` - Jekyll 레이아웃 파일들
- `default.html`: 기본 레이아웃
- `page.html`: 페이지 레이아웃
- `post.html`: 포스트 레이아웃

### `_sass/` - Sass 스타일시트
- 테마의 모든 스타일 정의
- 컬러 스킴, 유틸리티, 커스텀 스타일 등

### `assets/` - 정적 자산
- `css/`: 컴파일된 CSS 파일들
- `images/`: 이미지 파일들 (Donsmemo.png 등)
- `js/`: JavaScript 파일들

### `.github/` - GitHub 설정
- `workflows/`: GitHub Actions 워크플로우
  - `deploy.yml`: Pages 배포용
  - `ci.yml`: CI/CD 파이프라인

## 설정 파일
- `_config.yml`: Jekyll 주요 설정
- `Gemfile`: Ruby 의존성
- `package.json`: Node.js 의존성 (개발 도구)
- `just-the-docs.gemspec`: 테마 설정