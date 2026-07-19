---
format: leaf/1
---

<!-- Personal experiments & the @alamehan product family, on one standard. Every factory app
     (04-scaffold/apps/) MUST have its Leaf here — presence, identity sync (emoji/name/swatch vs
     the APPS manifest) and the Launch link are gated by `node 05-orbit/derive.mjs --check`.
     VISITOR-FIRST LAW (owner call 2026-07-19): a factory Leaf body speaks to the visitor, not
     the builder — three sections mirroring every app's own About modal: `### What it is` ·
     `### How it flows` · `### What you get` (ID: `### Apa ini` · `### Alurnya` · `### Yang kamu
     dapat`). No ancestor names, no version archaeology, no builder telemetry (test counts,
     internal receipts) in the prose — the origin story lives in each product's PRD, and the
     one-line `itch.en/.id` header field is the only nod to where a product came from.
     Family Standard v2 sweep (2026-07-11): ancestor seeds (omega-framework, subject-mastery, omega-construct,
     atlas-engine, omni-atlas, pvp-protocol, alchemy-engine, helix-engine) were absorbed into the family products
     below — their stories now live inside those products' PRDs. -->

## monozap
emoji: ⬛
name: Monozap
tagline.en: One file. One accent. One standard.
tagline.id: Satu file. Satu aksen. Satu standar.
year: 2026
status: live
pin: true
stack: HTML, CSS, JS, zero dependencies
tag: design-system
tag: single-file
tag: standard
swatch: #171717

@en
### The itch
Most side-project ideas die in setup: scaffolding, dependencies, deploys. I wanted
tools that live in **one HTML file**, run from a double-click, and still feel designed.

### What I built
A family of tiny offline tools sharing one monochrome design language — plus the
*standard itself as a product*: design tokens, 12 machine-checked code rules, and an
identity contract, all enforced by a linter. The pipeline: idea → document → scaffold
→ register → build. Now evolved into **Family Standard v2** (Fustat, Lucide, UX gates
G1–G10, the four-tab family modal) — with v1 preserved untouched as the legacy layer.

### Did it work?
| Promise | Reality |
|---|---|
| Zero dependencies | ✅ `node:` built-ins only, nothing at runtime |
| Runs from `file://` | ✅ today, and in ten years |
| One standard | ✅ every rule that can be machine-checked, is |

### What it taught me
A standard is only real when it's a **script, not a wish** — and this very website
(v4) is built on lessons Monozap paid for.
@id
### Gatelnya
Kebanyakan ide side-project mati di tahap setup: scaffolding, dependency, deploy.
Aku pengen tools yang hidup di **satu file HTML**, jalan cukup dengan double-click,
tapi tetap kerasa didesain.

### Yang aku bikin
Satu keluarga tools offline mungil dengan satu bahasa desain monokrom — plus
*standarnya itu sendiri sebagai produk*: design tokens, 12 aturan kode yang dicek
mesin, dan kontrak identitas, semuanya dijaga linter. Pipeline-nya: ide → dokumen →
scaffold → registrasi → build. Kini berevolusi jadi **Family Standard v2** (Fustat,
Lucide, gerbang UX G1–G10, modal keluarga empat tab) — dengan v1 diawetkan utuh
sebagai lapisan legacy.

### Beneran jalan?
Zero dependency, jalan dari `file://`, dan setiap aturan yang bisa dicek mesin —
dicek mesin. Janji ✅ semua.

### Pelajarannya
Standar itu baru nyata kalau bentuknya **script, bukan wacana** — dan website v4
ini berdiri di atas pelajaran yang dibayar Monozap.

## zapseed
emoji: 🌱
name: ZapSeed
tagline.en: Raw idea in. Family PRD out. — the project factory.
tagline.id: Raw idea in. Family PRD out. — pabrik proyek keluarga.
itch.en: Every new product began with the same ritual — and the ritual lived nowhere.
itch.id: Tiap produk baru dimulai dengan ritual yang sama — dan ritualnya tak tinggal di mana pun.
year: 2026
status: live
pin: true
stack: single HTML, Standard v2
tag: factory
tag: prd
tag: meta
origin: factory
codename: Pabrik
swatch: #115E59

@en
### What it is
The family's project factory: a console that turns a raw idea into a complete,
buildable product spec on the family standard. It's the internal tool every other
product in this collection was born through.

### How it flows
Describe the idea, forge its identity — name, emoji, accent color, with live
collision checks against every sibling — and export one job file. Any AI fills it
into a full PRD, and a built-in auditor checks the result against the family's
acceptance boxes before it counts.

### What you get
A complete, ready-to-build PRD — and the guarantee that every product in this
family is born the same disciplined way.
@id
### Apa ini
Pabrik proyek keluarga: konsol yang mengubah ide mentah jadi spec produk lengkap
yang siap dibangun di atas standar keluarga. Ini tool internal tempat semua produk
lain di koleksi ini dilahirkan.

### Alurnya
Tuliskan idenya, tempa identitasnya — nama, emoji, warna aksen, dengan cek tabrakan
langsung terhadap semua saudaranya — lalu ekspor satu file job. AI mana pun
mengisinya jadi PRD utuh, dan auditor bawaan memeriksa hasilnya terhadap kotak
acceptance keluarga sebelum dihitung sah.

