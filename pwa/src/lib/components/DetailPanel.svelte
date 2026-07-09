<script lang="ts">
  import type { Paper } from "$lib/types";
  import { categoryMeta } from "$lib/data/papers";

  let {
    selectedPaper,
    relatedPapers,
    ancestry,
    onClose,
    onSelect,
  }: {
    selectedPaper: Paper;
    relatedPapers: Paper[];
    ancestry: Paper[];
    onClose: () => void;
    onSelect: (paper: Paper) => void;
  } = $props();
</script>

<div class="detail-panel" role="dialog">
  <button class="close-btn" onclick={onClose}>✕</button>
  <div class="detail-category" style="--cat-color: {categoryMeta[selectedPaper.category].color}">
    {categoryMeta[selectedPaper.category].label}
  </div>
  <h2 style="word-break: break-word;">{selectedPaper.title}</h2>
  <p class="detail-authors">{selectedPaper.authors}</p>
  <p class="detail-venue">
    {selectedPaper.venue} · {selectedPaper.year}
    {#if selectedPaper.arxivId}
      · arXiv:{selectedPaper.arxivId}
    {/if}
  </p>
  <p class="detail-summary">{selectedPaper.summary}</p>
  {#if selectedPaper.concepts && selectedPaper.concepts.length > 0}
    <div class="detail-concepts">
      {#each selectedPaper.concepts as concept}
        <span class="concept-tag">{concept}</span>
      {/each}
    </div>
  {/if}
  {#if relatedPapers.length > 0}
    <div class="detail-related">
      <h3>Related Papers</h3>
      {#each relatedPapers as rel}
        <button class="related-paper" onclick={() => onSelect(rel)}>
          <span class="rel-year">{rel.year}</span>
          <span class="rel-title">{rel.title}</span>
          <span class="rel-cat" style="--cat-color: {categoryMeta[rel.category].color}">
            {categoryMeta[rel.category].label}
          </span>
        </button>
      {/each}
    </div>
  {/if}
  {#if ancestry.length > 0}
    <div class="detail-lineage">
      <h3>Lineage</h3>
      <div class="lineage-chain">
        {#each ancestry.slice(0, 15) as ancestor, i}
          <button class="lineage-node" onclick={() => onSelect(ancestor)}>
            <span class="lineage-year">{ancestor.year}</span>
            <span class="lineage-title">{ancestor.title}</span>
          </button>
          {#if i < ancestry.length - 1}
            <span class="lineage-arrow">→</span>
          {/if}
        {/each}
        {#if ancestry.length > 15}
          <span class="lineage-more">…and {ancestry.length - 15} more</span>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .detail-panel {
    position: fixed;
    right: 16px;
    top: 80px;
    width: 380px;
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    z-index: 200;
    animation: panel-slide-in 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    view-transition-name: detail-panel;
  }
  @keyframes panel-slide-in {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    color: var(--text-dim);
    cursor: pointer;
    font-size: 16px;
    padding: 4px 8px;
    font-family: var(--font-ui);
  }
  .close-btn:hover {
    color: var(--text);
  }
  .detail-category {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--cat-color);
    margin-bottom: 8px;
  }
  .detail-panel h2 {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--text);
    padding-right: 24px;
    font-family: var(--font-ui);
  }
  .detail-authors {
    font-size: 12px;
    color: var(--text-dim);
    margin-bottom: 4px;
  }
  .detail-venue {
    font-size: 11px;
    color: var(--text-dim);
    margin-bottom: 12px;
  }
  .detail-summary {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    margin-bottom: 12px;
  }
  .detail-concepts {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 12px;
  }
  .concept-tag {
    background: var(--surface2);
    border: 1px solid var(--border);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    font-size: 10px;
    color: var(--text-dim);
  }
  .detail-related h3 {
    font-size: 12px;
    color: var(--text-dim);
    margin-bottom: 8px;
    font-family: var(--font-ui);
  }
  .related-paper {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 6px 8px;
    margin-bottom: 4px;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
    font-size: 11px;
    color: var(--text);
  }
  .related-paper:hover {
    border-color: var(--accent-dim);
  }
  .related-paper:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  .rel-year {
    font-weight: 700;
    color: var(--text-dim);
    min-width: 36px;
  }
  .rel-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rel-cat {
    font-size: 9px;
    color: var(--cat-color);
    white-space: nowrap;
  }
  .detail-lineage h3 {
    font-size: 12px;
    color: var(--text-dim);
    margin-bottom: 8px;
    font-family: var(--font-ui);
  }
  .lineage-chain {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 12px;
    border-left: 1px solid var(--accent-dim);
  }
  .lineage-node {
    display: flex;
    gap: 8px;
    background: none;
    border: none;
    padding: 4px 0;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
    font-size: 10px;
    color: var(--text-dim);
  }
  .lineage-node:hover {
    color: var(--text);
  }
  .lineage-year {
    font-weight: 700;
    min-width: 36px;
  }
  .lineage-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .lineage-arrow {
    color: var(--text-dim);
    font-size: 10px;
    padding-left: 12px;
  }
  .lineage-more {
    font-size: 10px;
    color: var(--text-dim);
    padding: 4px 0;
  }

  @media (max-width: 768px) {
    .detail-panel {
      width: 100vw;
      max-width: none;
      left: 0;
      right: 0;
      top: auto;
      bottom: 0;
      max-height: 40vh;
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }
  }
</style>
