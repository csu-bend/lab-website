/* ==========================================================================
   BEND Lab — site content
   --------------------------------------------------------------------------
   이 파일만 고치면 사이트 내용이 바뀝니다. HTML은 건드릴 필요 없습니다.
   새 논문은 PUBLICATIONS 배열 맨 위에 한 줄 추가하세요.

   type    : "article" | "review"
   role    : "first" | "cofirst" | "corresponding" | ""   (빈 문자열이면 표시 안 됨)
   doi     : DOI 링크 (없으면 "" 로 두세요)
   ========================================================================== */

const PUBLICATIONS = [
  {
    year: 2025, type: "review", role: "cofirst",
    authors: "Han Sol Lee, Suwon Choo, Mansingh Chaudhary, Ju Hee Park, Juhwan Chang, Yejun Byun, KiTaek Kim, Jae-Young Lee",
    title: "Benchmarking protein nanoparticles for drug delivery and clinical translation",
    journal: "Small Methods", impact: "9.1", doi: ""
  },
  {
    year: 2025, type: "article", role: "cofirst",
    authors: "Hyelim Kim, Han Sol Lee, June Hong Ahn, Tae-Wan Kwon, So-Yeol Yoo, Donghyuk Seo, Sang Kyum Kim, Hee Ho Park, Seung-Woo Cho, Wonhwa Lee, Jae-Young Lee, Hong Nam Kim",
    title: "Targeted nanocomplex delivery for protecting vascular integrity and enhancing anticancer effects in hepatocellular carcinoma",
    journal: "Small Science", impact: "8.3", doi: ""
  },
  {
    year: 2025, type: "article", role: "",
    authors: "Jooin Bang, Jiyoung Yeo, Su Ji Lee, Han Sol Lee, Jinyoung Kim, Sohyeon Jeong, Eeseul Kang, Hoon Suk Rho, YongTae Kim, Jun-Ook Park",
    title: "A 3D vascularized tumor spheroid microfluidic platform for head and neck cancer research: new insights",
    journal: "Biomedical Microdevices", impact: "3.3", doi: ""
  },
  {
    year: 2025, type: "article", role: "",
    authors: "Sang Min Lee, So-Yeol Yoo, Taejung Kim, Nahyun Kim, JungHun Kang, Ka-Young Lim, Minkyung Kim, Suwon Choo, Han Sol Lee, Hyelim Kim, Nae-Won Kang, Mansingh Chaudhary, Khadka Bikram, Wonhwa Lee, Cheong-Weon Cho, Dae-Duk Kim, Ki-Taek Kim, Jae-Young Lee",
    title: "Radiopaque hydrogel-in-liposomes towards theranostic applications for malignant tumors",
    journal: "Biomedicine & Pharmacotherapy", impact: "6.9", doi: ""
  },
  {
    year: 2023, type: "article", role: "first",
    authors: "Han Sol Lee, So-Yeol Yoo, Sang Min Lee, Nae-Won Kang, Sang Kyum Kim, Gyu Yong Song, Dae-Duk Kim, Jae-Young Lee",
    title: "Hypoxia-alleviating hemoglobin nanoclusters for sensitizing chemo-photodynamic therapy of cervical cancer",
    journal: "Chemical Engineering Journal", impact: "16.7", doi: ""
  },
  {
    year: 2022, type: "article", role: "",
    authors: "So-Yeol Yoo, Yong-Hyeon Mun, Nae-Won Kang, Jang Mo Koo, Dong Hwan Lee, Ji Hoon Yoo, Sang Min Lee, Seokjin Koh, Jong Chan Park, Taejung Kim, Eun Kyung Shin, Han Sol Lee, Jaehoon Sim, Keon Wook Kang, Sang Kyum Kim, Cheong-Weon Cho, Myeong Gyu Kim, Dae-Duk Kim, Jae-Young Lee",
    title: "Enhancement of the therapeutic efficacy of the MAP regimen using thiamine pyrophosphate-decorated albumin nanoclusters in osteosarcoma treatment",
    journal: "Bioengineering & Translational Medicine", impact: "10.7", doi: ""
  },
  {
    year: 2021, type: "article", role: "cofirst",
    authors: "Hyelim Kim, Han Sol Lee, June Hong Ahn, Kyung Soo Hong, Jong Geol Jang, Jiseon An, Yong-Hyeon Mun, So-Yeol Yoo, Yoon Jung Choi, Mi-Young Yun, Gyu Yong Song, Jinmyoung Joo, Dong Hee Na, Hong Nam Kim, Hee Ho Park, Jae-Young Lee, Wonhwa Lee",
    title: "Lung-selective 25-hydroxycholesterol nanotherapeutics as a suppressor of COVID-19-associated cytokine storm",
    journal: "Nano Today", impact: "20.7", doi: ""
  },
  {
    year: 2021, type: "article", role: "cofirst",
    authors: "Hee Ho Park, Hyelim Kim, Han Sol Lee, Eun U. Seo, Ji-Eun Kim, Jee-Hyun Lee, Yong-Hyeon Mun, So-Yeol Yoo, Jiseon An, Mi-Young Yun, Nae-Won Kang, Dae-Duk Kim, Dong Hee Na, Kyung Soo Hong, Jong Geol Jang, June Hong Ahn, Jong-Sup Bae, Gyu Yong Song, Jae-Young Lee, Hong Nam Kim, Wonhwa Lee",
    title: "PEGylated nanoparticle albumin-bound steroidal ginsenoside derivatives ameliorate SARS-CoV-2-mediated hyper-inflammatory responses",
    journal: "Biomaterials", impact: "15.9", doi: ""
  },
  {
    year: 2021, type: "article", role: "first",
    authors: "Han Sol Lee, Nae-Won Kang, Hyelim Kim, Dong Hyun Kim, Jung-woo Chae, Wonhwa Lee, Gyu Yong Song, Cheong-Weon Cho, Dae-Duk Kim, Jae-Young Lee",
    title: "Chondroitin sulfate-hybridized zein nanoparticles for tumor-targeted delivery of docetaxel",
    journal: "Carbohydrate Polymers", impact: "10.7", doi: ""
  },
  {
    year: 2021, type: "review", role: "",
    authors: "Jae-Young Lee, Yae-Seul Lee, Dong Hyun Kim, Han Sol Lee, Bo Ram Yang, Myeong Gyu Kim",
    title: "The use of social media in detecting drug safety-related new black box warnings, labeling changes, or withdrawals: scoping review",
    journal: "JMIR Public Health and Surveillance", impact: "10.9", doi: ""
  },
  {
    year: 2020, type: "article", role: "cofirst",
    authors: "Ha Gyeong Kim, Han Sol Lee, Jang Su Jeon, Young Jae Choi, Yeon Jung Choi, So-Yeol Yoo, Eun-yeong Kim, Kiho Lee, InWha Park, MinKyun Na, Han-Jin Park, Seung-Woo Cho, Jong-Hoon Kim, Jae-Young Lee, Sang Kyum Kim",
    title: "Quasi-irreversible inhibition of CYP2D6 by berberine",
    journal: "Pharmaceutics", impact: "6.5", doi: ""
  },
  {
    year: 2020, type: "article", role: "",
    authors: "Min-Hwan Kim, Dong Hyun Kim, Duy-Thuc Nguyen, Han Sol Lee, Nae-Won Kang, Min-Jun Baek, Jiseon An, So-Yeol Yoo, Yong-Hyeon Mun, Wonhwa Lee, Ki-Taek Kim, Cheong-Weon Cho, Jae-Young Lee, Dae-Duk Kim",
    title: "Preparation and evaluation of Eudragit L100-PEG proliponiosomes for enhanced oral delivery of celecoxib",
    journal: "Pharmaceutics", impact: "6.5", doi: ""
  },
  {
    year: 2020, type: "review", role: "cofirst",
    authors: "Dong Hyun Kim, Han Sol Lee, Yong-Hyeon Mun, SeokJin Koh, Joon-Sun Park, Sang Min Lee, Nae-Won Kang, Mee Yeon Lee, Cheong-Weon Cho, Dae-Duk Kim, Jae-Young Lee",
    title: "An overview of chondrosarcoma with a focus on nanoscale therapeutics",
    journal: "Journal of Pharmaceutical Investigation", impact: "5.8", doi: ""
  },
  {
    year: 2020, type: "review", role: "",
    authors: "Myeong Gyu Kim, Inkyou Yang, Han Sol Lee, Jae-Young Lee, Kyungim Kim",
    title: "Lipid-modifying effects of krill oil vs fish oil: a network meta-analysis",
    journal: "Nutrition Reviews", impact: "7.1", doi: ""
  },
  {
    year: 2020, type: "review", role: "cofirst",
    authors: "Dong Hyun Kim, Han Sol Lee, Tae-Wan Kwon, Young-Min Han, Nae-Won Kang, Mee Yeon Lee, Dae-Duk Kim, Myeong Gyu Kim, Jae-Young Lee",
    title: "Single enzyme nanoparticle, an effective tool for enzyme replacement therapy",
    journal: "Archives of Pharmacal Research", impact: "6.0", doi: ""
  },
  {
    year: 2019, type: "article", role: "",
    authors: "Jae-Young Lee, Han Sol Lee, Nae-Won Kang, Song Yi Lee, Dong Hyun Kim, Sungyun Kim, In-Soo Yoon, Hyun-Jong Cho, Dae-Duk Kim",
    title: "Blood component ridable and CD44 receptor targetable nanoparticles based on a maleimide-functionalized chondroitin sulfate derivative",
    journal: "Carbohydrate Polymers", impact: "10.7", doi: ""
  },
  {
    year: 2019, type: "review", role: "first",
    authors: "Han Sol Lee, Jeong-Jun Lee, Myeong Gyu Kim, Ki-Taek Kim, Cheong-Weon Cho, Dae-Duk Kim, Jae-Young Lee",
    title: "Sprinkle formulations: a review of commercially available products",
    journal: "Asian Journal of Pharmaceutical Sciences", impact: "8.7", doi: ""
  },
  {
    year: 2019, type: "article", role: "",
    authors: "Jeong-Jun Lee, Young-Min Han, Tae-Wan Kwon, Dong Hyun Kim, Han Sol Lee, Woo Jin Jung, Jina Kim, Sujin Kang, Sang Kyum Kim, Cheong-Weon Cho, Keong-Ryoon Lee, Dae-Duk Kim, Min Chul Park, Jae-Young Lee",
    title: "Functional fragments of AIMP1-derived peptide (AdP) and optimized hydrosol for their topical delivery by Box-Behnken design",
    journal: "Molecules", impact: "4.9", doi: ""
  },
  {
    year: 2019, type: "article", role: "",
    authors: "Sung-Jin Kim, Young-Guk Na, Hong-Ki Lee, Hye-Jin Lee, Miao Wang, Hyun Wook Huh, Han Sol Lee, Jae-Young Lee, Cheong-Weon Cho",
    title: "Stability evaluation of H3N2 influenza split vaccine in drying process for solidification",
    journal: "Journal of Pharmaceutical Investigation", impact: "5.8", doi: ""
  },
  {
    year: 2018, type: "review", role: "",
    authors: "Ki-Taek Kim, Han Sol Lee, Jeong-Jun Lee, Eui Kyun Park, Bong-Seon Lee, Jae-Young Lee, Jong-Sup Bae",
    title: "Nanodelivery systems for overcoming limited transportation of therapeutic molecules through the blood-brain barrier",
    journal: "Future Medicinal Chemistry", impact: "4.8", doi: ""
  },
  {
    year: 2017, type: "article", role: "",
    authors: "Su-Min Han, Young-Guk Na, Han Sol Lee, Gi-Ho Son, Seong-Hoon Jeon, Ki-Hyun Bang, Sung-Jin Kim, Hye-Jin Lee, Cheong-Weon Cho",
    title: "Improvement of cellular uptake of hydrophilic molecule, calcein, formulated by liposome",
    journal: "Journal of Pharmaceutical Investigation", impact: "5.8", doi: ""
  },
  {
    year: 2016, type: "review", role: "cofirst",
    authors: "Hye-Rin Jeong, Han Sol Lee, In-Jung Choi, Jung-Hwan Park",
    title: "Considerations in the use of microneedles: pain, convenience, anxiety and safety",
    journal: "Journal of Drug Targeting", impact: "5.1", doi: ""
  },
  {
    year: 2016, type: "article", role: "first",
    authors: "Han Sol Lee, Ha Ryeong Ryu, Joo Young Roh, Jung-Hwan Park",
    title: "Bleomycin-coated microneedles for treatment of warts",
    journal: "Pharmaceutical Research", impact: "4.1", doi: ""
  }
];

