# 작업 완료 시 체크리스트

## 코드 변경 후 필수 실행 단계

### 1. 코드 품질 검사
```bash
# SCSS/CSS 린트 확인
npm run lint:css

# 포맷팅 확인
npm run lint:formatting

# 전체 린트 실행
npm run lint
```

### 2. 포맷팅 적용
```bash
# 자동 포맷팅 (필요시)
npm run format
```

### 3. 빌드 테스트
```bash
# Jekyll 빌드 확인
bundle exec jekyll build

# 로컬 서버로 확인 (선택사항)
bundle exec jekyll serve
```

### 4. Git 작업
```bash
# 변경사항 확인
git status
git diff

# 스테이징
git add .

# 커밋
git commit -m "적절한 커밋 메시지"

# 푸시 (자동 배포 트리거)
git push origin main
```

## 문서 작성 시 확인사항

### Front Matter 확인
- [ ] `layout` 지정
- [ ] `title` 명시
- [ ] `nav_order` 설정 (네비게이션 순서)
- [ ] `has_children` 또는 `parent` 설정 (필요시)
- [ ] `permalink` 설정 (필요시)

### 콘텐츠 확인
- [ ] 마크다운 문법 올바름
- [ ] 이미지 경로 확인
- [ ] 링크 작동 확인
- [ ] 코드 블록 언어 지정

### 로컬 테스트
- [ ] `bundle exec jekyll serve`로 로컬 확인
- [ ] 네비게이션 구조 확인
- [ ] 검색 기능 작동 확인
- [ ] 반응형 디자인 확인

## 배포 후 확인사항
- [ ] GitHub Pages 빌드 성공 확인
- [ ] 라이브 사이트에서 변경사항 확인 (https://DonsNote.github.io)
- [ ] 모바일에서도 정상 작동 확인

## 문제 발생시 대응
1. GitHub Actions 로그 확인 (`.github/workflows/deploy.yml`)
2. 로컬 빌드 에러 메시지 확인
3. Jekyll 문서 참조
4. Just the Docs 테마 문서 참조