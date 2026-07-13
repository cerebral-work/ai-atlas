<script lang="ts">
  import { explainers } from "$lib/data/explainers";
  import { categoryMeta, allPapers } from "$lib/data/papers";
  import type { Explainer, PaperCategory } from "$lib/types";
  import ExplainerView from "./ExplainerView.svelte";

  let {
    onClose,
    onSelectPaper,
  }: {
    onClose: () => void;
    onSelectPaper: (paperId: string) => void;
  } = $props();

  let searchQuery = $state("");
  let filterCategory = $state<PaperCategory | "all">("all");
  let selectedExplainer = $state<Explainer | null>(null);

  // Sorted alphabetically by term
  const sortedExplainers = $derived(
    [...explainers].sort((a, b) => a.term.localeCompare(b.term))
  );

  const filteredExplainers = $derived.by(() => {
    let result = sortedExplainers;
    if (filterCategory !== "all") {
      result = result.filter(e => e.category === filterCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(e =>
        e.term.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q) ||
        e.aka?.some(a => a.toLowerCase().includes(q))
      );
    }
    return result;
  });

  function selectExplainer(id: string) {
    const e = explainers.find(e => e.id === id);
    if (e) selectedExplainer = e;
  }

  function handleExplainerPaperSelect(paperId: string) {
    onSelectPaper(paperId);
    onClose();
  }
</script>

<div class="glossary-overlay">
  <div class="glossary-header">
    <h1 class="glossary-title">Glossary</h1>
    <span class="glossary-count">{filteredExplainers.length} / {explainers.length} concepts</span>
    <button class="close-btn" onclick={onClose} aria-label="Close glossary">✕</button>
  </div>

  <div class="glossary-body">
    <!-- Left panel: list -->
    <div class="glossary-list-panel">
      <div class="glossary-search">
        <input
          type="text"
          class="search-input"
          placeholder="Search concepts..."
          bind:value={searchQuery}
        />
      </div>

      <div class="glossary-filters">
        <button
          class="cat-filter"
          class:active={filterCategory === "all"}
          onclick={() => (filterCategory = "all")}
        >All</button>
        {#each Object.entries(categoryMeta) as [cat, meta]}
          <button
            class="cat-filter"
            style="--cat-color: {meta.color};"
            class:active={filterCategory === cat}
            onclick={() => (filterCategory = cat as PaperCategory)}
          >
            <span class="cat-dot" style="background: {meta.color};"></span>
            {meta.label}
          </button>
        {/each}
      </div>

      <div class="glossary-list" role="list">
        {#each filteredExplainers as explainer (explainer.id)}
          <button
            class="glossary-item"
            class:active={selectedExplainer?.id === explainer.id}
            onclick={() => (selectedExplainer = explainer)}
          >
            <span class="gi-term">{explainer.term}</span>
            <span class="gi-cat" style="color: {categoryMeta[explainer.category as PaperCategory]?.color ?? '#888'};">
              {categoryMeta[explainer.category as PaperCategory]?.label ?? explainer.category}
            </span>
            <span class="gi-summary">{explainer.summary}</span>
          </button>
        {/each}
      </div>
    </div>

    <!-- Right panel: detail -->
    <div class="glossary-detail-panel">
      {#if selectedExplainer}
        <ExplainerView
          explainer={selectedExplainer}
          onSelectExplainer={selectExplainer}
          onSelectPaper={handleExplainerPaperSelect}
          onClose={onClose}
        />
      {:else}
        <div class="glossary-empty">
          <p>Select a concept to read its full explainer.</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .glossary-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: #0a0a0a;
    display: flex;
    flex-direction: column;
  }

  .glossary-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #2a2a2a;
    flex-shrink: 0;
  }

  .glossary-title {
    font-family: system-ui, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #e0e0e0;
    margin: 0;
  }

  .glossary-count {
    font-family: "SF Mono", monospace;
    font-size: 11px;
    color: #666;
    flex: 1;
  }

  .close-btn {
    background: none;
    border: none;
    color: #888;
    font-size: 16px;
    cursor: pointer;
    padding: 4px;
    transition: color 100ms;
  }

  .close-btn:hover { color: #e0e0e0; }

  .glossary-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .glossary-list-panel {
    width: 350px;
    flex-shrink: 0;
    border-right: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .glossary-search {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #2a2a2a;
  }

  .search-input {
    width: 100%;
    background: #141414;
    border: 1px solid #2a2a2a;
    color: #e0e0e0;
    font-family: "SF Mono", monospace;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 3px;
    outline: none;
  }

  .search-input:focus {
    border-color: #5e72e4;
  }

  .glossary-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #2a2a2a;
    max-height: 120px;
    overflow-y: auto;
  }

  .cat-filter {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: system-ui, sans-serif;
    font-size: 9px;
    background: #141414;
    border: 1px solid #2a2a2a;
    color: #888;
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer;
  }

  .cat-filter.active {
    border-color: var(--cat-color, #5e72e4);
    color: #e0e0e0;
  }

  .cat-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .glossary-list {
    flex: 1;
    overflow-y: auto;
  }

  .glossary-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(42, 42, 42, 0.5);
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background 100ms;
  }

  .glossary-item:hover {
    background: #141414;
  }

  .glossary-item.active {
    background: #1a1a1a;
    border-left: 3px solid #5e72e4;
  }

  .gi-term {
    font-family: "SF Mono", monospace;
    font-size: 12px;
    font-weight: 600;
    color: #e0e0e0;
  }

  .gi-cat {
    font-family: system-ui, sans-serif;
    font-size: 9px;
    text-transform: uppercase;
  }

  .gi-summary {
    font-family: system-ui, sans-serif;
    font-size: 10px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .glossary-detail-panel {
    flex: 1;
    overflow: hidden;
    background: #0a0a0a;
  }

  .glossary-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #555;
    font-family: system-ui, sans-serif;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    .glossary-body {
      flex-direction: column;
    }

    .glossary-list-panel {
      width: 100%;
      height: 50%;
      border-right: none;
      border-bottom: 1px solid #2a2a2a;
    }

    .glossary-detail-panel {
      height: 50%;
    }
  }
</style>
