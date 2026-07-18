---
format: leaf/1
---

<!-- Personal experiments & the @alamehan product family, on one standard. Every factory app
     (04-scaffold/apps/) MUST have its Leaf here — presence, identity sync (emoji/name/swatch vs
     the APPS manifest) and the Launch link are gated by `node 05-orbit/derive.mjs --check`.
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
itch.en: The way sixteen products were born lived only in my habits.
itch.id: Cara enam belas produk lahir cuma hidup di kebiasaanku.
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
### The itch
Sixteen products were born the same way — an itch, a template, an AI — but the way itself lived only in my habits.

### What I built
The factory as a product: an identity forge with live collision math, a config contract (`zapseed-job: 1`), one compiled PROMPT.md, and a meta-acceptance auditor.

### Did it work?
It bootstrapped itself — its own PRD was the factory's first output, and v1.0 now runs as one HTML file: two BYOAI round-trips, a live collision board, and a 14-check Gavel.

### What it taught me
When a workflow repeats sixteen times, the seventeenth project is the workflow.
@id
### Gatelnya
Enam belas produk lahir dengan cara yang sama — keresahan, template, AI — tapi caranya sendiri cuma hidup di kebiasaanku.

### Yang aku bikin
Pabrik sebagai produk: penempa identitas dengan hitung tabrakan langsung, kontrak konfigurasi (`zapseed-job: 1`), satu PROMPT.md terkompilasi, dan auditor meta-acceptance.

### Beneran jalan?
Ia melahirkan dirinya sendiri — PRD-nya sendiri adalah keluaran pertama sang pabrik, dan v1.0 kini berjalan sebagai satu file HTML: dua bolak-balik BYOAI, papan tabrakan langsung, dan Gavel 14 pemeriksaan.

### Pelajarannya
Kalau sebuah alur kerja terulang enam belas kali, proyek ketujuh belas adalah alur kerja itu sendiri.

## diagranimate
emoji: 🎬
name: Diagranimate
tagline.en: Your architecture diagrams, alive. — cinematic Mermaid presenter.
tagline.id: Your architecture diagrams, alive. — presenter Mermaid sinematik.
itch.en: Every diagram I shipped was correct — and unreadable.
itch.id: Setiap diagram yang kukirim itu benar — dan tak terbaca.
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
*Codename: **Wayang** — the shadow-puppet stage.*

### The itch
Every architecture diagram I shipped was correct and unreadable — everything at once, change blindness guaranteed.

### What I built
A one-file cinema for Mermaid: progressive states, a delta engine keyed on stable node ids, transport controls, an automatic camera that follows the flow, smart ghosting that dims not-yet-discussed areas, and 60 FPS video export.

### Did it work?
Yes — v1 shipped; audiences follow a system growing instead of decoding a finished maze. Reported: animation build time ~4 hours → ~2 minutes (~120×), roadmap approval ~3 weeks → ~4 days.

### What it taught me
Presentation is an act of sequencing, not decorating.
@id
*Codename: **Wayang** — panggung wayang.*

### Gatelnya
Setiap diagram arsitektur yang kubuat itu benar tapi tak terbaca — semuanya sekaligus, change blindness terjamin.

### Yang aku bikin
Bioskop satu-file untuk Mermaid: state progresif, delta engine berbasis id node stabil, kontrol transport, kamera otomatis yang mengikuti alur, smart ghosting yang meredupkan area yang belum dibahas, dan ekspor video 60 FPS.

### Beneran jalan?
Ya — v1 sudah rilis; audiens mengikuti sistem yang tumbuh, bukan memecahkan labirin jadi. Tercatat: waktu bikin animasi ~4 jam → ~2 menit (~120×), persetujuan roadmap ~3 minggu → ~4 hari.

### Pelajarannya
Presentasi itu soal urutan, bukan dekorasi.

