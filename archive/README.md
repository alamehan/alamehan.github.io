# Portfolio Archive (`V1 → V5`)

> **Permanent Chronological Portfolio Museum (`@alamehan`):** All four legacy personal portfolio editions (**V1–V4**, including V4's standalone **Tools Showcase**) curated, compressed, privacy-sanitized, and hardened for **100% offline double-click `file://` execution** with zero HTTP server and zero external network dependencies — preserved alongside the flagship **Portfolio V5 · Tools Factory Ecosystem**.

---

## 1. Complete Evolution Comparison (`V1 → V5`)

| Dimension | **V1 · Classic Web** *(2019–2022)* | **V2 · React Showcase** *(2023–2025)* | **V3 · Portfolio OS** *(Feb 2026)* | **V4 · Living Spec** *(Jul 2026)* | **V5 · Tools Factory** *(Nov 2026–Now)* |
|---|---|---|---|---|---|
| **Archive Entry (`file://`)** | [v1/index.html](v1/index.html) (`3.76 MB`) | [v2/index.html](v2/index.html) (`2.08 MB`) | [v3/index.html](v3/index.html) (`10.15 MB`) | [v4/index.html](v4/index.html) + [v4/tools/index.html](v4/tools/index.html) (`1.01 MB`) | [WORKSHOP.html](../WORKSHOP.html) / `release/<date>/index.html` (`~3.1 MB`) |
| **Codename & Stack** | `classic` · HTML, Bootstrap & jQuery | `react` · React, Vite & SVG | `orbit` · React, Zen Mode & OrbitWheel | `spec` · Single-HTML, Markdown & Dioramas | `factory` · Mehan Design System, `SceneForge` & 7 Offline Apps |
| **Architecture & Offline** | Multi-page HTML/jQuery (originally `231 MB` with nested side folders) | SPA React + Vite (originally required HTTP server for `/assets/`) | SPA React + Zen Mode (originally `96 MB` raw PNGs, required server) | Single-HTML + embedded Markdown/SVG + standalone `tools/index.html` (originally had GoatCounter + `10.6 MB` old `tools/*.html`) | **100% Local-First Zero-CDN** (`file://` native, strict CSP, dual Workshop + Public release) |
| **Visual & Motion** | Static classic layout with jQuery flip & slider transitions | Flat vector SVG illustrations & standard grid layout | Exploratory **OrbitWheel**, **Swipeable Card Deck** & 5 visual themes | Editorial typography, calm dioramas & V4 Tools 4-view (`Deck/Orbit/Grid/Table`) | **Most Alive:** Mehan Tactile Depth (`D-36`), 5 seamless **300% `SceneForge` 2.5D/3D** scenes, custom kinetic icons & avatars |
| **UX & Navigation** | Long classic landing page + separate `portfolios.html` | Simple single-page scroll with minimal deep exploration | Rich interactive experiments with denser controls & higher cognitive load | Technical spec-reader format (strong for engineers, denser for HR) | **Most Practical:** 1 unified topbar, 3-point draggable Bottom Sheet on mobile, intuitive filters & full EN/ID |
| **Case Studies & Resume** | Brief cards + legacy static CV PDF downloads | Compact project cards without deep case-study drawers | Separate biography & project decks backed by static data | Embedded Markdown sections + single static `resume.pdf` link | **Dual-Lock Master CV Sync**, 5-Block Case Study Drawer + Fullscreen Lightbox, **3-Tone Printable PDF CV** (*All-HR / Balanced / Specialist*) |
| **Product Ecosystem** | Scattered external links to early hobby experiments | External links paired with manually nested sub-folders | Standalone prompt & concept references | Standalone `tools/index.html` showcase + duplicated static tool snapshots | **7 Unified Ready Tools** (`@alamehan` local-first suite) + integrated **`@alamehan · Console`** |

> **Why Portfolio V5 Is the Pinnacle Edition:**
> V5 synthesizes the personal warmth of **V1**, the React modularity of **V2**, the visual & interactive ambition of **V3**, and the living-specification rigor of **V4** into one cohesive **Design System + Engineering + 7-App Ecosystem** — visually alive with 2.5D/3D motion, effortlessly practical for both recruiters and engineers across Desktop & Mobile, strictly privacy-safe, and continuously verified by `pnpm check` and `pnpm release`.

---

## 2. How to Open Any Edition (Zero Server Required)

1. **Direct Double-Click (`file://`):** Open `archive/v1/index.html`, `archive/v2/index.html`, `archive/v3/index.html`, `archive/v4/index.html`, or `archive/v4/tools/index.html` directly in Chrome, Edge, or Safari. Every archive embeds offline fonts (`Figtree`/`Geist Mono` aliased to original families), guards stripped/dead links cleanly so clicks never hit 404 errors, and carries a dismissible bottom-right **Archive Bar** (`[V1] [V2] [V3] [V4] | ← Portfolio V5`).
2. **Inside Portfolio V5 (`@alamehan · Console` — Strictly 2 Secret Doors):**
   - **Door 1 (Desktop Keyboard):** Type **`alamehan`** anywhere outside text inputs.
   - **Door 2 (Mobile & Universal):** Triple-click / **3× tap** on the **`Portfolio V5`** colophon in the footer.
   - **Extensible Commands:** `help`, `archive` / `ls`, `v1` (`classic`) .. `v4` (`spec`), `v5` (`factory`), `labs` (`early-labs` — opens the standalone **Early Labs (2021–2022)** pre-factory experiments hub in [early-labs/index.html](early-labs/index.html)), `compare`, `whoami`, `cats`, `clear`, `exit` — accompanied by an offline canvas confetti burst, Web Audio unlock fanfare, and welcome toast.

---

## 3. Curation, Compression & Privacy Sanitization Ledger

Total archive footprint reduced by **95.0%** (from **`341.22 MB`** of tangled legacy commits down to **`17.00 MB`** clean, including offline embedded fonts and V4's standalone Tools showcase):

- **V1 (`231.03 MB` → `3.76 MB`):** Stripped non-portfolio folders (`apps/`, `epub/`, `road/`, `sheet/`, `mind/`, `mind-v2/`, `links/`, `news/`, `letter/`, `wedding-*`), deleted `assets/cv/*.pdf`, masked `0857-7971-86XX`, removed Hotjar & Google Fonts CDN, embedded offline `Source Sans Pro` fallback, guarded legacy `window.open(...)` & CV buttons, converted heavy rasters to `.webp`, and fixed `jQuery` script load order and missing `ajax-loader.gif`.
- **V2 (`2.08 MB` clean):** Extracted pure portfolio from `cf927fdc` without nested legacy folders or hidden PDFs, stripped Google Fonts `@import`, embedded offline `@fontsource-variable/figtree` aliased to `"DM Sans"`, inlined CSS + JS into `<script type="module">` to eliminate `file://` CORS failures, rewrote `/assets/` → `./assets/`, and guarded stripped project links.
- **V3 (`96.09 MB` → `10.15 MB`):** Converted all 48 uncompressed project PNGs (`92.7 MB`) into crisp `.webp`, fixed broken root-absolute `"/images/projects/*.png"` paths to `"./images/projects/*.webp"`, inlined CSS + JS with local `mermaid.min.js`, stripped Google Fonts `@import` & embedded offline `Inter`/`Space Grotesk`/`JetBrains Mono` aliases, and sanitized personal phone (`0857-7971-8640`) & home sub-district (`Cibadak, Sukabumi` → `Jakarta, Indonesia`).
- **V4 (`12.07 MB` → `1.01 MB`):** Kept V4's genuine standalone [v4/tools/index.html](v4/tools/index.html) showcase (with Family Orbit & 4 views `Deck/Orbit/Grid/Table`) while stripping the 20 duplicated legacy tool `.html` snapshots (`10.63 MB`), `assets/cv/resume.pdf`, GoatCounter telemetry, and Google Fonts CDN; embedded offline `"Fustat"` alias; inverted embedded `<script type="text/leaf">` & `<script type="text/svg-slot">` loaders for zero `file://` errors; and guarded omitted tool links & table row clicks cleanly.

Every invariant above is locked by automated tests in `tools/console/tests/portfolio-archive.test.ts` and verified offline in headless Chromium during `pnpm release`.

---

## 4. Reference Lineage Realized in Portfolio V5 (`Console 1.15.0`)

`archive/v3/index.html` (**V3 · Portfolio OS**) and `archive/v4/tools/index.html` (**V4 · Tools Showcase**) served as the live interactive design references for V5's 4-way auto-synced Tools Factory catalog switcher (**`Cards | Table | Deck | Orbit`**):
- **`Deck` (`ToolsDeckView.tsx`):** Collectible 5-card fanned stack across every viewport (`1366 px`, `590 px`, and `375 px`) with 2-beat physical throw-out & tuck-behind choreography, pointer swipe & flick velocity physics, subtle 3D tilt & specular glare sheen, `42 px` raised circular Mehan orb controls, and a Mehan Tactile Control Dock.
- **`Orbit` (`ToolsOrbitView.tsx`):** Adaptive dual-ring counter-rotating astrolabe (`CW` Inner ⇄ `CCW` Outer) with sculpted rounded-corner annular sectors, seamless 12-o'clock crown auto-sync (paired with Center Hub reading lock), ring-only velvet hover-brake & Light/Dark pastel wedge tints, counter-geared circular drag-to-spin, upright WebKit-safe forged `tficon: 2` icons, search ghosting, automatic promotion from Precision Astrolabe Bezel (`N <= 8`) to Dual Active Tool Rings (`N >= 9`), twin Mehan Control Dock, and a unified above-the-fold phone Summary-Dock.
