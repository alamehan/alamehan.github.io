---
format: leaf/1
---

<!-- AI-augmented design frameworks & methods — original, documented methodologies
     authored and battle-tested in production work. -->

## framework-prd
emoji: 🗺️
name: Framework PRD — "From Visual to Specification"
tagline.en: Five phases from screenshots to a complete, buildable product spec.
tagline.id: Lima fase dari screenshot ke spesifikasi produk lengkap yang siap dibangun.
year: 2025–2026
tag: framework
tag: prd
tag: ai
pin: true
swatch: #2563EB

@en
A five-phase framework for converting visual references (screenshots, UI recordings, existing apps) into complete, buildable product specifications with AI:

| Phase | Name | What happens |
|---|---|---|
| 0 | Preparation | Collect and organize the visual source material |
| 1 | Visual extraction | Systematically extract screens, components, and flows |
| 2 | Structural analysis | Reconstruct the information architecture, data model, and user flows |
| 3 | Specification writing | Produce the PRD — objectives, personas, module-by-module specs, acceptance criteria |
| 4 | Validation & handoff | Cross-check the spec against the visual source and prepare for execution |

### Proof of work — e-PRABU
Validated end-to-end by producing complete documentation for *e-PRABU* (Elektronik Perhitungan Rencana Anggaran Biaya untuk Istana) — an integrated budget-plan (RAB) lifecycle platform standardizing the workflow between **Staf** (budget-plan creators) and **Atasan** (approvers), with centralized master data (labor, material, and equipment unit prices) as the single source of truth for all budget calculations. Deliverables: a full PRD covering 8 modules, user flows, and a data blueprint, plus a complete AI-generated documentation suite — executive summary, product vision, personas, actionable success metrics, and a diagram collection including project-lifecycle state machines (Draft → Awaiting Approval → Active Project → Completed, with per-state modes like Editable, Read-Only, Execution, Archived) — produced with Gemini and Claude driven by the framework.
@id
Framework lima fase untuk mengubah referensi visual (screenshot, rekaman UI, aplikasi yang sudah ada) menjadi spesifikasi produk lengkap yang siap dibangun, bersama AI:

| Fase | Nama | Yang terjadi |
|---|---|---|
| 0 | Persiapan | Kumpulkan dan rapikan materi sumber visual |
| 1 | Ekstraksi visual | Ekstrak layar, komponen, dan flow secara sistematis |
| 2 | Analisis struktural | Rekonstruksi arsitektur informasi, model data, dan user flow |
| 3 | Penulisan spesifikasi | Susun PRD — tujuan, persona, spesifikasi per modul, kriteria penerimaan |
| 4 | Validasi & handoff | Silang-periksa spesifikasi terhadap sumber visual dan siapkan eksekusi |

### Bukti kerja — e-PRABU
Tervalidasi ujung-ke-ujung dengan menghasilkan dokumentasi lengkap *e-PRABU* (Elektronik Perhitungan Rencana Anggaran Biaya untuk Istana) — platform siklus hidup RAB terintegrasi yang membakukan alur kerja antara **Staf** (penyusun RAB) dan **Atasan** (penyetuju), dengan master data terpusat (harga satuan tenaga, material, dan peralatan) sebagai satu sumber kebenaran untuk semua perhitungan anggaran. Deliverable: PRD utuh 8 modul, user flow, dan blueprint data, plus satu suite dokumentasi hasil AI — ringkasan eksekutif, visi produk, persona, metrik sukses yang bisa dieksekusi, dan koleksi diagram termasuk state machine siklus proyek (Draft → Awaiting Approval → Active Project → Completed, dengan mode per-state seperti Editable, Read-Only, Execution, Archived) — dibuat dengan Gemini dan Claude yang dikemudikan framework ini.

## three-gate
emoji: 🚪
name: The Three-Gate Feature Evaluation
tagline.en: Every proposed feature runs three gates: value, clarity, effort.
tagline.id: Setiap usulan fitur melewati tiga gerbang: nilai, kejelasan, upaya.
year: 2025–2026
tag: framework
tag: product
swatch: #16A34A

@en
A decision framework that routes every proposed feature through three structured gates:

| Gate | Question | Outcomes |
|---|---|---|
| 1 · Business Value | Is the feature essential for ~80% of users? | If not → **Reject / Backlog** |
| 2 · UX Complexity | Is the interface flow clear? | High cognitive load → **Simplify / Hide**; intuitive flows advance |
| 3 · Dev Effort | Feasible within one sprint cycle? | High-risk → **Defer to V2**; safe & low-effort → **Build & Ship (MVP)** |