## omnigraph
emoji: 🌐
name: OmniGraph
tagline.en: One line in. The whole map out. — universal knowledge mapper (BYOAI).
tagline.id: One line in. The whole map out. — pemeta pengetahuan universal (BYOAI).
itch.en: Five knowledge frameworks, each sharper than the last — each died as a prompt.
itch.id: Lima framework pemetaan, makin lama makin tajam — semuanya mati sebagai prompt.
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
*Codename: **Semesta** — the universe.*

### The itch
Five generations of frameworks (UKS → Omega → Construct → Atlas → Omni Atlas) each mapped knowledge better — and each died as a prompt.

### What I built
One console around one contract (`ogm: 1`): forge a brief, round-trip any AI, render the whole territory as a living tree. Shipped in two major generations (V1 and V2).

### Did it work?
Yes — the lineage finally converged; maps persist, validate, and travel as plain text.

### What it taught me
When five ancestors keep solving the same problem, the product is the contract they all implied.
@id
*Codename: **Semesta**.*

### Gatelnya
Lima generasi framework (UKS → Omega → Construct → Atlas → Omni Atlas) makin jago memetakan pengetahuan — dan semuanya mati sebagai prompt.

### Yang aku bikin
Satu konsol untuk satu kontrak (`ogm: 1`): tempa brief, bolak-balik ke AI mana pun, render seluruh wilayah sebagai pohon hidup. Dirilis dalam dua generasi besar (V1 dan V2).

### Beneran jalan?
Ya — silsilahnya akhirnya menyatu; peta tersimpan, tervalidasi, dan berpindah sebagai teks biasa.

### Pelajarannya
Kalau lima leluhur terus memecahkan masalah yang sama, produknya adalah kontrak yang mereka isyaratkan.

## svganimator
emoji: 🌀
name: SVGAnimator
tagline.en: Your brand, in motion. — brand SVG motion console.
tagline.id: Your brand, in motion. — konsol motion SVG untuk brand.
itch.en: Brand motion was already systematic — in six docs only I could operate.
itch.id: Motion brand sudah sistematis — di enam dokumen yang cuma bisa kuoperasikan sendiri.
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
*Codename: **Nadi** — the pulse.*

### The itch
The Motion Engine System proved brand motion could be systematic — but it lived in six markdown docs only I could operate.

### What I built
One HTML console: drop a brand SVG, compose motions from the engine packs, export one self-contained snippet.

### Did it work?
Yes — the doc stack became a tool anyone can run by double-click; the packs finally outlived their author.

### What it taught me
A methodology isn't real until a stranger can use it without you in the room.
@id
*Codename: **Nadi**.*

### Gatelnya
Motion Engine System membuktikan animasi brand bisa sistematis — tapi hidup di enam dokumen markdown yang cuma aku yang bisa pakai.

### Yang aku bikin
Satu konsol HTML: jatuhkan SVG brand, racik gerak dari paket engine, ekspor satu snippet mandiri.

### Beneran jalan?
Ya — tumpukan dokumen jadi tool yang bisa dijalankan siapa pun dengan dobel klik; paketnya akhirnya hidup melampaui penulisnya.

### Pelajarannya
Metodologi belum nyata sampai orang asing bisa memakainya tanpa kamu di ruangan.

## motionplain
emoji: 🎞️
name: MotionPlain
tagline.en: One brief in. A polished explainer out. — explainer-video studio (BYOAI).
tagline.id: One brief in. A polished explainer out. — studio video explainer (BYOAI).
itch.en: Briefs did become videos — through a pipeline nobody else could install.
itch.id: Brief memang jadi video — lewat pipeline yang tak bisa dipasang siapa pun selain aku.
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
*Codename: **Layar** — the screen.*

### The itch
Motion Explainer Studio proved briefs can become videos — through a Pillow+ffmpeg pipeline nobody else could install.

### What I built
The same idea as one HTML file: a versioned brief contract, a validating Analyst, a browser Stage, client-side export.

