# 스타일 및 규칙

## 마크다운 규칙

### 파일 헤더 (Front Matter)
모든 마크다운 문서는 YAML front matter로 시작:
```yaml
---
layout: default
title: 페이지 제목
nav_order: 순서번호
has_children: true/false  # 하위 페이지가 있는 경우
parent: 부모 페이지명     # 하위 페이지인 경우
permalink: /custom/path   # 커스텀 URL
---
```

### 네비게이션 구조
- `nav_order`: 숫자로 정렬 순서 지정
- `has_children: true`: 하위 페이지가 있는 경우
- `parent`: 하위 페이지에서 부모 페이지 지정

### 콘텐츠 작성 규칙
- 제목은 `# 제목` 형식 사용
- 코드 블록: 언어 지정 필수 ````language`
- 이미지: `![alt text](path)` 형식
- 링크: `[텍스트](URL)` 형식

## 코딩 스타일

### SCSS/CSS
- **린터**: stylelint 사용
- **규칙**: stylelint-config-standard-scss 기준
- **들여쓰기**: 2 스페이스
- **세미콜론**: 사용하지 않음

### JavaScript
- **포맷터**: Prettier 사용
- **들여쓰기**: 2 스페이스
- **따옴표**: 큰따옴표 사용
- **세미콜론**: 사용하지 않음
- **라인 엔딩**: LF

### 파일명 규칙
- 마크다운: `PascalCase.md` (예: `Swift.md`, `Cub3D.md`)
- 설정 파일: 소문자 + 하이픈 (예: `_config.yml`)
- 이미지: 소문자 + 하이픈 또는 PascalCase (예: `Donsmemo.png`)

## Just the Docs 테마 특화 기능

### Callouts 사용법
```markdown
{: .highlight }
중요한 내용

{: .note }
노트 내용

{: .warning }
경고 내용
```

### 목차 자동 생성
```markdown
## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
```

### 버튼
```markdown
[버튼 텍스트](링크){: .btn .btn-primary }
```

### 코드 복사 버튼
자동으로 활성화됨 (`enable_copy_code_button: true`)

## 이미지 관리
- 이미지는 `assets/images/` 폴더에 저장
- 상대 경로 사용: `![](../../assets/images/image.png)`
- 로고: `assets/images/Donsmemo.png` 사용