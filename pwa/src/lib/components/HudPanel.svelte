<script lang="ts">
  import type { Paper } from "$lib/types";
  import { categoryMeta } from "$lib/data/papers";

  let {
    paper,
    relatedPapers,
    ancestry,
    onSelect,
    onClose,
  }: {
    paper: Paper;
    relatedPapers: Paper[];
    ancestry: Paper[];
    onSelect: (paper: Paper) => void;
    onClose: () => void;
  } = $props();

  let panelEl: HTMLDivElement;

  function handleClickOutside(e: MouseEvent) {
    if (panelEl && !panelEl.contains(e.target as Node)) {
      onClose();
    }
  }
</script>

<svelte:window onmousedown={handleClickOutside} />

<div
  class="hud-panel"
  bind:this={panelEl}
  style="view-transition-name: detail-panel"
  role="dialog"
  aria-label="Paper details"
>
  <button class="hud-close" onclick={onClose} aria-label="Close">✕</button>

  <div class="hud-cat-badge" style="--cat-color: {categoryMeta[paper.category].color}">
    {categoryMeta[paper.category].label}
  </div>

  <h2 class="hud-title">{paper.title}</h2>
  <div class="hud-authors">{paper.authors}</div>
  <div class="hud-venue">
    {paper.venue} · <span class="hud-year">{paper.year}</span>
    {#if paper.arxivId}
      <a href="https://arxiv.org/abs/{paper.arxivId}" target="_blank" rel="noopener" class="hud-link">
        arXiv:{paper.arxivId}
      </a>
    {/if}
  </div>

  <p class="hud-summary">{paper.summary}</p>

  {#if paper.concepts && paper.concepts.length > 0}
    <div class="hud-concepts">
      {#each paper.concepts as concept}
        <span class="hud-concept">{concept}</span>
      {/each}
    </div>
  {/if}

  {#if ancestry.length > 0}
    <div class="hud-section">
      <div class="hud-section-title">Lineage</div>
      <div class="hud-lineage">
        {#each ancestry as p, i}
          {#if i > 0}
            <span class="lineage-arrow">→</span>
          {/if}
          <button class="lineage-node" onclick={() => onSelect(p)}>
            <span class="lineage-year">{p.year}</span>
            <span class="lineage-title">{p.title}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}

  {#if relatedPapers.length > 0}
    <div class="hud-section">
      <div class="hud-section-title">Related</div>
      <div class="hud-related">
        {#each relatedPapers as p}
          <button class="related-item" onclick={() => onSelect(p)}>
            <span class="related-dot" style="background: {categoryMeta[p.category].color}"></span>
            <span class="related-title">{p.title}</span>
            <span class="related-year">{p.year}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .hud-panel {
    position: fixed;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    width: 380px;
    max-height: 80vh;
    overflow-y: auto;
    background: rgba(14, 14, 14, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    z-index: 200;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
    animation: hud-enter 0.2s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .hud-panel::-webkit-scrollbar {
    width: 4px;
  }
  .hud-panel::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  @keyframes hud-enter {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hud-panel {
      animation: none;
    }
  }

  .hud-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: none;
    border: none;
    color: #888;
    font-size: 16px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
  }
  .hud-close:hover {
    color: #e0e0e0;
    background: rgba(255, 255, 255, 0.05);
  }

  .hud-cat-badge {
    display: inline-block;
    font-size: 9px;
    font-family: monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--cat-color);
    border: 1px solid var(--cat-color);
    padding: 2px 8px;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .hud-title {
    font-size: 14px;
    color: #e0e0e0;
    font-family: monospace;
    line-height: 1.4;
    margin: 0 0 8px 0;
    padding-right: 24px;
  }

  .hud-authors {
    font-size: 11px;
    color: #888;
    margin-bottom: 4px;
  }

  .hud-venue {
    font-size: 10px;
    color: #666;
    font-family: monospace;
    margin-bottom: 16px;
  }
  .hud-year {
    color: #e0e0e0;
    font-weight: 600;
  }
  .hud-link {
    color: #5e72e4;
    text-decoration: none;
    margin-left: 8px;
  }
  .hud-link:hover {
    text-decoration: underline;
  }

  .hud-summary {
    font-size: 12px;
    color: #aaa;
    line-height: 1.6;
    margin: 0 0 16px 0;
  }

  .hud-concepts {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 16px;
  }
  .hud-concept {
    font-size: 9px;
    font-family: monospace;
    color: #888;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 2px 6px;
    border-radius: 3px;
  }

  .hud-section {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  .hud-section-title {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #666;
    margin-bottom: 8px;
    font-family: monospace;
  }

  .hud-lineage {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
  }
  .lineage-arrow {
    color: #444;
    font-size: 10px;
  }
  .lineage-node {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
    transition: background 0.15s;
  }
  .lineage-node:hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .lineage-year {
    font-size: 9px;
    color: #666;
    font-family: monospace;
  }
  .lineage-title {
    font-size: 10px;
    color: #aaa;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hud-related {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .related-item {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
    transition: background 0.15s;
    text-align: left;
    width: 100%;
  }
  .related-item:hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .related-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .related-title {
    font-size: 10px;
    color: #aaa;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .related-year {
    font-size: 9px;
    color: #666;
    font-family: monospace;
  }

  @media (max-width: 768px) {
    .hud-panel {
      right: 12px;
      left: 12px;
      width: auto;
      max-width: none;
      transform: none;
      top: auto;
      bottom: 12px;
      max-height: 60vh;
    }
    @keyframes hud-enter {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
</style>