### Did it work?
Yes — the pipeline died, the product lived; briefs now render anywhere a browser exists.

### What it taught me
If the toolchain is the barrier, the toolchain is the bug.
@id
*Codename: **Layar**.*

### Gatelnya
Motion Explainer Studio membuktikan brief bisa jadi video — lewat pipeline Pillow+ffmpeg yang tak bisa dipasang orang lain.

### Yang aku bikin
Ide yang sama sebagai satu file HTML: kontrak brief ber-versi, Analyst yang memvalidasi, Stage di browser, ekspor sisi klien.

### Beneran jalan?
Ya — pipeline-nya mati, produknya hidup; brief kini ter-render di mana pun ada browser.

### Pelajarannya
Kalau toolchain jadi penghalang, toolchain itulah bug-nya.

## contentos
emoji: ⚗️
name: ContentOS
tagline.en: Raw in. Ready out. — content processing OS (BYOAI).
tagline.id: Raw in. Ready out. — OS pemroses konten (BYOAI).
itch.en: Three overlapping content systems, gold everywhere — and zero machine.
itch.id: Tiga sistem konten tumpang tindih, emas di mana-mana — mesinnya nol.
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
*Codename: **Kilang** — the refinery.*

### The itch
MAP had ~120 activities, OPE had 48 protocols, the prompt vault had gold — three overlapping documents, zero machine.

### What I built
One OS around a versioned process registry: compile a job, round-trip any AI, lint the reply, shelve the receipt.

### Did it work?
Yes — the three documents retired the day the registry could run all of them.

### What it taught me
A library of prompts is inventory; a registry with contracts is a factory.
@id
*Codename: **Kilang**.*

### Gatelnya
MAP punya ~120 aktivitas, OPE punya 48 protokol, vault prompt punya emas — tiga dokumen tumpang tindih, nol mesin.

### Yang aku bikin
Satu OS di atas registry proses ber-versi: kompilasi job, bolak-balik AI mana pun, lint balasannya, simpan resinya.

### Beneran jalan?
Ya — ketiga dokumen itu pensiun tepat saat registry bisa menjalankan semuanya.

### Pelajarannya
Perpustakaan prompt itu inventaris; registry dengan kontrak itu pabrik.

## specpilot
emoji: 📐
name: SpecPilot
tagline.en: Spec first, fly later. — idea→spec→wireframe cockpit (BYOAI).
tagline.id: Spec first, fly later. — kokpit ide→spec→wireframe (BYOAI).
itch.en: Great specs were born in chat — then the chat scrolled away.
itch.id: Spec hebat lahir di chat — lalu chat-nya tergulung hilang.
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
*Codename: **Denah** — the floor plan.*

### The itch
IDEA™ and CUE-Flow™ produced great specs in chat — then the chat scrolled away and the method left with it.

### What I built
One cockpit with two round trips: spec brief and blueprint, both versioned, both linted, both exportable.

### Did it work?
Yes — the protocols survived their chats; specs now land as files, not memories.

### What it taught me
A protocol without a cockpit is a story; with one, it's a vehicle.
@id
*Codename: **Denah**.*

### Gatelnya
IDEA™ dan CUE-Flow™ menghasilkan spec bagus di chat — lalu chat-nya tergulung dan metodenya ikut pergi.

### Yang aku bikin
Satu kokpit dengan dua round trip: spec brief dan blueprint, keduanya ber-versi, ter-lint, dan bisa diekspor.

### Beneran jalan?
Ya — protokolnya selamat dari chat; spec kini mendarat sebagai file, bukan ingatan.

### Pelajarannya
Protokol tanpa kokpit itu cerita; dengan kokpit, ia kendaraan.

