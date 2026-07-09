# AI/ML History — Interactive Timeline PWA

An interactive, installable PWA that lets you walk through the history of AI/ML research on a visual timeline — exploring relationships between publications, tracking the cross-sections of hardware and software development, overlaying global compute capacity and Moore's Law, and surfacing the neuroinformatics connections between brain science and machine intelligence.

## What's Here

### Interactive Timeline PWA (`pwa/`)

Built on the Cloudflare PWA template (SvelteKit 5 + Bun + TypeScript + Alchemy IaC).

**Features:**
- **133 landmark papers** (1936–2025) across 20 categories, plotted on a timeline by year and domain
- **Cross-paper relationship lines** — see how ideas build on each other (e.g., McCulloch-Pitts → Perceptron → Backprop → AlexNet → ViT)
- **Paper detail panel** — click any paper to see authors, venue, arXiv ID, summary, key concepts, and clickable related papers
- **Category filtering** — toggle any of 20 research domains on/off (Foundations, Symbolic AI, Neural Networks, Deep Learning, Transformers, LLMs, RL, Diffusion, etc.)
- **Full-text search** — filter papers by title, author, or summary
- **Hardware overlay** — 55 compute devices from Colossus (1943) to NVIDIA Rubin (2026), plotted by log-scale performance, color-coded by type (mainframe, CPU, GPU, accelerator, edge, datacenter)
- **Moore's Law overlay** — transistor count trajectory from 2,300 (Intel 4004, 1971) to 208 billion (2024)
- **Global Compute overlay** — total world compute capacity vs AI-specific compute (1950–2026, log scale)
- **Neuroinformatics overlay** — 30 milestones from Cajal's Neuron Doctrine (1904) through Neuralink (2024) and NeuroAI (2026), showing the intersection of brain science and AI
- **Installable PWA** — works offline, installable on mobile/desktop

### Paper Bibliographies (`papers/`)

Exhaustive markdown bibliographies organized by era and domain:

| Category | Lines | Entries | Years |
|----------|-------|---------|-------|
| 00-foundations | 1,181 | ~130 | 1921–1988 |
| 01-symbolic-ai | 1,187 | ~125 | 1959–2004 |
| 06-nlp | 1,232 | ~168 | 2000–2026 |
| 07-transformers | 1,331 | ~177 | 2017–2026 |
| 08-llms | 386 | ~170 | 2018–2026 |

Additional categories (02–05, 09–19) have directory scaffolding but content lives in the PWA dataset.

## Quick Start

```bash
cd pwa
bun install
bun run dev          # http://localhost:5173
```

## Build

```bash
bun run build        # static build → build/
bun run serve 3000   # serve locally
```

## Deploy (Cloudflare)

```bash
bun alchemy login    # one-time
bun run deploy       # → Cloudflare Workers
```

## Stack

| Tool | Role |
|------|------|
| **SvelteKit 5** | SPA framework (runes mode) |
| **Bun** | Runtime, package manager, dev server |
| **TypeScript** | End-to-end type safety |
| **Alchemy** | IaC → Cloudflare Workers |
| **adapter-static** | Tier 1: pure client-side PWA |

## Data Architecture

All data is client-side TypeScript modules — no API calls, no database, fully offline:

```
pwa/src/lib/data/
  papers.ts        # 133 curated papers with relationships, concepts, categories
  hardware.ts      # 55 compute devices + Moore's Law + global compute estimates
  neuro.ts         # 30 neuroinformatics milestones
pwa/src/lib/types/
  index.ts         # Paper, HardwareDevice, NeuroEvent, TimelineFilter types
```

## Categories

Foundations · Symbolic AI · Neural Networks · Statistical Learning · Deep Learning · Computer Vision · NLP · Transformers · LLMs · Reinforcement Learning · Generative Models · Diffusion Models · Alignment & Safety · Multimodal · Scaling & Efficiency · Retrieval & Memory · Agents · Robotics · AI Safety · Interpretability
