<script lang="ts">
  import { onMount } from "svelte";
  import { papers, categoryMeta, yearRange } from "$lib/data/papers";
  import type { Paper, PaperCategory } from "$lib/types";
  import OrreryTimeline from "$lib/components/OrreryTimeline.svelte";
  import HudPanel from "$lib/components/HudPanel.svelte";
  import AboutPanel from "$lib/components/AboutPanel.svelte";

  // --- State ---
  let hoveredPaper = $state<Paper | null>(null);
  let selectedPaper = $state<Paper | null>(null);
  let showHardware = $state(true);
  let showNeuro = $state(true);
  let showCompute = $state(true);
  let showMoore = $state(true);
  let showRelations = $state(true);
  let showEras = $state(true);
  let showDensity = $state(true);
  let showAbout = $state(false);
  let hasSeenIntro = $state(
    typeof localStorage !== "undefined" && !localStorage.getItem("aiml-seen"),
  );
  let activeCategories = $state<Set<PaperCategory>>(
    new Set(Object.keys(categoryMeta) as PaperCategory[]),
  );
  let searchQuery = $state("");

  // --- Derived ---
  const minYear = yearRange[0];
  const maxYear = yearRange[1];
  const yearSpan = maxYear - minYear;

  const filteredPapers = $derived(
    papers.filter((p) => {
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

  // Decade markers
  const decades = $derived.by(() => {
    const result: number[] = [];
    for (let y = Math.ceil(minYear / 10) * 10; y <= maxYear; y += 10) {
      result.push(y);
    }
    return result;
  });
  // Related papers for selected paper
  const relatedPapers = $derived(
    selectedPaper?.related
      ? selectedPaper.related
          .map((id) => papers.find((p) => p.id === id))
          .filter((p): p is Paper => p !== undefined)
      : [],
  );
  // Genealogy/ancestry chain — recursively walk related papers up to maxDepth
  function getAncestry(paper: Paper, maxDepth: number = 2): Paper[] {
    const visited = new Set<string>();
    const result: Paper[] = [];

    function walk(p: Paper, depth: number) {
      if (depth > maxDepth || visited.has(p.id)) return;
      visited.add(p.id);
      if (p.related) {
        for (const relId of p.related) {
          const rel = papers.find((pp) => pp.id === relId);
          if (rel && !visited.has(rel.id)) {
            result.push(rel);
            walk(rel, depth + 1);
          }
        }
      }
    }
    walk(paper, 0);
    return result.sort((a, b) => a.year - b.year);
  }

  const ancestry = $derived(selectedPaper ? getAncestry(selectedPaper) : []);

  // Paper selection with View Transitions API (progressive enhancement)
 function selectPaper(paper: Paper | null) {
   const toggle = () => {
     selectedPaper = selectedPaper?.id === paper?.id ? null : paper;
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

  // Keyboard navigation — sorted list + index
  const filteredPaperList = $derived(
    [...filteredPapers].sort((a, b) => a.year - b.year),
  );
  const selectedPaperIndex = $derived(
    selectedPaper ? filteredPaperList.findIndex((p) => p.id === selectedPaper.id) : -1,
  );

  function handleKey(e: KeyboardEvent) {
    // Don't intercept when typing in search
    if (e.target instanceof HTMLInputElement) return;

    if (e.key === "Escape") {
      if (selectedPaper) closeDetail();
      else if (showAbout) showAbout = false;
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (filteredPaperList.length === 0) return;
      const next = selectedPaperIndex < filteredPaperList.length - 1
        ? selectedPaperIndex + 1
        : 0;
      selectPaper(filteredPaperList[next]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (filteredPaperList.length === 0) return;
      const prev = selectedPaperIndex > 0
        ? selectedPaperIndex - 1
        : filteredPaperList.length - 1;
      selectPaper(filteredPaperList[prev]);
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

  function scrollToPaper(_paper: Paper) {
    // Orrery is circular — no scroll needed; selection highlights on the dial
  }

  // --- URL state ---
  // Parse URL on mount (once — not in $effect to avoid reactive loops)
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
      showHardware = overlays.includes("hw");
      showNeuro = overlays.includes("neuro");
      showCompute = overlays.includes("compute");
      showMoore = overlays.includes("moore");
      showRelations = overlays.includes("relations");
      showEras = overlays.includes("eras");
      showDensity = overlays.includes("density");
    }
    const paper = params.get("paper");
    if (paper) {
      const p = papers.find((pp) => pp.id === paper);
      if (p) selectedPaper = p;
    }
  });

  // Serialize to URL (debounced)
  let urlDebounce: ReturnType<typeof setTimeout> | null = null;
  $effect(() => {
    // Track all state that affects URL
    activeCategories;
    showHardware;
    showNeuro;
    showCompute;
    showMoore;
    showRelations;
    showEras;
    showDensity;
    selectedPaper;

    if (urlDebounce) clearTimeout(urlDebounce);
    urlDebounce = setTimeout(() => {
      const params = new URLSearchParams();
      const cats = Array.from(activeCategories);
      if (cats.length < Object.keys(categoryMeta).length) {
        params.set("cat", cats.join(","));
      }
      const overlays: string[] = [];
      if (showHardware) overlays.push("hw");
      if (showNeuro) overlays.push("neuro");
      if (showCompute) overlays.push("compute");
      if (showMoore) overlays.push("moore");
      if (showRelations) overlays.push("relations");
      if (showEras) overlays.push("eras");
      if (showDensity) overlays.push("density");
      if (overlays.length < 7) params.set("overlay", overlays.join(","));
      if (selectedPaper) params.set("paper", selectedPaper.id);
      const qs = params.toString();
      history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    }, 300);
  });
</script>

<svelte:head>
  <title>AI/ML History — Interactive Timeline</title>
  <meta name="description" content="Interactive timeline of AI/ML research, hardware evolution, and neuroinformatics" />
</svelte:head>

<svelte:window onkeydown={handleKey} />

<div class="timeline-app">

  <!-- Header -->
  <header class="app-header">
    <h1>AI/ML History</h1>
    <div class="header-controls">
      <input
        type="text"
        placeholder="Search papers..."
        bind:value={searchQuery}
        class="search-input"
      />
      <button onclick={() => (showRelations = !showRelations)} class:active={showRelations}>
        Relations
      </button>
      <button onclick={() => (showEras = !showEras)} class:active={showEras}>
        Eras
      </button>
      <a href="/digest/" class="digest-link">Digest</a>
      <button onclick={() => (showAbout = true)} class="about-btn" aria-label="About">?</button>
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

  <!-- Orrery Dial — circular timeline -->
  <div class="orrery-container">
    <OrreryTimeline
      papers={filteredPapers}
      {minYear}
      {maxYear}
      {selectedPaper}
      {hoveredPaper}
      onSelectPaper={selectPaper}
      onHoverPaper={(p) => (hoveredPaper = p)}
    />

    {#if filteredPapers.length === 0}
      <div class="empty-results">No papers found</div>
    {/if}
  </div>

  <!-- Ephemeral HUD Panel -->
  {#if selectedPaper}
    <HudPanel
      paper={selectedPaper}
      {relatedPapers}
      {ancestry}
      onSelect={selectPaper}
      onClose={closeDetail}
    />
  {/if}

  <!-- First-run intro hint -->
  {#if !hasSeenIntro}
    <div class="intro-hint">
      <p>Hover the dial to read the year · Click a tick mark for paper details</p>
      <button onclick={() => { hasSeenIntro = true; localStorage.setItem("aiml-seen", "1"); }}>
        Got it
      </button>
    </div>
  {/if}
</div>

<!-- About Panel -->
<AboutPanel show={showAbout} onClose={() => (showAbout = false)} />


<style>
  .timeline-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  /* Header */
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .app-header h1 {
    font-size: 18px;
    font-weight: 800;
    color: var(--accent);
    white-space: nowrap;
  }
  .header-controls {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .search-input {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 4px 10px;
    border-radius: var(--radius-md);
    font-size: 12px;
    font-family: var(--font-ui);
    width: 200px;
  }
  .search-input:focus {
    outline: none;
    border-color: var(--accent);
  }
  .header-controls button {
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text-dim);
    padding: 4px 10px;
    border-radius: var(--radius-md);
    font-size: 11px;
    cursor: pointer;
    font-family: var(--font-ui);
    transition: all 0.15s;
  }
  .header-controls button:hover {
    border-color: var(--accent-dim);
    color: var(--text);
  }
  .header-controls button.active {
    background: var(--accent-dim);
    border-color: var(--accent);
    color: var(--accent);
  }
  .about-btn {
    font-size: 14px;
  }
  .digest-link {
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text-dim);
    padding: 4px 10px;
    border-radius: var(--radius-md);
    font-size: 11px;
    font-family: var(--font-ui);
    text-decoration: none;
    transition: all 0.15s;
  }
  .digest-link:hover {
    border-color: var(--accent-dim);
    color: var(--text);
  }

  /* Category Bar */
  .category-bar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 16px;
    background: var(--surface2);
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  .cat-action {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-dim);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    font-size: 10px;
    cursor: pointer;
    font-family: var(--font-ui);
  }
  .cat-chip {
    background: transparent;
    border: 1px solid var(--cat-color, var(--border));
    color: var(--text-dim);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    font-size: 10px;
    cursor: pointer;
    font-family: var(--font-ui);
    opacity: 0.4;
    transition: opacity 0.15s;
  }
  .cat-chip.active {
    opacity: 1;
    color: var(--text);
    background: color-mix(in srgb, var(--cat-color) 15%, transparent);
  }
  .kbd-hint {
    font-size: 8px;
    opacity: 0.5;
    margin-left: 2px;
  }

  /* Orrery Container — circular dial fills remaining space */
  .orrery-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: stretch;
    justify-content: center;
  }

  /* Empty results */
  .empty-results {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: var(--text-dim);
    font-family: var(--font-ui);
  }

  /* Intro hint */
  .intro-hint {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 12px 16px;
    z-index: 150;
    display: flex;
    align-items: center;
    gap: 12px;
    animation: intro-slide-up 0.3s ease-out;
  }
  .intro-hint p {
    font-size: 12px;
    color: var(--text);
    font-family: var(--font-ui);
  }
  .intro-hint button {
    background: var(--accent);
    color: var(--bg);
    border: none;
    padding: 4px 12px;
    border-radius: var(--radius-md);
    font-size: 11px;
    cursor: pointer;
    font-family: var(--font-ui);
  }
  @keyframes intro-slide-up {
    from { transform: translate(-50%, 20px); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }

  /* Responsive — mobile */
  @media (max-width: 768px) {
    .app-header {
      flex-direction: column;
      gap: 8px;
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
  }

  /* Accessibility */
  .cat-chip:focus-visible,
  .cat-action:focus-visible,
  .header-controls button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 1px;
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>