## protopilot
emoji: 🕹️
name: ProtoPilot
tagline.en: Your flow, on autopilot. — clickable-prototype prompt forge (BYOAI).
tagline.id: Your flow, on autopilot. — penempa prompt prototipe klik (BYOAI).
itch.en: A 700-line ghost prompt summoned great prototypes — and vanished every session.
itch.id: Prompt hantu 700 baris memanggil prototype hebat — dan lenyap tiap sesi.
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
*Codename: **Kemudi** — the helm.*

### The itch
Phantom Flow was a 700-line ghost prompt that summoned great prototypes — and vanished with every session.

### What I built
A console that forges the same power as a versioned job, previews the returned prototype, and keeps every run.

### Did it work?
Yes — the ghost got a body; prototypes now persist, replay, and improve.

### What it taught me
Branding a tool as magic hides its machinery; products need both visible.
@id
*Codename: **Kemudi**.*

### Gatelnya
Phantom Flow adalah prompt hantu 700 baris yang memanggil prototipe hebat — dan lenyap di tiap sesi.

### Yang aku bikin
Konsol yang menempa kekuatan yang sama sebagai job ber-versi, mem-preview prototipe balasan, dan menyimpan tiap run.

### Beneran jalan?
Ya — hantunya dapat tubuh; prototipe kini bertahan, bisa diputar ulang, dan membaik.

### Pelajarannya
Mem-branding tool sebagai sihir menyembunyikan mesinnya; produk butuh keduanya terlihat.

## uxmakeover
emoji: 🪞
name: UXMakeover
tagline.en: Every fix, explained. — UX audit & makeover studio (BYOAI).
tagline.id: Every fix, explained. — studio audit & makeover UX (BYOAI).
itch.en: My UX audits were flawless in my head — and inconsistent everywhere else.
itch.id: Audit UX-ku rapi di kepala — dan tak konsisten di mana pun selain itu.
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
*Codename: **Cermin** — the mirror.*

### The itch
Two frameworks (Alamehan UX 3.0 + Makeover 3.1) audited beautifully in my head and inconsistently everywhere else.

### What I built
One studio that compiles the frameworks into audit jobs and renders explained, prioritized makeovers.

### Did it work?
Yes — the audits became repeatable; juniors get the same rigor I'd give.

### What it taught me
Expertise scales the moment its reasons are written down.
@id
*Codename: **Cermin**.*

### Gatelnya
Dua framework (Alamehan UX 3.0 + Makeover 3.1) mengaudit indah di kepalaku dan tidak konsisten di mana pun selain itu.

### Yang aku bikin
Satu studio yang mengompilasi framework jadi job audit dan me-render makeover yang terjelaskan dan terprioritas.

### Beneran jalan?
Ya — auditnya jadi bisa diulang; junior pun dapat ketelitian yang sama seperti dariku.

### Pelajarannya
Keahlian baru bisa diskalakan saat alasannya dituliskan.

## superstudio
emoji: 🎨
name: SuperStudio
tagline.en: One style, every asset. — style-consistent asset studio (BYOAI).
tagline.id: One style, every asset. — studio aset konsisten-gaya (BYOAI).
itch.en: Eight documents each held a piece of style mastery — none could ship an asset.
itch.id: Delapan dokumen masing-masing pegang serpihan ilmu style — tak satu pun bisa merilis aset.
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
*Codename: **Sanggar** — the atelier.*

### The itch
Eight documents — Idea Weaver→ACE, SIMA→DAE, the Encyclopedia, CORE, PVP — each held a piece of style mastery; none could ship an asset.

### What I built
One studio: a curated style Vault, a deterministic Assembler, style-locked jobs, fidelity gates.

### Did it work?
Yes — the bloodlines merged; assets now match each other before they match the brief.

### What it taught me
Curation beats collection: twelve gated seeds outperform two hundred raw samples.
@id
*Codename: **Sanggar**.*

### Gatelnya
Delapan dokumen — Idea Weaver→ACE, SIMA→DAE, Encyclopedia, CORE, PVP — masing-masing memegang sekeping penguasaan gaya; tak satu pun bisa merilis aset.

