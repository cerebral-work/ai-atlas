<script lang="ts">
  import type { Explainer } from "$lib/types";
  import { categoryMeta } from "$lib/data/papers";
  import { explainers } from "$lib/data/explainers";
  import type { PaperCategory } from "$lib/types";

  let {
    explainer,
    onSelectExplainer,
    onSelectPaper,
    onClose,
  }: {
    explainer: Explainer;
    onSelectExplainer: (id: string) => void;
    onSelectPaper: (paperId: string) => void;
    onClose: () => void;
  } = $props();

  const meta = $derived(categoryMeta[explainer.category as PaperCategory]?.label ?? explainer.category);

  // Minimal markdown renderer — no external dependency
  function renderMarkdown(md: string): string {
    return md
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .split("\n\n")
      .map(p => p.trim() ? `<p>${p.replace(/\n/g, "<br>")}</p>` : "")
      .join("");
  }
</script>

<article class="explainer-view">
  <header class="ev-header">
    <div class="ev-meta">
      <span class="ev-category" style="color: {categoryMeta[explainer.category as PaperCategory]?.color ?? '#888'};">
        {meta}
      </span>
      {#if explainer.yearDiscovered}
        <span class="ev-year">{explainer.yearDiscovered}</span>
      {/if}
    </div>
    <h1 class="ev-term">{explainer.term}</h1>
    {#if explainer.aka && explainer.aka.length > 0}
      <p class="ev-aka">aka: {explainer.aka.join(", ")}</p>
    {/if}
  </header>

  <div class="ev-body">
    <div class="ev-summary">{explainer.summary}</div>

    {#if explainer.explanation}
      <section class="ev-section">
        {@html renderMarkdown(explainer.explanation)}
      </section>
    {/if}

    {#if explainer.howItWorks}
      <section class="ev-section">
        <h2 class="ev-heading">How It Works</h2>
        {@html renderMarkdown(explainer.howItWorks)}
      </section>
    {/if}

    {#if explainer.whyItMatters}
      <section class="ev-section">
        <h2 class="ev-heading">Why It Matters</h2>
        {@html renderMarkdown(explainer.whyItMatters)}
      </section>
    {/if}

    {#if explainer.history}
      <section class="ev-section">
        <h2 class="ev-heading">History</h2>
        {@html renderMarkdown(explainer.history)}
      </section>
    {/if}

    {#if explainer.discoverers}
      <div class="ev-discoverers">
        <span class="ev-label">Discovered by:</span>
        <span>{explainer.discoverers}</span>
      </div>
    {/if}

    {#if explainer.relatedConcepts && explainer.relatedConcepts.length > 0}
      <section class="ev-section">
        <h2 class="ev-heading">Related Concepts</h2>
        <div class="rel-chips">
          {#each explainer.relatedConcepts as rcId}
            <button class="rel-chip" onclick={() => onSelectExplainer(rcId)}>
              {rcId}
            </button>
          {/each}
        </div>
      </section>
    {/if}

    {#if explainer.relatedPapers && explainer.relatedPapers.length > 0}
      <section class="ev-section">
        <h2 class="ev-heading">Related Papers</h2>
        <div class="rel-papers">
          {#each explainer.relatedPapers as paperId}
            <button class="rel-paper" onclick={() => onSelectPaper(paperId)}>
              {paperId}
            </button>
          {/each}
        </div>
      </section>
    {/if}

    {#if explainer.tags && explainer.tags.length > 0}
      <div class="ev-tags">
        {#each explainer.tags as tag}
          <span class="ev-tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</article>

<style>
  .explainer-view {
    height: 100%;
    overflow-y: auto;
    padding: 1.5rem 2rem 3rem;
  }

  .ev-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #2a2a2a;
  }

  .ev-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .ev-category {
    font-family: system-ui, sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .ev-year {
    font-family: "SF Mono", monospace;
    font-size: 10px;
    color: #666;
  }

  .ev-term {
    font-family: "SF Mono", "JetBrains Mono", "Fira Code", monospace;
    font-size: 22px;
    font-weight: 700;
    color: #e0e0e0;
    margin: 0;
    line-height: 1.2;
  }

  .ev-aka {
    font-family: system-ui, sans-serif;
    font-size: 12px;
    color: #666;
    margin: 0.5rem 0 0 0;
    font-style: italic;
  }

  .ev-summary {
    background: #1a1a1a;
    border-left: 3px solid #5e72e4;
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
    font-family: system-ui, sans-serif;
    font-size: 13px;
    color: #ccc;
    line-height: 1.5;
    border-radius: 0 3px 3px 0;
  }

  .ev-body {
    font-family: system-ui, sans-serif;
    font-size: 13px;
    color: #bbb;
    line-height: 1.65;
  }

  .ev-body :global(p) {
    margin: 0 0 0.75rem 0;
  }

  .ev-body :global(strong) {
    color: #e0e0e0;
  }

  .ev-body :global(code) {
    font-family: "SF Mono", "JetBrains Mono", monospace;
    font-size: 12px;
    background: #1a1a1a;
    padding: 1px 4px;
    border-radius: 2px;
    color: #5e72e4;
  }

  .ev-section {
    margin-bottom: 1.5rem;
  }

  .ev-heading {
    font-family: system-ui, sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #666;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  .ev-discoverers {
    font-size: 11px;
    color: #888;
    margin-bottom: 1rem;
  }

  .ev-label { color: #555; }

  .rel-chips, .rel-papers {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .rel-chip, .rel-paper {
    font-family: "SF Mono", monospace;
    font-size: 10px;
    background: #1a1a1a;
    color: #aaa;
    border: 1px solid #2a2a2a;
    padding: 3px 8px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 100ms, border-color 100ms;
  }

  .rel-chip:hover, .rel-paper:hover {
    border-color: #5e72e4;
    color: #e0e0e0;
  }

  .ev-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 1rem;
  }

  .ev-tag {
    font-family: system-ui, sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #555;
    padding: 2px 6px;
    border: 1px solid #222;
    border-radius: 2px;
  }
</style>