### Yang kamu dapat
PRD lengkap yang siap dibangun — dan jaminan bahwa setiap produk keluarga ini lahir
lewat disiplin yang sama.

## diagranimate
emoji: 🎬
name: Diagranimate
tagline.en: Your architecture diagrams, alive. — cinematic Mermaid presenter.
tagline.id: Your architecture diagrams, alive. — presenter Mermaid sinematik.
itch.en: A finished architecture diagram is correct — and unreadable.
itch.id: Diagram arsitektur yang sudah jadi itu benar — dan tak terbaca.
year: 2026
status: live
stack: single HTML, Standard v2
tag: diagrams
tag: mermaid
tag: presenting
origin: factory
codename: Wayang
link: Launch = tools/diagranimate.html
swatch: #7C3AED

@en
### What it is
A cinematic presenter for Mermaid diagrams: instead of one overwhelming wall of
boxes, your diagram plays as a sequence of progressive scenes an audience can
actually follow.

### How it flows
Paste any Mermaid diagram and press play. An automatic camera tours every new
element in order, a guiding beacon keeps the eye anchored, smart ghosting dims the
areas you haven't reached yet, and each scene closes with a recap zoom-out — all on
one seekable timeline.

### What you get
A presentation of your architecture that people follow instead of decode —
exportable as HD PNG frames or .webm video, straight from the browser.
@id
### Apa ini
Presenter sinematik untuk diagram Mermaid: alih-alih satu dinding kotak yang
menenggelamkan, diagrammu diputar sebagai rangkaian babak progresif yang benar-benar
bisa diikuti audiens.

### Alurnya
Tempel diagram Mermaid apa pun lalu tekan play. Kamera otomatis menyusuri tiap
elemen baru secara berurutan, beacon pemandu menjaga arah mata, smart ghosting
meredupkan area yang belum dibahas, dan tiap babak ditutup recap zoom-out — semuanya
dalam satu timeline yang bisa di-seek.

### Yang kamu dapat
Presentasi arsitektur yang diikuti orang, bukan dipecahkan seperti teka-teki — bisa
diekspor sebagai PNG HD atau video .webm, langsung dari browser.

## omnigraph
emoji: 🌐
name: OmniGraph
tagline.en: One line in. The whole map out. — universal knowledge mapper (BYOAI).
tagline.id: One line in. The whole map out. — pemeta pengetahuan universal (BYOAI).
itch.en: Learning something new produced piles of notes — never a map of the territory.
itch.id: Belajar hal baru menghasilkan tumpukan catatan — tak pernah peta wilayahnya.
year: 2026
stack: single HTML, Standard v2
tag: knowledge
tag: maps
tag: byoai
origin: factory
codename: Semesta
link: Launch = tools/omnigraph.html
swatch: #4F46E5

@en
### What it is
A universal knowledge mapper: type one line — any subject — and get a complete,
navigable map of the territory, built by the AI you already use.

### How it flows
The console forges a mapping brief from your one line. Hand it to any AI (the
console itself carries none), paste the reply back, and it renders as a living
tree — collapsible branches you can search, focus, and grow one branch at a time,
groundable in your own documents.

### What you get
A living map with ★ essentials, honesty flags, and sources — saved and shared as
plain text, so it opens anywhere and never locks you in.
@id
### Apa ini
Pemeta pengetahuan universal: ketik satu baris — subjek apa pun — dan dapatkan peta
wilayah yang lengkap dan bisa dijelajahi, dibangun oleh AI yang sudah kamu pakai.

### Alurnya
Konsol menempa brief pemetaan dari satu barismu. Serahkan ke AI mana pun (konsolnya
sendiri tak membawa AI), tempel balasannya, dan ia ter-render sebagai pohon hidup —
cabang yang bisa dilipat, dicari, difokus, dan ditumbuhkan satu cabang demi satu,
bisa di-ground ke dokumenmu sendiri.

### Yang kamu dapat
Peta hidup dengan esensial ★, bendera kejujuran, dan sumber — tersimpan dan terbagi
sebagai teks biasa, jadi terbuka di mana pun dan tak pernah menguncimu.

## svganimator
emoji: 🌀
name: SVGAnimator
tagline.en: Your brand, in motion. — brand SVG motion console.
tagline.id: Your brand, in motion. — konsol motion SVG untuk brand.
itch.en: Every brand animation was a one-off — nothing carried the brand's motion DNA forward.
itch.id: Tiap animasi brand jadi karya sekali pakai — tak ada yang meneruskan DNA gerak brand-nya.
year: 2026
stack: single HTML, Standard v2
tag: motion
tag: svg
tag: brand
origin: factory
codename: Nadi
link: Launch = tools/svganimator.html
swatch: #1E40AF

@en
### What it is
The brand-to-motion console: it turns a brand's identity plus one concept line into
a finished, self-contained web animation. No AI inside — the AI you already use does
the drawing, the console does the discipline.