### Yang aku bikin
Satu sanggar: Vault gaya terkurasi, Assembler deterministik, job terkunci-gaya, gerbang fidelitas.

### Beneran jalan?
Ya — dua garis darah menyatu; aset kini serasi satu sama lain sebelum serasi dengan brief.

### Pelajarannya
Kurasi mengalahkan koleksi: dua belas benih tergerbang mengalahkan dua ratus sampel mentah.

## bizventure
emoji: 🚀
name: BizVenture
tagline.en: Values in. Ventures out. — value-driven venture ideation console (BYOAI).
tagline.id: Values in. Ventures out. — konsol ideasi venture berbasis nilai (BYOAI).
itch.en: Every generation of my ideation frameworks got sharper — and stayed trapped in documents.
itch.id: Tiap generasi framework ideasiku makin tajam — dan tetap terkurung di dokumen.
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
*Codename: **Niaga** — commerce.*

### The itch
Four generations of ideation frameworks (GEM→HVE→VDI→VIBE) kept getting sharper — and staying trapped in documents.

### What I built
One console around the Value Codex: spark briefs out, blueprints back, ten gates between an idea and a claim.

### Did it work?
Yes — the chain became a loop; ideation now leaves receipts instead of vibes.

### What it taught me
Every framework generation was a patch note; the product is the changelog compiled.
@id
*Codename: **Niaga**.*

### Gatelnya
Empat generasi framework ideasi (GEM→HVE→VDI→VIBE) makin tajam — dan tetap terperangkap di dokumen.

### Yang aku bikin
Satu konsol di atas Value Codex: spark brief keluar, blueprint kembali, sepuluh gerbang antara ide dan klaim.

### Beneran jalan?
Ya — rantainya jadi loop; ideasi kini meninggalkan resi, bukan sekadar vibe.

### Pelajarannya
Tiap generasi framework itu patch note; produknya adalah changelog yang terkompilasi.

## bizvault
emoji: 🏦
name: BizVault
tagline.en: Raw IP in, launch-ready ecosystem out. — IP→product ecosystem vault (BYOAI).
tagline.id: Raw IP in, launch-ready ecosystem out. — brankas IP→ekosistem produk (BYOAI).
itch.en: The monetization framework kept improving — while my own IP sat unmonetized.
itch.id: Framework monetisasinya terus membaik — sementara IP-ku sendiri tak menghasilkan apa-apa.
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
*Codename: **Brankas** — the vault.*

### The itch
Four generations of a document-to-money framework each explained monetization better — while my own IP sat unmonetized.

### What I built
One vault: deposit IP, compile the ecosystem job, round-trip any AI, audit until launch-ready.

### Did it work?
Yes — the framework finally ate its own cooking; the worked example ships inside.

### What it taught me
Advice that never runs is opinion; a vault with gates is a business.
@id
*Codename: **Brankas**.*

### Gatelnya
Empat generasi framework dokumen-ke-uang makin jago menjelaskan monetisasi — sementara IP-ku sendiri menganggur.

### Yang aku bikin
Satu brankas: setor IP, kompilasi job ekosistem, bolak-balik AI mana pun, audit sampai siap rilis.

### Beneran jalan?
Ya — framework-nya akhirnya makan masakannya sendiri; contoh nyatanya ikut terkirim di dalam.

### Pelajarannya
Saran yang tak pernah dijalankan itu opini; brankas dengan gerbang itu bisnis.

## llmforge
emoji: ⚒️
name: LLMForge
tagline.en: Same prompt. Honest verdict. — one-shot AI benchmark arena.
tagline.id: Same prompt. Honest verdict. — arena benchmark AI sekali-tembak.
itch.en: A strong benchmark method, five case kits — and manual everything, every time.
itch.id: Metode benchmark kuat, lima kit kasus — dan semuanya manual, setiap kali.
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
*Codename: **Gelanggang** — the arena.*