const PATENTS = [
  {
    year: 2025,
    inventors: "Jae-Young Lee, Han Sol Lee, So-Yeol Yoo, Jang Mo Koo, Dong Hwan Lee, Ji Hoon Yoo",
    title: "Composition for anticancer chemo-photodynamic therapy comprising pegylated hemoglobin nanocluster alleviating hypoxia",
    number: "KR 10-2793996 (2025.04.07)"
  },
  {
    year: 2023,
    inventors: "Han Sol Lee, Su Ji Lee, Jin Yong Kim",
    title: "Reconstituted high-density lipoprotein nanoparticles comprising cholesterol",
    number: "KR 10-2023-0058677 (2023.05.04)"
  },
  {
    year: 2023,
    inventors: "Han Sol Lee, Su Ji Lee, Jin Yong Kim",
    title: "Reconstituted high-density lipoprotein nanoparticles for drug delivery",
    number: "KR 10-2023-0058529 (2023.05.04), PCT/KR2023/006147"
  },
  {
    year: 2022,
    inventors: "Hoon Suk Rho, Hyuck Kim, Kyu Min Park, Han Sol Lee",
    title: "Nanoparticle for drug delivery",
    number: "KR 10-2022-0071475 (2022.06.13)"
  },
  {
    year: 2022,
    inventors: "Hoon Suk Rho, Hyuck Kim, Kyu Min Park, Han Sol Lee",
    title: "Manufacturing method of multi-functional hybrid nanoparticle",
    number: "KR 10-2022-0071495 (2022.06.13)"
  },
  {
    year: 2022,
    inventors: "Hong Kyun Kim, Jae-Young Lee, Han Sol Lee, Soo Jin Yi, Jeongho Kim, Byeong-ung Park",
    title: "Drug-loaded extracellular vesicles originated from amniotic membrane derived epithelial cells as an ophthalmic drug delivery system",
    number: "KR 10-2022-0037968 (2022.03.28), PCT/KR2023/095015"
  },
  {
    year: 2021,
    inventors: "Jae-Young Lee, Won Hwa Lee, Gyu Yong Song, Han Sol Lee, Hye Lim Kim, Jiseon An, So-Yeol Yoo, Yong Hyeon Mun, Jang Mo Koo, Dong Hwan Lee, Seok Jin Koh, Ji Hoon Yoo",
    title: "Composition for treating COVID-19-associated cytokine storm comprising lung-selective 25-hydroxycholesterol nanoparticle",
    number: "KR 10-2021-0090257 (2021.07.09)"
  },
  {
    year: 2020,
    inventors: "Jae-Young Lee, Gyu Yong Song, Han Sol Lee, Yong-Hyeon Mun, Jiseon An, So-Yeol Yoo, Hui Ji Choi",
    title: "Method for preparing PEGylated nanoparticle albumin-bound steroidal ginsenoside derivatives",
    number: "KR 10-2020-0141206 (2020.10.28)"
  },
  {
    year: 2019,
    inventors: "Cheong-Weon Cho, Ki-Hyun Bang, Sung-Jin Kim, Han Sol Lee, Young-Guk Na, Gi-Ho Son, Sung-Hoon Jeon, Hye-Jin Lee",
    title: "Microneedle tip cutter for pharmaceutical analysis of microneedles",
    number: "KR 10-1975767 (2019.04.30)"
  },
  {
    year: 2019,
    inventors: "Jae-Young Lee, Gyu Yong Song, Young Min Han, Tae-Wan Kwon, Jeong-Jun Lee, Han Sol Lee, Dong Hyun Kim",
    title: "Lipid protein nanocomposites comprising ginsenoside and use thereof",
    number: "KR 10-2019-0011848 (2019.01.30)"
  },
  {
    year: 2017,
    inventors: "Jung Hwan Park, Joo Young Roh, Hye-Rin Jeong, Han Sol Lee",
    title: "Bleomycin-containing microneedle patch for treating warts and method for manufacturing the same",
    number: "KR 10-2017-0132087 (2017.12.01)"
  },
  {
    year: 2016,
    inventors: "Jung Hwan Park, Joo Young Roh, Han Sol Lee, Jin Ok Baek, Jong Rok Lee, Joon Seok Choi, Ji Hoon Kim, Ha Ryeong Ryu",
    title: "Microneedle assembly comprising clamping means",
    number: "KR 10-1688273 (2016.12.21)"
  }
];