**Operating principle:** refine the PRD and prototype until the UX is easily understood by stakeholders first — *"if it's still complicated for stakeholders, imagine the user."* Always start from the MVP; simplify, iterate, simplify — it takes time, but saves far more later. Extend features only after users love the core.
@id
Framework keputusan yang mengalirkan setiap usulan fitur melewati tiga gerbang terstruktur:

| Gerbang | Pertanyaan | Hasil |
|---|---|---|
| 1 · Nilai Bisnis | Apakah fitur ini esensial bagi ~80% pengguna? | Jika tidak → **Tolak / Backlog** |
| 2 · Kompleksitas UX | Apakah alur antarmukanya jelas? | Beban kognitif tinggi → **Sederhanakan / Sembunyikan**; alur intuitif lanjut |
| 3 · Upaya Dev | Layak dalam satu siklus sprint? | Berisiko tinggi → **Tunda ke V2**; aman & ringan → **Bangun & Rilis (MVP)** |

**Prinsip kerjanya:** rapikan PRD dan prototype sampai UX-nya mudah dipahami stakeholder dulu — *"kalau untuk stakeholder saja masih rumit, bayangkan penggunanya."* Selalu mulai dari MVP; sederhanakan, iterasi, sederhanakan — memang butuh waktu, tapi menghemat jauh lebih banyak nanti. Perluas fitur hanya setelah pengguna mencintai intinya.

## n-level-diagrams
emoji: 🧅
name: Progressive Disclosure Diagramming (N-Level)
tagline.en: Explain complex systems layer by layer — happy path first, maze later.
tagline.id: Jelaskan sistem rumit lapis demi lapis — happy path dulu, labirin belakangan.
year: 2025–2026
tag: framework
tag: diagrams
swatch: #7C3AED

@en
A method for explaining complex systems without overwhelming the team — applied in production to the E-Systems **Contract** and **Pre-Boarding** modules:

- **Level 1 — The Core:** the simplest "happy path" diagram.
- **Levels 2 … N−1 — The Layers:** progressively add edge cases and error handling.
- **Deep Dive:** tackle detailed UI/UX and technical specs only after the progressive diagrams are fully understood.

**Tooling:** Mermaid diagrams, with a dedicated Figma file as the stakeholder reference. **Underlying lesson:** jumping into the maze too fast — technical details before a foundational map — causes confusion and cognitive overload.
@id
Metode untuk menjelaskan sistem kompleks tanpa membebani tim — dipakai di produksi pada modul **Contract** dan **Pre-Boarding** E-Systems:

- **Level 1 — Inti:** diagram "happy path" paling sederhana.
- **Level 2 … N−1 — Lapisan:** tambahkan edge case dan penanganan error secara bertahap.
- **Deep Dive:** bahas detail UI/UX dan spesifikasi teknis hanya setelah diagram progresifnya benar-benar dipahami.

**Perkakas:** diagram Mermaid, dengan file Figma khusus sebagai referensi stakeholder. **Pelajaran dasarnya:** terlalu cepat masuk labirin — detail teknis sebelum peta fondasi — menimbulkan kebingungan dan cognitive overload.

## json-design-system
emoji: 🤖
name: The Machine-Readable Design System
tagline.en: One JSON, two outputs — Figma designs and frontend code from a single source of truth.
tagline.id: Satu JSON, dua keluaran — desain Figma dan kode frontend dari satu sumber kebenaran.
year: 2026
tag: framework
tag: ai
tag: design-system
pin: true
swatch: #DB2777

@en
The capstone method: convert the design system into **JSON** so it is machine-readable and AI-ready; implement it across the development team so the built product stays perfectly consistent with the design system; and develop a **Figma plugin** that auto-generates designs synced to the system from JSON input.

**One JSON — two outputs:** Figma designs and frontend code. One source of truth, two synced outputs, less manual translation between teams, faster production with more consistency. The hard part is precision — most AI design tools generate UI that looks good but isn't truly accurate to the system (wrong spacing, generic components, inconsistent icons, wrong variants). Structured JSON plus explicit DESIGN.md rules beat guesswork: *precision needs structure, not just prompts.* Achieving this reliably requires a frontier-grade AI model.
@id
Metode pamungkas: ubah design system ke **JSON** agar machine-readable dan siap-AI; implementasikan ke tim development agar produk yang dibangun tetap konsisten sempurna dengan design system; dan kembangkan **plugin Figma** yang otomatis menghasilkan desain tersinkron dari input JSON.

