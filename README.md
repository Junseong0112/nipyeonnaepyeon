# 니편내편

개인 프로젝트로 찬반투표 형식의 토론 웹 서비스를 기획함  
밸런스 게임형식의 주제로 선정 `짜장면 vs 짬뽕`  
타 사용자들은 투표를 실시간으로 시작, 투표한 사용자들은 댓글로 편을 나눠 코멘트를 남길 수 있음

## 기능명세서

### 1. 사용자 인증

- 기본 회원가입 : 이메일, 비밀번호를 이용한 회원가입
- OAuth 로그인 : 소셜 미디어 계정을 이용한 로그인
- 로그인 / 로그아웃 기능

### 2. 메인 페이지

- 투표리스트 표시 : 최신순 또는 인기순으로 정렬
- 카테고리 필터 : 음식, 영화, 스포츠, 연애, 기타 등의 카테고리별 필터링
- 새로운 투표 생성 버튼: 로그인한 사용자만 접근 가능

### 3. 투표 생성

- 제목입력
- 양측 선택지 입력
- 투표 기간 설정
- 카테고리 선택
- 이미지 업로드 (선택사항)
- 설명 텍스트 입력 (선택사항)

### 4. 투표 상세 페이지

- 투표 정보 표시 : 제목, 선택지, 투표기간, 카테고리, 이미지, 설명
- 실시간 투표 결과 표시
- 투표 참여 기능
- 댓글 작성 및 표시 : 각 선택지별로 구분하여 표시

### 5. 사용자 프로필 페이지

- 기본 정보 표시: 사용자 이름, 프로필 사진
- 투표 히스토리 : 참여한 투표 목록
- 생성한 투표 목록

### 6. 검색 기능

- 키워드 기반 투표 검색
- 카테고리별 검색

## 폴더구조

```bash
├── src/
│   ├── assets/                # 이미지, 폰트, 글로벌 스타일
│   │   ├── images/            # 이미지 파일들
│   │   ├── fonts/             # 웹 폰트 파일들
│   │   └── styles/            # 전역 스타일 파일들
│   │
│   ├── components/            # 재사용 가능한 UI 컴포넌트
│   │   ├── common/            # 일반적인 재사용 컴포넌트 (버튼, 입력 필드 등)
│   │   ├── layout/            # 레이아웃 컴포넌트 (헤더, 푸터 등)
│   │   └── specific/          # 특정 페이지에 종속된 컴포넌트
│   │
│   ├── pages/                 # 페이지 컴포넌트
│   │   ├── HomePage           # 메인 페이지
│   │   ├── CreateVotePage     # 투표 생성 페이지
│   │   ├── VoteDetailPage     # 투표 상세 페이지
│   │   └── ProfilePage        # 사용자 프로필 페이지
│   │
│   ├── router/                # 라우팅 설정
│   │   └── AppRouter          # 리액트 라우터 설정
│   │
│   ├── services/              # API 호출 등
│   │   ├── api                # API 호출 관련 함수들
│   │   └── auth               # 인증 관련 로직
```