### How it flows
Pick a Brand DNA Pack (or mint one from your design references), choose one of
three formats — **Scene**, an illustrated diorama that tells one story; **Icon**, a
bold animated icon batchable up to 8 per job; or **Slot**, a theme-aware SVG
ornament that inherits its host page's colors — drop your concept, and export one
job file. Any AI executes it; paste the returned artifact into the built-in
Inspector and ten offline gates lint it against the contract.

### What you get
One copy-paste-ready animation per job with zero external assets, plus a Vault that
keeps your brand packs and logs every build's receipt automatically.
@id
### Apa ini
Konsol brand-ke-gerak: mengubah identitas brand plus satu baris konsep jadi animasi
web mandiri yang selesai. Tanpa AI di dalamnya — AI yang sudah kamu pakai yang
menggambar, konsol yang menjaga disiplinnya.

### Alurnya
Pilih Brand DNA Pack (atau mint dari referensi desainmu), pilih satu dari tiga
format — **Scene**, diorama ilustratif yang menceritakan satu kisah; **Icon**, ikon
animasi tebal yang bisa batch sampai 8 per job; atau **Slot**, ornamen SVG
sadar-tema yang mewarisi warna halaman host-nya — taruh konsepmu, ekspor satu file
job. AI mana pun mengeksekusinya; tempel artefak balasannya ke Inspector bawaan dan
sepuluh gerbang offline memeriksanya terhadap kontrak.

### Yang kamu dapat
Satu animasi siap copy-paste per job tanpa aset eksternal, plus Vault yang menyimpan
pack brand-mu dan mencatat resi tiap build secara otomatis.

## motionplain
emoji: 🎞️
name: MotionPlain
tagline.en: One brief in. A polished explainer out. — explainer-video studio (BYOAI).
tagline.id: One brief in. A polished explainer out. — studio video explainer (BYOAI).
itch.en: Turning a script into an explainer video demanded a studio, a timeline, and a week.
itch.id: Mengubah naskah jadi video explainer menuntut studio, timeline, dan satu minggu.
year: 2026
stack: single HTML, Standard v2
tag: explainer
tag: video
tag: byoai
origin: factory
codename: Layar
link: Launch = tools/motionplain.html
swatch: #C026D3

@en
### What it is
An explainer-video studio in one offline file: it prepares a precise execution
brief for your video and previews the result live — any AI does the writing, the
studio does the discipline.

### How it flows
Describe what the video must explain. The studio compiles a versioned brief; hand
it to any AI, and the built-in Analyst validates the reply before the browser Stage
plays the scenes back to you.

### What you get
A polished, previewable explainer that exports client-side — no render farm, no
installs, and nothing ever leaves your machine.
@id
### Apa ini
Studio video explainer dalam satu file offline: menyiapkan brief eksekusi yang
presisi untuk videomu dan mempratinjau hasilnya secara live — AI mana pun yang
menulis, studio yang menjaga disiplinnya.

### Alurnya
Tuliskan apa yang harus dijelaskan videonya. Studio mengompilasi brief ber-versi;
serahkan ke AI mana pun, dan Analyst bawaan memvalidasi balasannya sebelum Stage di
browser memutar babak-babaknya untukmu.

### Yang kamu dapat
Explainer rapi yang bisa dipratinjau dan diekspor sisi klien — tanpa render farm,
tanpa instalasi, dan tak ada apa pun yang meninggalkan mesinmu.

## contentos
emoji: ⚗️
name: ContentOS
tagline.en: Raw in. Ready out. — content processing OS (BYOAI).
tagline.id: Raw in. Ready out. — OS pemroses konten (BYOAI).
itch.en: Every piece of content needed the same treatments — improvised differently every time.
itch.id: Tiap konten butuh perlakuan yang sama — diimprovisasi beda-beda setiap kali.
year: 2026
stack: single HTML, Standard v2
tag: content
tag: pipeline
tag: byoai
origin: factory
codename: Kilang
link: Launch = tools/contentos.html
swatch: #DB2777

@en
### What it is
A content refinery: any raw text in, any of dozens of processed outputs out —
summarize, refine, transform, evaluate — through one compiled job instead of ad-hoc
prompting.

### How it flows
Drop your raw material, pick processes from the versioned registry, and export one
job file. Any AI executes it; the console parses the reply back, lints it against
the contract, and shelves the receipt.

### What you get
Consistent, repeatable content processing — per stage or full run — with a paper
trail, so the same input treated the same way gives the same quality every time.
@id
### Apa ini
Kilang konten: teks mentah apa pun masuk, lusinan keluaran terproses keluar —
ringkas, rapikan, ubah bentuk, nilai — lewat satu job terkompilasi, bukan prompting
dadakan.

### Alurnya
Jatuhkan bahan mentahmu, pilih proses dari registry ber-versi, lalu ekspor satu file
job. AI mana pun mengeksekusinya; konsol mem-parse balasannya, me-lint terhadap
kontrak, dan menyimpan resinya.

### Yang kamu dapat
Pemrosesan konten yang konsisten dan bisa diulang — per tahap atau sekali jalan
penuh — dengan jejak resi, jadi input yang sama dengan perlakuan yang sama memberi
kualitas yang sama setiap kali.

