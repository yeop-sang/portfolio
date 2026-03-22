# Vercel 배포 가이드 / Vercel Deployment Guide

## ✅ 배포 준비 완료 / Ready for Deployment

이 프로젝트는 Vercel에 바로 배포 가능합니다.
This project is ready to deploy to Vercel.

---

## 📋 배포 전 체크리스트 / Pre-Deployment Checklist

### ✅ 완료된 항목 / Completed Items

- [x] **빌드 스크립트** / Build script: `npm run build`
- [x] **React Router** 설정 완료 (SPA with client-side routing)
- [x] **vercel.json** 설정 (모든 라우트를 index.html로 리디렉션)
- [x] **404 페이지** 구현 (한영 지원)
- [x] **언어 전환** 시스템 (KR/EN toggle with React Context)
- [x] **모든 페이지** 구현:
  - Home (풀뷰포트 히어로 + 애니메이션 티커)
  - Work (2열 프로젝트 그리드)
  - About (인용구, 기술 스택, 타임라인)
  - Contact (소셜 링크)
  - Project Detail (동적 라우팅 `/work/:id`)
  - 404 Not Found
- [x] **애니메이션** 구현:
  - 페이지 전환 (Motion/React)
  - 스크롤 트리거 (Intersection Observer)
  - 호버 상태
  - 스티키 네비게이션 (블러 효과)
- [x] **반응형 디자인** (모바일/태블릿/데스크톱)
- [x] **커스텀 폰트** 설정:
  - Space Grotesk (헤딩)
  - Inter (본문)
  - JetBrains Mono (코드/라벨)
  - Noto Sans KR (한글 지원)

---

## 🚀 Vercel에 배포하기 / Deploy to Vercel

### 방법 1: Vercel CLI (추천)

```bash
# Vercel CLI 설치 (아직 설치하지 않은 경우)
npm i -g vercel

# 프로젝트 루트에서 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 방법 2: Vercel Dashboard

1. **GitHub 저장소에 푸시**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Vercel Dashboard에서 Import**
   - [vercel.com](https://vercel.com)에 로그인
   - "New Project" 클릭
   - GitHub 저장소 선택
   - Import 클릭

3. **빌드 설정 확인**
   - Framework Preset: `Vite`
   - Build Command: `npm run build` (자동 감지됨)
   - Output Directory: `dist` (자동 감지됨)
   - Install Command: `npm install`

4. **Deploy 클릭**

---

## ⚙️ 빌드 설정 / Build Configuration

### Vercel 자동 감지 설정 / Auto-detected Settings

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 환경 변수 / Environment Variables

현재 이 프로젝트는 환경 변수가 필요하지 않습니다.
No environment variables are required for this project.

---

## 🎨 프로젝트 구조 / Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/        # 모든 React 컴포넌트
│   │   │   ├── Home.tsx
│   │   │   ├── Work.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Root.tsx
│   │   ├── context/           # React Context
│   │   │   └── LanguageContext.tsx
│   │   ├── App.tsx            # 메인 엔트리포인트
│   │   └── routes.ts          # React Router 설정
│   └── styles/                # CSS 파일
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── package.json               # 의존성 관리
├── vite.config.ts            # Vite 설정
└── vercel.json               # Vercel 라우팅 설정 ⭐
```

---

## 🔧 주요 기술 스택 / Tech Stack

- **Framework**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **Animation**: Motion (Framer Motion) 12.23.24
- **Build Tool**: Vite 6.3.5
- **Icons**: Lucide React 0.487.0
- **Deployment**: Vercel

---

## 📱 라우팅 구조 / Routing Structure

```
/                   → Home
/work              → Work (프로젝트 그리드)
/work/:id          → ProjectDetail (동적)
/about             → About
/contact           → Contact
/*                 → NotFound (404)
```

---

## 🌐 도메인 설정 / Custom Domain

배포 후 Vercel Dashboard에서 커스텀 도메인을 설정할 수 있습니다:

1. Project Settings → Domains
2. 도메인 입력 (예: `yourportfolio.com`)
3. DNS 설정 안내에 따라 설정

---

## ✨ 주요 기능 / Key Features

1. **다크 미니멀 디자인**: #0F0F0F 배경 + #C8FF00 악센트
2. **한영 전환**: 네비게이션 우측 상단 KR/EN 토글
3. **부드러운 애니메이션**: 페이지 전환, 스크롤 트리거, 호버 효과
4. **반응형 디자인**: 모든 디바이스 지원
5. **동적 프로젝트 상세 페이지**: `/work/:id` 라우팅
6. **접근성**: 시맨틱 HTML, 키보드 네비게이션

---

## 🐛 문제 해결 / Troubleshooting

### 404 에러가 발생하는 경우

- `vercel.json` 파일이 프로젝트 루트에 있는지 확인
- Vercel 설정에서 "Output Directory"가 `dist`인지 확인

### 폰트가 로드되지 않는 경우

- `/src/styles/fonts.css`에서 Google Fonts 임포트 확인
- 네트워크 탭에서 폰트 로딩 상태 확인

### 빌드 실패

```bash
# 로컬에서 빌드 테스트
npm run build

# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 배포 후 확인사항 / Post-Deployment Checklist

- [ ] 모든 페이지 정상 작동 확인
- [ ] 언어 전환 (KR/EN) 테스트
- [ ] 네비게이션 링크 동작 확인
- [ ] 프로젝트 상세 페이지 동적 라우팅 확인
- [ ] 404 페이지 테스트 (존재하지 않는 URL 접속)
- [ ] 모바일 반응형 확인
- [ ] 애니메이션 성능 확인
- [ ] 폰트 로딩 확인

---

## 🎉 배포 완료!

축하합니다! 포트폴리오가 성공적으로 배포되었습니다.

Vercel은 자동으로:
- ✅ HTTPS 인증서 발급
- ✅ 글로벌 CDN 배포
- ✅ 자동 프리뷰 배포 (PR 생성 시)
- ✅ 성능 최적화

---

**Made with ❤️ using React + Vite + Tailwind CSS**