### The itch
My model benchmarks lived in a Notion hub: strong method, five case kits — and manual everything, every time.

### What I built
One arena file: pinned trials, sandboxed renders, integrity gates, blind weighted scorecards, an exportable podium.

### Did it work?
Yes — verdicts became repeatable and portable; the hub retired.

### What it taught me
Fairness is a mechanism, not an intention.
@id
*Codename: **Gelanggang**.*

### Gatelnya
Benchmark model-ku hidup di hub Notion: metode kuat, lima kit kasus — dan semuanya manual, setiap saat.

### Yang aku bikin
Satu file gelanggang: trial terpatri, render tersandbox, gerbang integritas, scorecard buta berbobot, podium yang bisa diekspor.

### Beneran jalan?
Ya — vonis jadi bisa diulang dan dibawa; hub-nya pensiun.

### Pelajarannya
Keadilan itu mekanisme, bukan niat.

## svgmatrix
emoji: 🧬
name: SVGMatrix
tagline.en: Pick a motion. Take the code. — 200-module micro-animation treasury.
tagline.id: Pick a motion. Take the code. — khazanah 200 modul micro-animation.
itch.en: 200 masterpiece modules, sealed inside a viewer that ignored their own constitution.
itch.id: 200 modul masterpiece tersegel di viewer yang mengabaikan konstitusinya sendiri.
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
*Codename: **Khazanah** — the treasury.*

### The itch
Strand Motion shipped 200 masterpiece modules inside a viewer that ignored the collection's own constitution.

### What I built
The console the rules demanded: a catalog with live pulse metrics, gated modules, deterministic pack export — all within a ≤1.2 MB budget.

### Did it work?
Yes — the 200 finally behave as one product; packs travel as one file.

### What it taught me
A collection becomes a product the day its rules become executable.
@id
*Codename: **Khazanah**.*

### Gatelnya
Strand Motion merilis 200 modul mahakarya di dalam viewer yang mengabaikan konstitusi koleksinya sendiri.

### Yang aku bikin
Konsol yang dituntut aturannya: katalog dengan metrik pulse langsung, modul tergerbang, ekspor pack deterministik — semuanya dalam anggaran ≤1,2 MB.

### Beneran jalan?
Ya — ke-200 modul akhirnya berperilaku sebagai satu produk; pack berpindah sebagai satu file.

### Pelajarannya
Koleksi jadi produk tepat saat aturannya bisa dieksekusi.

## promptcraft
emoji: ✒️
name: PromptCraft
tagline.en: Say it rough. Send it sharp. — prompt articulation studio.
tagline.id: Say it rough. Send it sharp. — studio artikulasi prompt.
itch.en: Prompt craft was teachable — but the app that tried hardcoded one vendor, seven times.
itch.id: Ilmu prompt bisa diajarkan — tapi app yang mencoba malah mengunci satu vendor, tujuh kali.
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
*Codename: **Pahat** — the chisel.*

### The itch
PAT & PPP taught prompt craft; PromptCraft Pro tried to app-ify it and hardcoded one vendor's model seven times.

### What I built
A clean studio: deterministic carving, editable endpoints as data, zero model names in the machine.

### Did it work?
Yes — the craft survived its buggy first app; prompts sharpen in seconds now.

### What it taught me
Hardcoding today's model into a tool is planting an expiry date in the foundation.
@id
*Codename: **Pahat**.*

### Gatelnya
PAT & PPP mengajarkan kriya prompt; PromptCraft Pro mencoba meng-app-kannya dan meng-hardcode model satu vendor tujuh kali.

### Yang aku bikin
Studio yang bersih: pahatan deterministik, endpoint sebagai data yang bisa diedit, nol nama model di mesinnya.

### Beneran jalan?
Ya — kriyanya selamat dari app pertama yang buggy; prompt kini tajam dalam hitungan detik.