## specpilot
emoji: 📐
name: SpecPilot
tagline.en: Spec first, fly later. — idea→spec→wireframe cockpit (BYOAI).
tagline.id: Spec first, fly later. — kokpit ide→spec→wireframe (BYOAI).
itch.en: Great specs kept being born in chats — and chats are where documents disappear.
itch.id: Spec bagus terus lahir di chat — dan chat adalah tempat dokumen menghilang.
year: 2026
stack: single HTML, Standard v2
tag: spec
tag: wireframe
tag: byoai
origin: factory
codename: Denah
link: Launch = tools/specpilot.html
swatch: #C2410C

@en
### What it is
An idea→spec→wireframe cockpit: every step is a contract, every claim is linted,
and nothing important lives only in a chat log.

### How it flows
Two round trips with any AI: first your idea becomes a versioned spec brief; then
the spec becomes an annotated wireframe blueprint. The cockpit lints both on the
way back, and everything lands as exportable files.

### What you get
A spec, a blueprint, and a handoff pack ready for prototyping — decisions that
survive the conversation that made them.
@id
### Apa ini
Kokpit ide→spec→wireframe: tiap langkah adalah kontrak, tiap klaim di-lint, dan tak
ada hal penting yang cuma hidup di log chat.

### Alurnya
Dua kali bolak-balik dengan AI mana pun: pertama idemu jadi spec brief ber-versi;
lalu spec-nya jadi blueprint wireframe beranotasi. Kokpit me-lint keduanya saat
kembali, dan semuanya mendarat sebagai file yang bisa diekspor.

### Yang kamu dapat
Spec, blueprint, dan handoff pack yang siap diprototipekan — keputusan yang selamat
dari percakapan yang melahirkannya.

## protopilot
emoji: 🕹️
name: ProtoPilot
tagline.en: Your flow, on autopilot. — clickable-prototype prompt forge (BYOAI).
tagline.id: Your flow, on autopilot. — penempa prompt prototipe klik (BYOAI).
itch.en: Every prototype demo depended on someone driving the mouse.
itch.id: Tiap demo prototype bergantung pada seseorang yang memegang mouse.
year: 2026
stack: single HTML, Standard v2
tag: prototype
tag: flows
tag: byoai
origin: factory
codename: Kemudi
link: Launch = tools/protopilot.html
swatch: #E11D48

@en
### What it is
A forge for self-driving prototypes: describe a flow in plain language and get an
HTML prototype that demos itself — a pilot cursor moves, clicks, and narrates.

### How it flows
Write the flow you want to show. The console compiles it into a versioned brief any
AI can build from, previews the returned prototype in place, and keeps every run.

### What you get
A single-file prototype that flies its own demo — pilot cursor, narrated Flight
Bar, realistic data, zero dependencies — ready to send to anyone.
@id
### Apa ini
Penempa prototipe yang menyetir dirinya sendiri: tuliskan sebuah alur dengan bahasa
biasa dan dapatkan prototipe HTML yang mendemokan dirinya — kursor pilot bergerak,
mengklik, dan bernarasi.

### Alurnya
Tulis alur yang mau kamu tunjukkan. Konsol mengompilasinya jadi brief ber-versi yang
bisa dibangun AI mana pun, mem-preview prototipe balasannya di tempat, dan menyimpan
tiap run.

### Yang kamu dapat
Prototipe satu file yang menerbangkan demonya sendiri — kursor pilot, narasi Flight
Bar, data realistis, nol dependensi — siap dikirim ke siapa pun.

## uxmakeover
emoji: 🪞
name: UXMakeover
tagline.en: Every fix, explained. — UX audit & makeover studio (BYOAI).
tagline.id: Every fix, explained. — studio audit & makeover UX (BYOAI).
itch.en: UX feedback usually arrives as taste — strong opinions, missing reasons.
itch.id: Umpan balik UX biasanya datang sebagai selera — opininya kuat, alasannya hilang.
year: 2026
stack: single HTML, Standard v2
tag: ux-audit
tag: heuristics
tag: byoai
origin: factory
codename: Cermin
link: Launch = tools/uxmakeover.html
swatch: #0E7490

@en
### What it is
A UX audit & makeover studio — a mirror for interfaces: feed it a screen and get a
principled audit where every finding cites the rule it serves.

### How it flows
Describe or paste the screen and its context; the studio compiles an audit job for
any AI to run, then renders the reply as an explained, prioritized makeover plan.

### What you get
Fixes with reasons — a plan you can defend in a design review, not just a list of
opinions.
@id
### Apa ini
Studio audit & makeover UX — cermin untuk antarmuka: beri satu layar dan dapatkan
audit berprinsip yang tiap temuannya menyebut aturan yang dilayaninya.

### Alurnya
Tuliskan atau tempel layar beserta konteksnya; studio mengompilasi job audit untuk
dijalankan AI mana pun, lalu me-render balasannya sebagai rencana makeover yang
terjelaskan dan terprioritas.

### Yang kamu dapat
Perbaikan beserta alasannya — rencana yang bisa kamu pertahankan di review desain,
bukan sekadar daftar opini.