**Satu JSON — dua keluaran:** desain Figma dan kode frontend. Satu sumber kebenaran, dua keluaran tersinkron, lebih sedikit penerjemahan manual antar tim, produksi lebih cepat dan lebih konsisten. Bagian sulitnya adalah presisi — kebanyakan tool desain AI menghasilkan UI yang terlihat bagus tapi tidak benar-benar akurat terhadap sistem (spacing salah, komponen generik, ikon tidak konsisten, varian keliru). JSON terstruktur plus aturan DESIGN.md yang eksplisit mengalahkan tebak-tebakan: *presisi butuh struktur, bukan sekadar prompt.* Mencapainya secara andal butuh model AI kelas frontier.

## design-ops
emoji: 🧰
name: Design-Ops Principles & Practices
tagline.en: Distilled from a continuous cycle of sprint retrospectives.
tagline.id: Disuling dari siklus retrospektif sprint yang berkelanjutan.
year: 2023–now
tag: framework
tag: design-ops
swatch: #EA580C

@en
- **Documentation** — one master sheet for all design & prototype documentation: complete, per project, per feature, with links, notes, and timestamps, maintained continuously.
- **Figma performance & hygiene** — avoid overly complex component hierarchies; adjust instance components first, then push to master to prevent crash-inducing mass updates; keep the design system in its own library file loaded into feature files; use slot-based components for variants without break/detach.
- **Design-to-code alignment** — base designs on Tailwind and Tabler Icons so frontend can implement directly, and codify coding-phase rules in DESIGN.md.
- **AI-assisted ideation** — faster, clearer UX iteration using ASCII wireframes in chat-based AI; image generation with attached references and JSON-structured prompts; standardized prompt templates to reduce variability; continuous exploration of advanced AI features.
- **Freshness & research** — strong design systems need periodic refreshes (squircle, glassmorphism, progressive-blur explorations); involve frontend and stakeholders early; stay current through curated daily AI/design/engineering newsletters.
@id
- **Dokumentasi** — satu master sheet untuk seluruh dokumentasi desain & prototype: lengkap, per proyek, per fitur, dengan tautan, catatan, dan waktu, dirawat berkelanjutan.
- **Performa & higiene Figma** — hindari hierarki komponen yang terlalu rumit; ubah instance dulu, lalu push ke master agar tak ada pembaruan massal yang bikin crash; simpan design system di file library sendiri yang dimuat ke file fitur; pakai komponen berbasis slot untuk varian tanpa break/detach.
- **Keselarasan desain-ke-kode** — dasari desain pada Tailwind dan Tabler Icons agar frontend bisa langsung mengimplementasikan, dan bakukan aturan fase coding di DESIGN.md.
- **Ideasi berbantuan AI** — iterasi UX lebih cepat dan jernih memakai wireframe ASCII di AI berbasis chat; generasi gambar dengan referensi terlampir dan prompt terstruktur JSON; template prompt terstandar untuk menekan variabilitas; eksplorasi berkelanjutan fitur AI lanjutan.
- **Kesegaran & riset** — design system yang kuat butuh penyegaran berkala (eksplorasi squircle, glassmorphism, progressive blur); libatkan frontend dan stakeholder sejak awal; tetap terkini lewat kurasi harian newsletter AI/desain/engineering.

## principle-signal
kind: principle
emoji: 🧭
name: Find the signal
name.id: Temukan sinyalnya
tagline.en: Research the real business process, user pressure, and edge cases before polishing any surface.
tagline.id: Riset proses bisnis yang sebenarnya, tekanan user, dan edge case dulu — baru poles permukaannya.

## principle-compress
kind: principle
emoji: 🗜️
name: Compress complexity
name.id: Kompres kompleksitas
tagline.en: Turn dense information into a clear, decision-ready mental model — design as data compression.
tagline.id: Ubah informasi padat jadi mental model yang jernih dan siap-keputusan — desain sebagai kompresi data.

## principle-system
kind: principle
emoji: 🧱
name: Build the system
name.id: Bangun sistemnya
tagline.en: Encode foundations, components, states, and rules so quality scales beyond one screen or one designer.
tagline.id: Enkode fondasi, komponen, state, dan aturan supaya kualitas berskala melampaui satu layar atau satu desainer.

## principle-prototype
kind: principle
emoji: 🕹️
name: Prototype the truth
name.id: Prototipekan kebenarannya
tagline.en: Working interactions and realistic content expose gaps early — align people around behavior, not imagination.
tagline.id: Interaksi yang benar-benar jalan dan konten realistis membongkar celah lebih awal — satukan orang lewat perilaku, bukan imajinasi.

## principle-loop
kind: principle
emoji: 🔁
name: Close the loop
name.id: Tutup putarannya
tagline.en: Hand off clearly, learn from UAT, and keep iterating until the shipped result carries the original intent.
tagline.id: Serah terima dengan jelas, belajar dari UAT, dan terus iterasi sampai hasil yang rilis membawa maksud aslinya.