### Pelajarannya
Meng-hardcode model hari ini ke dalam tool sama dengan menanam tanggal kedaluwarsa di fondasi.

## codearmor
emoji: 🛡️
name: CodeArmor
tagline.en: One project in. One armored file out. — client-side code protection console.
tagline.id: One project in. One armored file out. — konsol proteksi kode sisi klien.
itch.en: “Ultimate protection” — the one promise client-side tools can never keep.
itch.id: “Perlindungan mutlak” — satu janji yang mustahil ditepati tool client-side.
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
*Codename: **Zirah** — the armor.*

### The itch
Obscura (né JS Ninja Obfuscator) promised "ultimate protection" — the one claim client-side tools can never keep.

### What I built
A rebuilt console around a Threat Ladder: explicit rungs, explicit limits, receipts for what was actually applied.

### Did it work?
Yes — protection with a spine of honesty; users pick trade-offs instead of buying myths.

### What it taught me
The most valuable feature of a security tool is the list of things it cannot do.
@id
*Codename: **Zirah**.*

### Gatelnya
Obscura (dulu JS Ninja Obfuscator) menjanjikan "proteksi ultimat" — satu klaim yang mustahil ditepati tool sisi klien.

### Yang aku bikin
Konsol yang dibangun ulang di atas Threat Ladder: anak tangga eksplisit, batas eksplisit, resi atas apa yang benar-benar diterapkan.

### Beneran jalan?
Ya — proteksi dengan tulang kejujuran; pengguna memilih trade-off, bukan membeli mitos.

### Pelajarannya
Fitur paling berharga dari tool keamanan adalah daftar hal yang tidak bisa ia lakukan.

## critiquespike
emoji: 🌶️
name: CritiqueSpike
tagline.en: Every claim on trial. — claim stress-testing console (BYOAI).
tagline.id: Every claim on trial. — konsol uji-tekan klaim (BYOAI).
itch.en: My sharpest critique frameworks were rituals I had to conduct by hand.
itch.id: Framework kritik tertajamku adalah ritual yang harus kupimpin dengan tangan.
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
*Codename: **Rawit** — the bird's-eye chili.*

### The itch
DRS, Brutal & Bitter Truth, and PICC each sharpened critique — as rituals I had to conduct by hand.

### What I built
One console: trials with declared stances, public evidence quarantine, honest "untested" badges, copy-ready rebuttals.

### Did it work?
Yes — the rituals became a machine; critique now ends in ammunition, not vibes.

### What it taught me
A verdict without a visible trial is just a louder opinion.
@id
*Codename: **Rawit**.*

### Gatelnya
DRS, Brutal & Bitter Truth, dan PICC masing-masing menajamkan kritik — sebagai ritual yang harus kupimpin manual.

### Yang aku bikin
Satu konsol: sidang dengan sikap terdeklarasi, karantina bukti publik, lencana "untested" yang jujur, bantahan siap salin.

### Beneran jalan?
Ya — ritualnya jadi mesin; kritik kini berakhir sebagai amunisi, bukan sekadar rasa.

### Pelajarannya
Vonis tanpa sidang yang terlihat cuma opini yang lebih keras.

## superdocs
emoji: 📖
name: SuperDocs
tagline.en: Documentation that makes strangers believe. — one story, every surface (BYOAI).
tagline.id: Documentation that makes strangers believe. — satu cerita, semua permukaan (BYOAI).
itch.en: One ancestor told the whole story, the other owned the machine — neither reached the user inside the product.
itch.id: Yang satu bercerita utuh, yang lain punya mesin — tak satu pun sampai ke user di dalam produk.
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
*Codename: **Hikayat** — the chronicle.*

### The itch
The Codex told the whole story but rented its engines; ZapDocs owned its machine but told half the story — and neither ever reached the user standing inside the live product, asking "how do I…?"