## superstudio
emoji: 🎨
name: SuperStudio
tagline.en: One style, every asset. — style-consistent asset studio (BYOAI).
tagline.id: One style, every asset. — studio aset konsisten-gaya (BYOAI).
itch.en: Ten assets, one brand — and every one came out in a different style.
itch.id: Sepuluh aset, satu brand — dan semuanya jadi dengan gaya berbeda-beda.
year: 2026
stack: single HTML, Standard v2
tag: style
tag: assets
tag: byoai
origin: factory
codename: Sanggar
link: Launch = tools/superstudio.html
swatch: #047857

@en
### What it is
A style-consistent asset studio: lock a visual style once as portable Style DNA,
then compile every asset in it.

### How it flows
Curate the style in the Vault — 16 genes across 4 chromosomes — then let the
deterministic Assembler compile style-locked jobs, one asset or a whole batch. Any
AI renders them; fidelity gates keep the results honest to the DNA.

### What you get
One voice across every asset: prompt packs and outputs that match each other before
they match the brief.
@id
### Apa ini
Studio aset konsisten-gaya: kunci satu gaya visual sekali sebagai Style DNA
portabel, lalu kompilasi setiap aset dalam gaya itu.

### Alurnya
Kurasi gayanya di Vault — 16 gen dalam 4 kromosom — lalu biarkan Assembler
deterministik mengompilasi job terkunci-gaya, satu aset atau satu batch. AI mana pun
yang me-render; gerbang fidelitas menjaga hasilnya jujur pada DNA-nya.

### Yang kamu dapat
Satu suara di semua aset: pack prompt dan keluaran yang serasi satu sama lain
sebelum serasi dengan brief-nya.

## bizventure
emoji: 🚀
name: BizVenture
tagline.en: Values in. Ventures out. — value-driven venture ideation console (BYOAI).
tagline.id: Values in. Ventures out. — konsol ideasi venture berbasis nilai (BYOAI).
itch.en: Venture ideas kept starting from trends — and quietly abandoning the values that made them worth doing.
itch.id: Ide usaha terus berangkat dari tren — dan diam-diam meninggalkan nilai yang membuatnya layak diperjuangkan.
year: 2026
stack: single HTML, Standard v2
tag: venture
tag: ideation
tag: byoai
origin: factory
codename: Niaga
link: Launch = tools/bizventure.html
swatch: #6B21A8

@en
### What it is
A value-driven venture ideation console: it turns human values into venture
blueprints, with ten gates standing between an idea and a claim.

### How it flows
Pick the values that matter, spark briefs out through any AI, and land blueprints
back — every claim has to pass the console's gates before it earns its place.

### What you get
Venture blueprints with receipts — ideas that can explain why they deserve to
exist, exported client-side.
@id
### Apa ini
Konsol ideasi usaha berbasis nilai: mengubah nilai kemanusiaan jadi cetak biru
usaha, dengan sepuluh gerbang berdiri di antara ide dan klaim.

### Alurnya
Pilih nilai yang penting bagimu, luncurkan spark brief lewat AI mana pun, dan
daratkan cetak birunya kembali — tiap klaim harus melewati gerbang konsol sebelum
berhak menempati tempatnya.

### Yang kamu dapat
Cetak biru usaha dengan resi — ide yang bisa menjelaskan kenapa ia layak ada,
diekspor sisi klien.

## bizvault
emoji: 🏦
name: BizVault
tagline.en: Raw IP in, launch-ready ecosystem out. — IP→product ecosystem vault (BYOAI).
tagline.id: Raw IP in, launch-ready ecosystem out. — brankas IP→ekosistem produk (BYOAI).
itch.en: Ideas and IP kept piling up as documents — none of them earning their keep.
itch.id: Ide dan IP terus menumpuk sebagai dokumen — tak satu pun menghidupi dirinya.
year: 2026
stack: single HTML, Standard v2
tag: monetize
tag: ip
tag: byoai
origin: factory
codename: Brankas
link: Launch = tools/bizvault.html
swatch: #166534

@en
### What it is
An IP→product vault: it turns raw intellectual property — frameworks, methods,
bodies of work — into a launch-ready product ecosystem.

### How it flows
Deposit the IP, compile the ecosystem job, round-trip any AI, then audit the
returned blueprint against the vault's diagnostics until it's launch-ready.

### What you get
A monetization blueprint with pipeline, products, and flywheel in one place —
exported client-side, ready to act on.
@id
### Apa ini
Brankas IP→produk: mengubah kekayaan intelektual mentah — framework, metode, karya —
jadi ekosistem produk yang siap diluncurkan.

### Alurnya
Setor IP-nya, kompilasi job ekosistem, bolak-balik ke AI mana pun, lalu audit cetak
biru balasannya terhadap diagnostik brankas sampai siap luncur.

### Yang kamu dapat
Cetak biru monetisasi dengan pipeline, produk, dan flywheel dalam satu tempat —
diekspor sisi klien, siap dieksekusi.

