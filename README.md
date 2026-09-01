# BEND Lab 홈페이지

조선대학교 약학대학 BEND Lab (Barrier Engineering & Nanomedicine Development)

정적 사이트라 서버가 필요 없습니다. GitHub Pages에 그대로 올리면 됩니다.

---

## 1. GitHub Pages에 올리기

1. github.com 에서 계정을 만듭니다.
2. 우측 상단 `+` → **New repository**
   - Repository name: `lab-website`
   - **Public** 선택
   - Create repository
3. 다음 화면에서 **uploading an existing file** 클릭
4. 이 폴더 안의 파일을 **폴더 구조 그대로** 끌어다 놓습니다.
   (`index.html`, `assets` 폴더 등. 압축 파일 말고 안의 내용물을 올리세요)
5. **Commit changes** 클릭
6. 저장소 상단 **Settings** → 왼쪽 **Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)` → **Save**
7. 1~2분 뒤 아래 주소로 접속됩니다.

```
https://<깃허브아이디>.github.io/lab-website/
```

주소를 `bend-csu.github.io` 처럼 짧게 쓰고 싶으면, 저장소 이름을
`<깃허브아이디>.github.io` 로 만들면 됩니다.

---

## 2. 내용 고치기

### 논문, 특허, 소식, 구성원

전부 **`assets/js/data.js`** 한 파일 안에 있습니다. HTML은 건드릴 필요 없습니다.

새 논문은 `PUBLICATIONS` 배열 **맨 위에** 한 덩어리 추가하세요.

```js
{
  year: 2026, type: "article", role: "corresponding",
  authors: "저자를 콤마로 나열, Han Sol Lee, 나머지 저자",
  title: "논문 제목",
  journal: "저널명", impact: "12.3", doi: "https://doi.org/..."
},
```

- `type` — `"article"` 또는 `"review"`
- `role` — `"first"`, `"cofirst"`, `"corresponding"`, 또는 `""` (표시 안 함)
- `doi` — 비워두면 제목에 링크가 안 걸립니다
- 저자 목록에 `Han Sol Lee` 라고 쓰면 자동으로 굵게 표시됩니다

구성원은 `MEMBERS` 배열의 주석을 풀고 채우면 됩니다. 비워두면
"구성원을 모집하고 있습니다" 문구가 대신 나옵니다.

### 사진

`assets/img/` 폴더에 이미 들어가 있습니다. 새 구성원이 들어오면
사진을 정사각형(1:1)으로 잘라서 이 폴더에 넣고, `data.js` 의 `photo` 값에 파일명을 적으면 됩니다.

- `pi.jpg` — 교수 사진 (세로 3:4, Professor 페이지)
- `pi-square.jpg` — 교수 사진 (정사각, Members 페이지)
- `lab-desk.jpg`, `lab-bench.jpg` — 학생실, 실험실 (Join us 페이지)

### 연구 주제, 교수 소개

`research.html`, `professor.html` 의 본문 글을 직접 고치시면 됩니다.

### 색과 서체

`assets/css/style.css` 맨 위 `:root` 안에 있습니다.

```css
--membrane: #0e7c8b;   /* 청록: 칩, 평가 플랫폼 */
--signal:   #b4237b;   /* 마젠타: 전달체, 나노의약 */
```

이 두 색이 사이트 전체에서 연구의 두 축을 구분하는 역할을 합니다.
바꾸실 때 이 규칙만 지키면 나머지는 알아서 따라갑니다.

---

## 3. 아직 채워야 할 곳

- [ ] 연구실 전화번호와 호실 — 모든 페이지 footer 의 주소 부분
- [ ] 학생별 연구 주제 한 줄 — `data.js` 의 `focus` 값 (지금은 비어 있음)
- [ ] 논문 DOI 링크
- [ ] 연구 주제별 대표 이미지 (있으면 더 좋습니다)

### 학생이 나가고 들어올 때

`data.js` 의 `MEMBERS` 에서 `track` 값이 화면 구분을 결정합니다.

- `track: "full"` → Full-time 연구생
- `track: "2026"` → 2026년 연구생

졸업하면 `MEMBERS` 에서 지우고 `ALUMNI` 에 옮기면 됩니다.
`ALUMNI` 가 비어 있으면 졸업생 섹션은 자동으로 숨겨집니다.

---

## 파일 구조

```
lab-website/
├── index.html          홈
├── professor.html      교수 소개
├── research.html       연구 주제
├── publications.html   논문·특허
├── members.html        구성원
├── join.html           모집 안내
├── news.html           소식
├── .nojekyll           (GitHub Pages 설정, 지우지 마세요)
└── assets/
    ├── css/style.css   디자인
    ├── js/data.js      ← 내용은 여기만 고치면 됩니다
    ├── js/site.js      동작
    └── img/            사진
```

서체는 Google Fonts에서 불러옵니다 (Inter Tight, Newsreader, Noto Sans/Serif KR).
인터넷 연결이 있는 환경에서 열어야 의도한 모습으로 보입니다.
