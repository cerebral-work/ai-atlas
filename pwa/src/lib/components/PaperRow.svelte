<script lang="ts">
  import type { Paper } from "$lib/types";
  import { categoryMeta } from "$lib/data/papers";

  let {
    paper,
    rowHeight,
    isSelected = false,
    isHovered = false,
    isRelated = false,
    isDimmed = false,
    onSelect,
    onHover,
  }: {
    paper: Paper;
    rowHeight: number;
    isSelected?: boolean;
    isHovered?: boolean;
    isRelated?: boolean;
    isDimmed?: boolean;
    onSelect: (p: Paper) => void;
    onHover: (p: Paper | null) => void;
  } = $props();

  const meta = $derived(categoryMeta[paper.category]);
  const color = $derived(meta?.color ?? "#888");

  // Era-appropriate display density
  const isCompact = $derived(rowHeight <= 50);
  const isDense = $derived(rowHeight <= 30);
</script>

<div
  class="paper-row"
  class:compact={isCompact}
  class:dense={isDense}
  class:selected={isSelected}
  class:related={isRelated}
  class:dimmed={isDimmed}
  style="--cat-color: {color}; height: {rowHeight}px;"
  role="button"
  tabindex="0"
  onclick={() => onSelect(paper)}
  onkeydown={(e) => { if (e.key === "Enter") onSelect(paper); }}
  onmouseenter={() => onHover(paper)}
  onmouseleave={() => onHover(null)}
>
  <span class="year">{paper.year}</span>
  <span class="dot" style="background: {color}"></span>
  <span class="title">{paper.title}</span>
  {#if !isDense}
    <span class="venue">{paper.venue}</span>
  {/if}
  {#if rowHeight > 60}
    <span class="authors">{paper.authors}</span>
  {/if}
</div>

<style>
  .paper-row {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0 1rem 0 1.5rem;
    border-left: 3px solid var(--cat-color);
    cursor: pointer;
    transition: background 120ms ease, opacity 120ms ease, border-width 80ms ease;
    overflow: hidden;
    white-space: nowrap;
    font-family: "SF Mono", "JetBrains Mono", "Fira Code", monospace;
    font-size: 12px;
    color: #e0e0e0;
    background: transparent;
    border-bottom: 1px solid rgba(42, 42, 42, 0.5);
  }

  .paper-row:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  .paper-row.selected {
    background: rgba(94, 114, 228, 0.08);
    border-left-width: 4px;
  }

  .paper-row.related {
    border-left-width: 4px;
    background: rgba(255, 255, 255, 0.02);
  }

  .paper-row.dimmed {
    opacity: 0.15;
    border-left-width: 1px;
  }

  .paper-row:focus-visible {
    outline: 2px solid #5e72e4;
    outline-offset: -2px;
  }

  .year {
    flex-shrink: 0;
    color: #888;
    font-size: 11px;
    min-width: 3.5ch;
    text-align: right;
  }

  .dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    opacity: 0.9;
  }

  .compact .dot {
    width: 4px;
    height: 4px;
  }

  .dense .dot {
    width: 3px;
    height: 3px;
  }

  .title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }

  .compact .title {
    font-size: 11px;
  }

  .dense .title {
    font-size: 10.5px;
  }

  .venue {
    flex-shrink: 0;
    color: #888;
    font-size: 10px;
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .compact .venue {
    font-size: 9.5px;
    max-width: 140px;
  }

  .authors {
    flex-shrink: 0;
    color: #666;
    font-size: 10.5px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (prefers-reduced-motion: reduce) {
    .paper-row {
      transition: none;
    }
  }
</style>