## llmforge
emoji: ⚒️
name: LLMForge
tagline.en: Same prompt. Honest verdict. — one-shot AI benchmark arena.
tagline.id: Same prompt. Honest verdict. — arena benchmark AI sekali-tembak.
itch.en: Model comparisons ran on vibes — different prompt, different mood, every time.
itch.id: Perbandingan model AI jalan pakai vibes — prompt beda, mood beda, tiap kali.
year: 2026
stack: single HTML, Standard v2
tag: benchmark
tag: arena
tag: byoai
origin: factory
codename: Gelanggang
link: Launch = tools/llmforge.html
swatch: #92400E

@en
### What it is
A one-shot AI benchmark arena for real front-end work: the same prompt to every
contender, blind weighted scoring, one podium.

### How it flows
Pin a trial from the case kits, give the identical one-shot prompt to each model
you're judging, render the replies in a sandbox, and score them blind on weighted
criteria — integrity gates keep the trial fair.

### What you get
An honest, repeatable verdict: an exportable podium you can show, instead of a
feeling you have to defend.
@id
### Apa ini
Gelanggang benchmark AI sekali-tembak untuk kerja front-end sungguhan: prompt yang
sama untuk tiap kontender, penilaian buta berbobot, satu podium.

### Alurnya
Patri satu trial dari kit kasus, beri prompt sekali-tembak yang identik ke tiap
model yang kamu adili, render balasannya di sandbox, dan nilai secara buta dengan
kriteria berbobot — gerbang integritas menjaga sidangnya adil.

### Yang kamu dapat
Vonis jujur yang bisa diulang: podium yang bisa diekspor dan ditunjukkan, bukan
perasaan yang harus kamu bela.

## svgmatrix
emoji: 🧬
name: SVGMatrix
tagline.en: Pick a motion. Take the code. — 200-module micro-animation treasury.
tagline.id: Pick a motion. Take the code. — khazanah 200 modul micro-animation.
itch.en: Two hundred fine micro-animations mean nothing if you can't find, test, and take one.
itch.id: Dua ratus micro-animation bagus tak berarti kalau tak bisa dicari, diuji, dan diambil.
year: 2026
stack: single HTML, Standard v2
tag: animation
tag: catalog
tag: components
origin: factory
codename: Khazanah
link: Launch = tools/svgmatrix.html
swatch: #334155

@en
### What it is
A one-file treasury of 200 curated micro-animations — SVG, Canvas, DOM/CSS, CSS
3D — with the console to explore, test, and extract them.

### How it flows
Browse the catalog with live pulse metrics, open any module to test it in place,
then take the code — one module or a deterministic pack export — all inside a
single file that stays under a 1.2 MB budget.

### What you get
Production-ready motion snippets you can lift straight into a project, as one
module or one pack — one file either way.
@id
### Apa ini
Khazanah satu file berisi 200 micro-animation terkurasi — SVG, Canvas, DOM/CSS, CSS
3D — plus konsol untuk menjelajah, menguji, dan mengekstraknya.

### Alurnya
Jelajahi katalog dengan metrik pulse langsung, buka modul mana pun untuk mengujinya
di tempat, lalu ambil kodenya — satu modul atau ekspor pack deterministik — semuanya
dalam satu file yang tetap di bawah anggaran 1,2 MB.

### Yang kamu dapat
Snippet gerak siap produksi yang bisa langsung diangkat ke proyek, sebagai satu
modul atau satu pack — dua-duanya tetap satu file.

## promptcraft
emoji: ✒️
name: PromptCraft
tagline.en: Say it rough. Send it sharp. — prompt articulation studio.
tagline.id: Say it rough. Send it sharp. — studio artikulasi prompt.
itch.en: Most prompts say less than their author meant — and the answers show it.
itch.id: Kebanyakan prompt menyampaikan lebih sedikit dari maksud penulisnya — dan jawabannya memperlihatkan itu.
year: 2026
stack: single HTML, Standard v2
tag: prompting
tag: articulation
tag: byoai
origin: factory
codename: Pahat
link: Launch = tools/promptcraft.html
swatch: #075985

@en
### What it is
A prompt articulation studio — a chisel for prompts: say it rough, send it sharp.

### How it flows
Draft roughly, and the studio carves your words deterministically through proven
articulation levels and structure. No AI inside, endpoints editable as plain data,
and zero model names hardcoded — so it never expires with a vendor.

### What you get
A precision prompt at three altitudes with honest markers, a lint receipt, and a
ledger of everything you've sharpened.
@id
### Apa ini
Studio artikulasi prompt — pahat untuk prompt: tulis kasar, kirim tajam.

### Alurnya
Tulis draf seadanya, dan studio memahat kata-katamu secara deterministik lewat level
dan struktur artikulasi yang teruji. Tanpa AI di dalamnya, endpoint bisa diedit
sebagai data biasa, dan nol nama model yang di-hardcode — jadi ia tak pernah
kedaluwarsa bersama satu vendor.

### Yang kamu dapat
Prompt presisi di tiga ketinggian dengan marker jujur, resi lint, dan ledger dari
semua yang pernah kamu tajamkan.

