# 권장 명령어

## 개발 명령어

### Jekyll 관련
```bash
# 로컬 서버 실행 (개발용)
bundle exec jekyll serve
# 또는 포트 지정
bundle exec jekyll serve --port 4000

# 사이트 빌드
bundle exec jekyll build

# 의존성 설치
bundle install
```

### npm 관련 (개발 도구)
```bash
# 의존성 설치
npm install

# 린트 실행
npm run lint
# 또는 각각
npm run lint:css      # SCSS 린트
npm run lint:formatting  # Prettier 린트

# 포맷팅
npm run format

# 테스트 (린트와 동일)
npm run test
```

### Docker 관련
```bash
# Docker Compose로 개발 환경 실행
docker-compose up
```

### Git 관련
```bash
# 상태 확인
git status

# 변경사항 확인
git diff

# 스테이징
git add .

# 커밋
git commit -m "메시지"

# 푸시 (GitHub Pages 자동 배포 트리거)
git push origin main
```

## 완료 후 실행할 명령어
1. `npm run lint` - 코드 스타일 확인
2. `npm run format` - 코드 포맷팅
3. `bundle exec jekyll build` - 빌드 테스트
4. Git 커밋 및 푸시로 자동 배포

## 유틸 명령어 (macOS)
- `ls`: 파일 목록
- `find`: 파일 검색
- `grep` 또는 `rg`: 텍스트 검색
- `cd`: 디렉토리 이동
- `pwd`: 현재 위치 확인