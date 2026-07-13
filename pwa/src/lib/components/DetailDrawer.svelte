<script lang="ts">
  import type { Paper } from "$lib/types";
  import { categoryMeta, allPapers } from "$lib/data/papers";
  import { hardware } from "$lib/data/hardware";
  import { neuroEvents } from "$lib/data/neuro";
  import { milestones } from "$lib/data/milestones";

  let {
    paper,
    onClose,
    onSelectPaper,
    onShowExplainer,
  }: {
    paper: Paper;
    onClose: () => void;
    onSelectPaper: (p: Paper) => void;
    onShowExplainer: (conceptId: string) => void;
  } = $props();

  const meta = $derived(categoryMeta[paper.category] ?? { label: "Unknown", color: "#888", abbr: "?" });

  // --- Ancestry chain (walk related papers) ---
  function getAncestry(paper: Paper, maxDepth = 2): Paper[] {
    const visited = new Set<string>();
    const result: Paper[] = [];
    function walk(p: Paper, depth: number) {
      if (depth > maxDepth || visited.has(p.id)) return;
      visited.add(p.id);
      if (p.related) {
        for (const relId of p.related) {
          const rel = allPapers.find(pp => pp.id === relId);
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

  const ancestry = $derived(getAncestry(paper));

  const relatedPapers = $derived(
    (paper.related ?? [])
      .map(id => allPapers.find(p => p.id === id))
      .filter((p): p is Paper => p !== undefined)
  );

  // --- Hardware/events near the paper's year ---
  const nearbyHardware = $derived(
    hardware.filter(h => Math.abs(h.year - paper.year) <= 5).slice(0, 4)
  );

  const nearbyNeuro = $derived(
    neuroEvents.filter(n => Math.abs(n.year - paper.year) <= 5).slice(0, 3)
  );

  const paperMilestones = $derived(
    milestones.filter(m => m.relatedPapers?.includes(paper.id))
  );
</script>

<div
  class="detail-drawer"
  role="dialog"
  aria-label="Paper details and explainers"
  aria-modal="false"
  tabindex="-1"
>
  <header class="drawer-header">
    <span class="cat-badge" style="--cat-color: {meta.color};">
      <span class="cat-dot" style="background: {meta.color};"></span>
      {meta.label}
    </span>
    <h2 class="paper-title">{paper.title}</h2>
    <p class="paper-meta">
      <span>{paper.authors}</span>
      <span class="meta-sep">·</span>
      <span>{paper.year}</span>
      <span class="meta-sep">·</span>
      <span>{paper.venue}</span>
    </p>
    <div class="link-bar">
      {#if paper.arxivId}
        <a href="https://arxiv.org/abs/{paper.arxivId}" target="_blank" rel="noopener" class="link-btn">arXiv</a>
      {/if}
      {#if paper.doi}
        <a href="https://doi.org/{paper.doi}" target="_blank" rel="noopener" class="link-btn">DOI</a>
      {/if}
    </div>
    <button class="close-btn" onclick={onClose} aria-label="Close detail panel">✕</button>
  </header>

  <div class="drawer-body">
    <!-- Summary -->
    <section class="section">
      <h3 class="section-title">Summary</h3>
      <p class="paper-summary">{paper.summary}</p>
    </section>

    <!-- Concepts → Explainers -->
    {#if paper.concepts && paper.concepts.length > 0}
      <section class="section">
        <h3 class="section-title">Concepts</h3>
        <div class="concept-chips">
          {#each paper.concepts as concept}
            <button
              class="concept-chip"
              onclick={() => onShowExplainer(concept)}
            >
              {concept}
            </button>
          {/each}
        </div>
      </section>
    {/if}

    <!-- Ancestry -->
    {#if ancestry.length > 0}
      <section class="section">
        <h3 class="section-title">Lineage</h3>
        <ul class="lineage-list">
          {#each ancestry as ancestor}
            <li>
              <button class="lineage-item" onclick={() => onSelectPaper(ancestor)}>
                <span class="lineage-year">{ancestor.year}</span>
                <span class="lineage-title">{ancestor.title}</span>
              </button>
            </li>
          {/each}
        </ul>
      </section>
    {/if}

    <!-- Related papers -->
    {#if relatedPapers.length > 0}
      <section class="section">
        <h3 class="section-title">Related Papers</h3>
        <ul class="related-list">
          {#each relatedPapers as rel}
            <li>
              <button class="related-item" onclick={() => onSelectPaper(rel)}>
                <span class="related-year">{rel.year}</span>
                <span class="related-title">{rel.title}</span>
                <span class="related-authors">{rel.authors}</span>
              </button>
            </li>
          {/each}
        </ul>
      </section>
    {/if}

    <!-- Hardware context -->
    {#if nearbyHardware.length > 0}
      <section class="section">
        <h3 class="section-title">Hardware Context ({paper.year})</h3>
        <ul class="hw-list">
          {#each nearbyHardware as hw}
            <li>
              <span class="hw-year">{hw.year}</span>
              <span class="hw-name">{hw.name}</span>
            </li>
          {/each}
        </ul>
      </section>
    {/if}

    <!-- Neuro context -->
    {#if nearbyNeuro.length > 0}
      <section class="section">
        <h3 class="section-title">Neuroscience Context</h3>
        <ul class="neuro-list">
          {#each nearbyNeuro as n}
            <li>
              <span class="neuro-year">{n.year}</span>
              <span class="neuro-event">{n.title}</span>
            </li>
          {/each}
        </ul>
      </section>
    {/if}

    <!-- Related milestones -->
    {#if paperMilestones.length > 0}
      <section class="section">
        <h3 class="section-title">Related Milestones</h3>
        <ul class="milestone-list">
          {#each paperMilestones as m}
            <li>
              <span class="ms-year">{m.year}</span>
              <span class="ms-title">{m.title}</span>
              <span class="ms-impact">{m.impact}</span>
            </li>
          {/each}
        </ul>
      </section>
    {/if}
  </div>
</div>

<style>
  .detail-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 420px;
    background: #141414;
    border-left: 1px solid #2a2a2a;
    z-index: 50;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: slide-in 250ms cubic-bezier(0.25, 1, 0.5, 1);
  }

  @keyframes slide-in {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  .drawer-header {
    padding: 1.25rem 1.25rem 1rem;
    border-bottom: 1px solid #2a2a2a;
    position: relative;
    flex-shrink: 0;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #888;
    font-size: 14px;
    cursor: pointer;
    padding: 4px;
    line-height: 1;
    transition: color 120ms;
  }

  .close-btn:hover { color: #e0e0e0; }

  .cat-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: system-ui, sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--cat-color);
    margin-bottom: 0.5rem;
  }

  .cat-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .paper-title {
    font-family: "SF Mono", "JetBrains Mono", "Fira Code", monospace;
    font-size: 15px;
    font-weight: 600;
    color: #e0e0e0;
    line-height: 1.3;
    margin: 0 0 0.5rem 0;
    padding-right: 2rem;
  }

  .paper-meta {
    font-family: system-ui, sans-serif;
    font-size: 11px;
    color: #888;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }

  .meta-sep { opacity: 0.5; margin: 0 4px; }

  .link-bar {
    display: flex;
    gap: 0.5rem;
  }

  .link-btn {
    font-family: system-ui, sans-serif;
    font-size: 10px;
    color: #5e72e4;
    text-decoration: none;
    padding: 2px 8px;
    border: 1px solid #2a2a2a;
    border-radius: 3px;
    transition: background 120ms;
  }

  .link-btn:hover { background: #1a1a1a; }

  .drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 1.25rem 2rem;
  }

  .section {
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-family: system-ui, sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #666;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  .paper-summary {
    font-family: system-ui, sans-serif;
    font-size: 13px;
    color: #ccc;
    line-height: 1.5;
    margin: 0;
  }

  .concept-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .concept-chip {
    font-family: "SF Mono", monospace;
    font-size: 10px;
    background: #1a1a1a;
    color: #aaa;
    border: 1px solid #2a2a2a;
    padding: 3px 8px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 120ms, border-color 120ms;
  }

  .concept-chip:hover {
    background: #222;
    border-color: #5e72e4;
    color: #e0e0e0;
  }

  .lineage-list, .related-list, .hw-list, .neuro-list, .milestone-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .lineage-item, .related-item {
    display: flex;
    gap: 8px;
    align-items: baseline;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    color: #aaa;
    padding: 4px 0;
    cursor: pointer;
    border-bottom: 1px solid rgba(42, 42, 42, 0.5);
    transition: color 100ms;
  }

  .lineage-item:hover, .related-item:hover {
    color: #e0e0e0;
  }

  .lineage-year, .related-year {
    flex-shrink: 0;
    font-family: "SF Mono", monospace;
    font-size: 10px;
    color: #666;
    min-width: 3.5ch;
  }

  .lineage-title, .related-title {
    flex: 1;
    font-family: "SF Mono", monospace;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .related-authors {
    flex-shrink: 0;
    font-size: 9px;
    color: #555;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hw-list li, .neuro-list li, .milestone-list li {
    display: flex;
    gap: 8px;
    align-items: baseline;
    padding: 3px 0;
    font-size: 11px;
  }

  .hw-year, .neuro-year, .ms-year {
    flex-shrink: 0;
    font-family: "SF Mono", monospace;
    font-size: 10px;
    color: #666;
    min-width: 3.5ch;
  }

  .hw-name, .neuro-event {
    font-family: system-ui, sans-serif;
    font-size: 11px;
    color: #888;
  }

  .ms-title {
    font-family: system-ui, sans-serif;
    font-size: 11px;
    color: #aaa;
  }

  .ms-impact {
    font-size: 10px;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .detail-drawer {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .detail-drawer {
      animation: none;
    }
  }
</style>
