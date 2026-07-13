<script lang="ts">
  import { onMount } from "svelte";
  import { allPapers, categoryMeta, yearRange } from "$lib/data/papers";
  import { explainers } from "$lib/data/explainers";
  import type { Paper, PaperCategory } from "$lib/types";
  import ScrollExhibit from "$lib/components/ScrollExhibit.svelte";
  import DetailDrawer from "$lib/components/DetailDrawer.svelte";
  import GlossaryOverlay from "$lib/components/GlossaryOverlay.svelte";
  import OverlayTrack from "$lib/components/OverlayTrack.svelte";
  import AboutPanel from "$lib/components/AboutPanel.svelte";

  // --- State ---
  let hoveredPaper = $state<Paper | null>(null);
  let selectedPaper = $state<Paper | null>(null);
  let activeCategories = $state<Set<PaperCategory>>(
    new Set(Object.keys(categoryMeta) as PaperCategory[]),
  );
  let searchQuery = $state("");
  let showGlossary = $state(false);
  let showAbout = $state(false);
  let showEras = $state(true);
  let showMilestones = $state(true);
  let showHardware = $state(false);
  let showNeuro = $state(false);
  let showCompute = $state(false);
  let hasSeenIntro = $state(
    typeof localStorage !== "undefined" && !localStorage.getItem("atlas-seen"),
  );

  // --- Refs ---
  let scrollExhibit: ScrollExhibit | null = $state(null);
  let glossaryOverlay: GlossaryOverlay | null = $state(null);

  // --- Derived ---
  const minYear = yearRange[0];
  const maxYear = yearRange[1];

  const filteredPapers = $derived(
    allPapers.filter((p) => {
      if (!activeCategories.has(p.category)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q)
        );
      }
      return true;
    }),
  );

  function toggleCategory(cat: PaperCategory) {
    const next = new Set(activeCategories);
    if (next.has(cat)) next.delete(cat);
    else next.add(cat);
    activeCategories = next;
  }

  function selectAll() {
    activeCategories = new Set(Object.keys(categoryMeta) as PaperCategory[]);
  }

  function selectNone() {
    activeCategories = new Set();
  }

  // --- Paper selection ---
  function selectPaper(paper: Paper | null) {
    const toggle = () => {
      selectedPaper = selectedPaper?.id === paper?.id ? null : paper;
      if (paper) scrollExhibit?.scrollToPaper(paper);
    };
    if (paper && document.startViewTransition) {
      document.startViewTransition(toggle);
    } else {
      toggle();
    }
  }

  function closeDetail() {
    const close = () => { selectedPaper = null; };
    if (document.startViewTransition) {
      document.startViewTransition(close);
    } else {
      close();
    }
  }

  // --- Glossary / explainer handling ---
  function showExplainerForConcept(conceptLabel: string) {
    // Find matching explainer by id, term, or aka
    const match = explainers.find(e =>
      e.id === conceptLabel ||
      e.term.toLowerCase() === conceptLabel.toLowerCase() ||
      e.aka?.some(a => a.toLowerCase() === conceptLabel.toLowerCase())
    );
    if (match) {
      showGlossary = true;
      // The GlossaryOverlay will be rendered; we could auto-select but the user can search
    }
  }

  function handlePaperSelectFromGlossary(paperId: string) {
    const p = allPapers.find(pp => pp.id === paperId);
    if (p) selectPaper(p);
  }

  // --- Keyboard navigation ---
  const filteredPaperList = $derived(
    [...filteredPapers].sort((a, b) => a.year - b.year),
  );
  const selectedPaperIndex = $derived(
    selectedPaper ? filteredPaperList.findIndex((p) => p.id === selectedPaper!.id) : -1,
  );

  function handleKey(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement) return;

    if (e.key === "Escape") {
      if (selectedPaper) closeDetail();
      else if (showGlossary) showGlossary = false;
      else if (showAbout) showAbout = false;
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filteredPaperList.length === 0) return;
      const next = selectedPaperIndex < filteredPaperList.length - 1
        ? selectedPaperIndex + 1
        : 0;
      selectPaper(filteredPaperList[next]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (filteredPaperList.length === 0) return;
      const prev = selectedPaperIndex > 0
        ? selectedPaperIndex - 1
        : filteredPaperList.length - 1;
      selectPaper(filteredPaperList[prev]);
    } else if (e.key === "g" || e.key === "G") {
      e.preventDefault();
      showGlossary = !showGlossary;
    } else if (e.key === "/") {
      e.preventDefault();
      document.querySelector<HTMLInputElement>(".search-input")?.focus();
    } else if (e.key === "?") {
      e.preventDefault();
      showAbout = true;
    } else if (e.key >= "1" && e.key <= "9") {
      const idx = parseInt(e.key) - 1;
      const cats = Object.keys(categoryMeta) as PaperCategory[];
      if (idx < cats.length) toggleCategory(cats[idx]);
    }
  }

  // --- URL state ---
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    if (cat) {
      const cats = cat.split(",").filter((c) => c in categoryMeta) as PaperCategory[];
      if (cats.length > 0) activeCategories = new Set(cats);
    }
    const overlay = params.get("overlay");
    if (overlay) {
      const overlays = overlay.split(",");
      showEras = overlays.includes("era");
      showMilestones = overlays.includes("mil");
      showHardware = overlays.includes("hw");
      showNeuro = overlays.includes("neuro");
      showCompute = overlays.includes("compute");
    }
    const paper = params.get("paper");
    if (paper) {
      const p = allPapers.find((pp) => pp.id === paper);
      if (p) selectedPaper = p;
    }
    if (params.get("glossary")) showGlossary = true;

    // Container size observer for virtual scrolling
    const container = document.querySelector(".scroll-exhibit");
    if (container) {
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
          // The ScrollExhibit handles its own height tracking
        }
      });
      observer.observe(container);
    }
  });

  // Serialize to URL (debounced)
  let urlDebounce: ReturnType<typeof setTimeout> | null = null;
  $effect(() => {
    activeCategories;
    showEras;
    showMilestones;
    showHardware;
    showNeuro;
    showCompute;
    selectedPaper;
    showGlossary;

    if (urlDebounce) clearTimeout(urlDebounce);
    urlDebounce = setTimeout(() => {
      const params = new URLSearchParams();
      const cats = Array.from(activeCategories);
      if (cats.length < Object.keys(categoryMeta).length) {
        params.set("cat", cats.join(","));
      }
      const overlays: string[] = [];
      if (showEras) overlays.push("era");
      if (showMilestones) overlays.push("mil");
      if (showHardware) overlays.push("hw");
      if (showNeuro) overlays.push("neuro");
      if (showCompute) overlays.push("compute");
      if (overlays.length > 0) params.set("overlay", overlays.join(","));
      if (selectedPaper) params.set("paper", selectedPaper.id);
      if (showGlossary) params.set("glossary", "1");
      const qs = params.toString();
      history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    }, 300);
  });