## codearmor
emoji: 🛡️
name: CodeArmor
tagline.en: One project in. One armored file out. — client-side code protection console.
tagline.id: One project in. One armored file out. — konsol proteksi kode sisi klien.
itch.en: Client-side code ships naked — and most protection tools oversell what hiding can do.
itch.id: Kode sisi klien terkirim telanjang — dan kebanyakan tool proteksi melebih-lebihkan kemampuan menyembunyikan.
year: 2026
stack: single HTML, Standard v2
tag: protection
tag: obfuscation
tag: security
origin: factory
codename: Zirah
link: Launch = tools/codearmor.html
swatch: #991B1B

@en
### What it is
A client-side protection console: drop a hand-written page or any bundler export,
and get back one hardened, self-contained HTML file. No AI, no backend, zero
network by default.

### How it flows
Pick your rung on the Threat Ladder — every layer states plainly what it defends
against and what it can't — then armor the file. The limits are part of the
product, not the fine print.

### What you get
One armored file with a signed build receipt listing exactly which defenses were
applied — protection with its limits printed on the tin.
@id
### Apa ini
Konsol proteksi sisi klien: jatuhkan halaman tulisan tangan atau hasil build bundler
apa pun, dan terima kembali satu file HTML mandiri yang sudah dikeraskan. Tanpa AI,
tanpa backend, nol jaringan secara default.

### Alurnya
Pilih anak tanggamu di Threat Ladder — tiap lapisan menyatakan terang-terangan apa
yang ia tahan dan apa yang tidak bisa — lalu armor file-nya. Batasan adalah bagian
dari produk, bukan catatan kaki.

### Yang kamu dapat
Satu file ter-armor dengan resi build bertanda tangan yang mencantumkan persis
pertahanan mana saja yang diterapkan — proteksi dengan batasnya tercetak di
kemasan.

## critiquespike
emoji: 🌶️
name: CritiqueSpike
tagline.en: Every claim on trial. — claim stress-testing console (BYOAI).
tagline.id: Every claim on trial. — konsol uji-tekan klaim (BYOAI).
itch.en: Feedback either flatters or flattens — it rarely interrogates.
itch.id: Umpan balik biasanya memuji atau menjatuhkan — jarang menginterogasi.
year: 2026
stack: single HTML, Standard v2
tag: critique
tag: reasoning
tag: byoai
status: live
origin: factory
codename: Rawit
link: Launch = tools/critiquespike.html
swatch: #3F6212

@en
### What it is
A claim stress-testing console: paste any text — a pitch, an essay, a plan — and
put its claims on trial.

### How it flows
The console stages the trial with declared stances and a public evidence
quarantine; any AI argues it, and whatever goes unproven wears an honest
"untested" badge instead of quietly passing.

### What you get
A verdict band, copy-ready follow-up questions, one or two blunt insights, and a
constructive closing comment — critique that ends in ammunition, not vibes.
@id
### Apa ini
Konsol uji-tekan klaim: tempel teks apa pun — pitch, esai, rencana — dan sidangkan
klaim-klaimnya.

### Alurnya
Konsol menggelar sidang dengan sikap terdeklarasi dan karantina bukti publik; AI
mana pun yang berargumen, dan apa pun yang tak terbukti mengenakan lencana
"untested" yang jujur alih-alih lolos diam-diam.

### Yang kamu dapat
Pita vonis, pertanyaan lanjutan siap salin, satu-dua insight lugas, dan komentar
penutup yang membangun — kritik yang berakhir sebagai amunisi, bukan vibes.

## superdocs
emoji: 📖
name: SuperDocs
tagline.en: Documentation that makes strangers believe. — one story, every surface (BYOAI).
tagline.id: Documentation that makes strangers believe. — satu cerita, semua permukaan (BYOAI).
itch.en: Docs are written for readers who already believe — strangers bounce, and users find no help inside the product.
itch.id: Dokumentasi ditulis untuk yang sudah percaya — orang asing memantul, dan user tak menemukan bantuan di dalam produk.
year: 2026
stack: single HTML, Standard v2
tag: documentation
tag: storytelling
tag: byoai
origin: factory
codename: Hikayat
link: Launch = tools/superdocs.html
swatch: #0F766E

@en
### What it is
A documentation persuasion studio: one gated story contract, pressed onto every
surface documentation lives on.

### How it flows
Paste the project — even its own HTML — and the studio compiles a staged job any AI
fills section by section. Compose parses the fragments back with refusals that name
exactly what's wrong, then one press mints four faces: a Story page for strangers,
a drop-in Companion your live app embeds as its in-app manual, a README, and an
llms.txt.

### What you get
Four self-contained faces from one source of truth — each carrying a receipt whose
coverage is computed, never claimed.
@id
### Apa ini
Studio persuasi dokumentasi: satu kontrak cerita ter-gate, dicetak ke tiap permukaan
tempat dokumentasi hidup.

### Alurnya
Tempel proyeknya — bahkan HTML-nya sendiri — dan studio mengompilasi job bertahap
yang diisi AI mana pun seksi demi seksi. Compose mem-parse fragmennya kembali dengan
penolakan yang menyebut persis apa yang salah, lalu satu kali cetak melahirkan empat
wajah: halaman Story untuk orang asing, Companion tempel-sekali yang jadi manual di
dalam app live-mu, README, dan llms.txt.