### What I built
One studio: a 17-section story contract any AI fills in stages, then one press with four dies — a standalone Story page, a drop-in Companion any live app embeds as its in-app manual, a README, an llms.txt — every face gated by its own coverage arithmetic.

### Did it work?
Shipped v1.0 the same day it was forged, then re-pressed twice on the owner's audits before the day ended — v1.2 ships 48/48 self-test, 40/40 e2e, a 17-section arsenal (fewer, fuller), per-section Story layouts in the document's own accent, and a flagship exemplar of a real sibling (Diagranimate) with every number measured and zero placeholders in public prose.

### What it taught me
Documentation nobody can install is a destination; documentation you can embed is a feature.
@id
*Codename: **Hikayat**.*

### Gatelnya
The Codex menceritakan kisah utuh tapi menyewa mesinnya; ZapDocs memiliki mesinnya tapi bercerita setengah — dan keduanya tak pernah menjangkau user yang berdiri di dalam produk live sambil bertanya "gimana caranya…?"

### Yang aku bikin
Satu studio: kontrak cerita 17-seksi yang diisi AI mana pun secara bertahap, lalu satu mesin cetak dengan empat cetakan — halaman Story mandiri, Companion tempel-sekali yang jadi manual di dalam app live mana pun, README, llms.txt — tiap wajah dijaga aritmetika coverage-nya sendiri.

### Beneran jalan?
Dikirim v1.0 di hari yang sama ia ditempa, lalu dicetak ulang dua kali atas audit pemiliknya sebelum harinya berakhir — v1.2 membawa self-test 48/48, e2e 40/40, arsenal 17-seksi (lebih sedikit, lebih penuh), layout Story per-seksi dalam aksen milik dokumennya sendiri, dan exemplar saudara nyata (Diagranimate) dengan tiap angka terukur dan nol placeholder di prosa publik.

### Pelajarannya
Dokumentasi yang tak bisa dipasang cuma destinasi; dokumentasi yang bisa disisipkan adalah fitur.

## cvforge
emoji: 🪪
name: CVForge
tagline.en: One record in. Any résumé out. — the living-résumé studio.
tagline.id: One record in. Any résumé out. — studio résumé hidup.
itch.en: My CV was a beautiful record — and every new PDF was a hand-layout afternoon.
itch.id: CV-ku record yang rapi — tapi tiap PDF baru berarti sore penuh tata-letak manual.
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
*Codename: **Riwayat** — the life-record itself.*

### The itch
The master CV lived as pristine Markdown, yet every new PDF meant a manual layout session in a design tool — and the two drifted the moment one changed.

### What I built
A living-résumé studio around one contract (`cvforge-cv: 1`): a structured Desk, a Press with a polished MD face and a print-perfect, page-metered PDF face, a Vault whose saves round-trip byte-identically, and a BYOAI Tailor that lands replies as new drafts — never over the record.

### Did it work?
The god-example is the proof: the owner's real CV ships inside as the exemplar, exported through the engine itself.

### What it taught me
A document you maintain in two places is one document too many — edit the record, press the faces.
@id
### Gatelnya
CV master tersimpan sebagai Markdown yang rapi, tapi tiap PDF baru berarti sesi tata-letak manual di tool desain — dan keduanya drift begitu salah satunya berubah.

### Yang aku bikin
Studio résumé hidup di sekitar satu kontrak (`cvforge-cv: 1`): Desk terstruktur, Press dengan wajah MD polished dan wajah PDF siap-cetak ber-meteran halaman, Vault yang simpanannya round-trip identik byte demi byte, dan Tailor BYOAI yang mendaratkan balasan sebagai draft baru — tak pernah menimpa record.

### Beneran jalan?
God-example-nya adalah buktinya: CV asli sang owner terpasang di dalamnya sebagai exemplar, diekspor lewat mesinnya sendiri.

### Pelajarannya
Dokumen yang dirawat di dua tempat adalah satu dokumen kelebihan — edit record-nya, cetak wajah-wajahnya.

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