</script>

<svelte:head>
  <title>AI Atlas — Interactive AI/ML Exhibit</title>
  <meta name="description" content="An interactive scrolling exhibit of AI/ML publications, breakthroughs, and concepts from 1936 to present." />
</svelte:head>

<svelte:window onkeydown={handleKey} />

<div class="timeline-app">

  <!-- Header -->
  <header class="app-header">
    <h1>AI Atlas</h1>
    <div class="header-controls">
      <input
        type="text"
        placeholder="Search papers..."
        bind:value={searchQuery}
        class="search-input"
      />
      <button onclick={() => (showGlossary = true)} class="header-btn">
        Glossary
      </button>
      <button onclick={() => (showEras = !showEras)} class:active={showEras} class="header-btn">
        Era
      </button>
      <button onclick={() => (showMilestones = !showMilestones)} class:active={showMilestones} class="header-btn">
        Mil
      </button>
      <button onclick={() => (showHardware = !showHardware)} class:active={showHardware} class="header-btn">
        HW
      </button>
      <button onclick={() => (showNeuro = !showNeuro)} class:active={showNeuro} class="header-btn">
        NEU
      </button>
      <a href="/digest/" class="header-btn digest-link">Digest</a>
      <button onclick={() => (showAbout = true)} class="header-btn about-btn" aria-label="About">?</button>
    </div>
  </header>

  <!-- Category Filter Bar -->
  <div class="category-bar">
    <button onclick={selectAll} class="cat-action">All</button>
    <button onclick={selectNone} class="cat-action">None</button>
    {#each Object.entries(categoryMeta) as [cat, meta], index}
      <button
        class="cat-chip"
        class:active={activeCategories.has(cat as PaperCategory)}
        style="--cat-color: {meta.color}"
        onclick={() => toggleCategory(cat as PaperCategory)}
      >
        {meta.label}{#if index < 9}<sup class="kbd-hint">{index + 1}</sup>{/if}
      </button>
    {/each}
  </div>

  <!-- Main exhibit area: overlay tracks + scroll exhibit -->
  <div class="exhibit-area">
    {#if showNeuro || showMilestones}
      <OverlayTrack
        {showHardware}
        {showNeuro}
        {showCompute}
        {showMilestones}
      />
    {/if}

    <div class="exhibit-main">
      <ScrollExhibit
        bind:this={scrollExhibit}
        {activeCategories}
        {searchQuery}
        {selectedPaper}
        {hoveredPaper}
        {showEras}
        {showMilestones}
        onSelect={selectPaper}
        onHover={(p: Paper | null) => (hoveredPaper = p)}
      />

      {#if filteredPapers.length === 0 && allPapers.length > 0}
        <div class="empty-results">No papers found</div>
      {/if}
    </div>

    {#if showHardware}
      <OverlayTrack
        {showHardware}
        {showNeuro}
        {showCompute}
        {showMilestones}
      />
    {/if}
  </div>

  <!-- Detail Drawer -->
  {#if selectedPaper}
    <DetailDrawer
      paper={selectedPaper}
      onClose={closeDetail}
      onSelectPaper={selectPaper}
      onShowExplainer={showExplainerForConcept}
    />
  {/if}

  <!-- Glossary Overlay -->
  {#if showGlossary}
    <GlossaryOverlay
      onClose={() => (showGlossary = false)}
      onSelectPaper={handlePaperSelectFromGlossary}
    />
  {/if}

  <!-- About Panel -->
  <AboutPanel show={showAbout} onClose={() => (showAbout = false)} />

  <!-- First-run intro hint -->
  {#if !hasSeenIntro}
    <div class="intro-hint">
      <p>Scroll the exhibit · Click papers for details · Press G for glossary</p>
      <button onclick={() => { hasSeenIntro = true; localStorage.setItem("atlas-seen", "1"); }}>
        Got it
      </button>
    </div>
  {/if}
</div>

<style>
  .timeline-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    background: #0a0a0a;
  }

  /* Header */
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: #141414;
    border-bottom: 1px solid #2a2a2a;
    flex-shrink: 0;
  }

  .app-header h1 {
    font-family: system-ui, sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: #5e72e4;
    white-space: nowrap;
    letter-spacing: -0.01em;
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  .search-input {
    background: #0a0a0a;
    border: 1px solid #2a2a2a;
    color: #e0e0e0;
    padding: 4px 10px;
    border-radius: 3px;
    font-size: 12px;
    font-family: "SF Mono", "JetBrains Mono", monospace;
    width: 200px;
  }

  .search-input:focus {
    outline: none;
    border-color: #5e72e4;
  }

  .header-btn {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    color: #888;
    padding: 4px 10px;
    border-radius: 3px;
    font-size: 11px;
    cursor: pointer;
    font-family: system-ui, sans-serif;
    transition: all 120ms;
  }

  .header-btn:hover {
    border-color: #444;
    color: #e0e0e0;
  }

  .header-btn.active {
    background: rgba(94, 114, 228, 0.15);
    border-color: #5e72e4;
    color: #5e72e4;
  }

  .about-btn { font-size: 14px; }

  .digest-link {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  /* Category Bar */
  .category-bar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 16px;
    background: #111;
    border-bottom: 1px solid #2a2a2a;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .cat-action {
    background: transparent;
    border: 1px solid #2a2a2a;
    color: #888;
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 10px;
    cursor: pointer;
    font-family: system-ui, sans-serif;
  }

  .cat-chip {
    background: transparent;
    border: 1px solid #2a2a2a;
    color: #666;
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 10px;
    cursor: pointer;
    font-family: system-ui, sans-serif;
    opacity: 0.4;
    transition: opacity 100ms;
  }

  .cat-chip.active {
    opacity: 1;
    color: #e0e0e0;
    border-color: var(--cat-color, #5e72e4);
    background: color-mix(in oklab, var(--cat-color, #5e72e4) 12%, transparent);
  }

  .kbd-hint {
    font-size: 8px;
    opacity: 0.5;
    margin-left: 2px;
  }

  /* Exhibit area */
  .exhibit-area {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .exhibit-main {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  /* Empty results */
  .empty-results {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #666;
    font-family: system-ui, sans-serif;
  }

  /* Intro hint */
  .intro-hint {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 150;
    display: flex;
    align-items: center;
    gap: 12px;
    animation: intro-slide-up 0.3s ease-out;
  }

  .intro-hint p {
    font-size: 12px;
    color: #e0e0e0;
    font-family: system-ui, sans-serif;
  }

  .intro-hint button {
    background: #5e72e4;
    color: #0a0a0a;
    border: none;
    padding: 4px 12px;
    border-radius: 3px;
    font-size: 11px;
    cursor: pointer;
    font-family: system-ui, sans-serif;
  }

  @keyframes intro-slide-up {
    from { transform: translate(-50%, 20px); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }

  /* Responsive — mobile */
  @media (max-width: 768px) {
    .app-header {
      flex-direction: column;
      gap: 6px;
    }
    .header-controls {
      width: 100%;
      justify-content: center;
    }
    .search-input {
      width: 150px;
    }
    .category-bar {
      overflow-x: auto;
      flex-wrap: nowrap;
    }
  }

  /* Touch targets */
  @media (pointer: coarse) {
    .cat-chip {
      padding: 6px 12px;
    }
    .header-btn {
      padding: 6px 14px;
    }
  }

  /* Accessibility */
  .cat-chip:focus-visible,
  .cat-action:focus-visible,
  .header-btn:focus-visible {
    outline: 2px solid #5e72e4;
    outline-offset: 1px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>