/* --------------------------------------------------------------------------
   구성원. photo 는 assets/img/ 안의 파일명, 사진이 없으면 "" 로 두세요.
   -------------------------------------------------------------------------- */
const MEMBERS = [
  // 예시입니다. 실제 구성원으로 바꾸시면 됩니다.
  // {
  //   name: "홍길동", nameEn: "Gil-Dong Hong",
  //   role: "석사과정 / M.S. student",
  //   focus: "혈액뇌관문 칩 기반 나노입자 투과 평가",
  //   photo: "", email: ""
  // },
];

const ALUMNI = [
  // { name: "이름", role: "석사 (2027)", now: "현재 소속" }
];

/* --------------------------------------------------------------------------
   소식. 최신 항목이 위로 오게 두세요.
   -------------------------------------------------------------------------- */
const NEWS = [
  {
    date: "2025.03",
    title: "연구실을 시작했습니다",
    body: "이한솔 교수가 조선대학교 약학대학에 조교수로 부임하면서 BEND Lab이 문을 열었습니다."
  },
  {
    date: "2025",
    title: "단백질 나노입자 벤치마킹 논문이 Small Methods에 게재되었습니다",
    body: "약물전달과 임상 중개 관점에서 단백질 기반 나노입자를 비교 분석한 리뷰입니다."
  },
  {
    date: "2025",
    title: "간세포암 표적 나노복합체 논문이 Small Science에 게재되었습니다",
    body: "혈관 온전성을 보호하면서 항암 효과를 높이는 표적 전달 전략을 보고했습니다."
  }
];