### Yang kamu dapat
Empat wajah mandiri dari satu sumber kebenaran — masing-masing membawa resi yang
coverage-nya dihitung, bukan diklaim.

## cvforge
emoji: 🪪
name: CVForge
tagline.en: One record in. Any résumé out. — the living-résumé studio.
tagline.id: One record in. Any résumé out. — studio résumé hidup.
itch.en: One career, two documents — a record you maintain and a résumé you re-layout, forever drifting apart.
itch.id: Satu karier, dua dokumen — record yang dirawat dan résumé yang ditata ulang, selamanya saling menjauh.
year: 2026
status: live
stack: single HTML, Standard v2
tag: cv
tag: editor
tag: byoai
origin: factory
codename: Riwayat
link: Launch = tools/cvforge.html
swatch: #3730A3

@en
### What it is
The living-résumé studio: one structured record is the single source of truth, and
Markdown or PDF are just faces it wears.

### How it flows
Edit the record once in the structured Desk, then press it — a polished Markdown
face, or a print-perfect PDF face with a measured page meter. The Vault round-trips
every save byte-identically, and a BYOAI Tailor lands AI-tailored variants as new
drafts — never over your record.

### What you get
A CV you edit in minutes and press forever: every new application is a press, not a
layout afternoon.
@id
### Apa ini
Studio résumé hidup: satu record terstruktur adalah satu-satunya sumber kebenaran,
dan Markdown atau PDF hanyalah wajah yang dikenakannya.

### Alurnya
Edit record-nya sekali di Desk terstruktur, lalu cetak — wajah Markdown yang
polished, atau wajah PDF siap-cetak dengan meteran halaman terukur. Vault
me-round-trip tiap simpanan identik byte demi byte, dan Tailor BYOAI mendaratkan
varian racikan AI sebagai draft baru — tak pernah menimpa record-mu.

### Yang kamu dapat
CV yang diedit dalam hitungan menit dan dicetak selamanya: tiap lamaran baru adalah
sekali cetak, bukan sore penuh tata letak.

## anggrek-classifier
emoji: 🌺
name: Anggrek Classifier
tagline.en: My thesis — orchid genus classification with ConvNets.
tagline.id: Skripsiku — klasifikasi genus anggrek dengan ConvNet.
year: 2021
stack: Python, TensorFlow
tag: ml
tag: research

## nicevizual
emoji: 📊
name: NiceVizual
tagline.en: Quick, clean data visuals without opening a design tool.
tagline.id: Visual data cepat dan bersih tanpa buka tool desain.
year: 2024
tag: single-file
tag: tool

## nicelist
emoji: ✅
name: NiceList
tagline.en: A list app so plain it refuses to become a productivity system.
tagline.id: Aplikasi list yang saking polosnya menolak jadi sistem produktivitas.
year: 2024
tag: single-file
tag: tool

## cheatsheet
emoji: 📋
name: CheatSheet
tagline.en: Personal reference cards, one HTML file each.
tagline.id: Kartu referensi pribadi, satu file HTML per kartu.
year: 2024
tag: single-file
tag: tool

## satuklik
emoji: 🖱️
name: SatuKlik
tagline.en: One-click utilities for chores I refuse to do twice.
tagline.id: Utilitas sekali-klik untuk kerjaan yang malas kuulang dua kali.
year: 2024
tag: single-file
tag: tool

## the-readerrr
emoji: 📖
name: The Readerrr
tagline.en: A calmer reading mode for long articles.
tagline.id: Mode baca yang lebih tenang untuk artikel panjang.
year: 2023
tag: tool

## atoz-mind
emoji: 🧠
name: ATOZ Mind
tagline.en: An A-to-Z personal knowledge index experiment.
tagline.id: Eksperimen indeks pengetahuan pribadi dari A sampai Z.
year: 2023
tag: knowledge

## right-tr4ck
emoji: 🛤️
name: Right Tr4ck
tagline.en: A tiny habit-and-direction tracker.
tagline.id: Pelacak kebiasaan-dan-arah mungil.
year: 2023
tag: tool

## deepdive
emoji: 🤿
name: DeepDive
tagline.en: Structured deep-research sessions, timeboxed.
tagline.id: Sesi riset mendalam terstruktur, dengan batas waktu.
year: 2024
tag: knowledge

## know-yourself-101
emoji: 🪞
name: Know Yourself 101
tagline.en: Self-inventory worksheets that ask better questions.
tagline.id: Lembar inventaris diri dengan pertanyaan yang lebih baik.
year: 2022
tag: play

## design-showcase
emoji: 🎨
name: Design Showcase
tagline.en: Curated shots of my visual explorations.
tagline.id: Kurasi eksplorasi visualku.
year: 2022
tag: design

## insight-stories
emoji: 💡
name: Insight Stories
tagline.en: Short visual essays on things I keep noticing.
tagline.id: Esai visual pendek tentang hal-hal yang terus kuperhatikan.
year: 2023
tag: writing

## petualangan-oemar
emoji: 🧒
name: Petualangan Oemar
tagline.en: An illustrated children's adventure side quest.
tagline.id: Side quest petualangan anak berilustrasi.
year: 2022
tag: illustration
tag: play
