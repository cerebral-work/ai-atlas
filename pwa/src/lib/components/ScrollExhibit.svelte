<script lang="ts">
  import { allPapers, yearRange, categoryMeta } from "$lib/data/papers";
  import { eras } from "$lib/data/eras";
  import { milestones } from "$lib/data/milestones";
  import type { Paper, PaperCategory, Milestone } from "$lib/types";
  import PaperRow from "./PaperRow.svelte";

  let {
    activeCategories,
    searchQuery,
    selectedPaper,
    hoveredPaper,
    showEras = true,
    showMilestones = true,
    onSelect,
    onHover,
  }: {
    activeCategories: Set<PaperCategory>;
    searchQuery: string;
    selectedPaper: Paper | null;
    hoveredPaper: Paper | null;
    showEras?: boolean;
    showMilestones?: boolean;
    onSelect: (p: Paper) => void;
    onHover: (p: Paper | null) => void;
  } = $props();

  // --- Virtual scrolling state ---
  let scrollTop = $state(0);
  let containerHeight = $state(800);
  let scrollContainer: HTMLDivElement | null = $state(null);
  const VIEWPORT_BUFFER = 400; // px above and below viewport

  // --- Compute row heights based on era ---
  // Pre-2000: 80px (full), 2000-2015: 50px (compact), 2016+: 28px (dense)
  function rowHeightForYear(year: number): number {
    if (year < 2000) return 76;
    if (year < 2016) return 46;
    return 28;
  }

  // --- Combine papers + milestones into a sorted timeline ---
  type TimelineEntry =
    | { kind: "paper"; data: Paper; year: number }
    | { kind: "milestone"; data: Milestone; year: number };

  // --- Build timeline entries from all papers ---
  const allTimelinePapers = $derived(
    allPapers.map(p => ({
      kind: "paper" as const,
      data: p,
      year: p.year,
    }))
  );

  // --- Merge milestones into timeline (for position calculation only) ---
  const fullTimeline = $derived.by(() => {
    const entries: TimelineEntry[] = [...allTimelinePapers];
    if (showMilestones) {
      for (const m of milestones) {
        entries.push({ kind: "milestone" as const, data: m, year: m.year });
      }
    }
    entries.sort((a, b) => a.year - b.year);
    return entries;
  });

  // --- Calculate total scroll height and positions ---
  type PositionedEntry = {
    entry: TimelineEntry;
    y: number;
    rowHeight: number;
    intraYearOffset: number;
  };

  const positionedEntries = $derived.by(() => {
    const result: PositionedEntry[] = [];
    let y = 0;
    let lastYear = -1;
    let intraYearIndex = 0;

    for (const entry of fullTimeline) {
      const rowHeight = entry.kind === "milestone" ? 24 : rowHeightForYear(entry.year);

      // Intra-year offset: papers in the same year stack with small offset
      if (entry.year !== lastYear) {
        intraYearIndex = 0;
        lastYear = entry.year;
      } else {
        intraYearIndex++;
      }

      result.push({
        entry,
        y,
        rowHeight,
        intraYearOffset: intraYearIndex,
      });
      y += rowHeight;
    }

    return result;
  });

  const totalHeight = $derived(
    positionedEntries.length > 0
      ? positionedEntries[positionedEntries.length - 1].y + positionedEntries[positionedEntries.length - 1].rowHeight
      : 0
  );

  // --- Filter logic ---
  const isSearching = $derived(searchQuery.length > 0);

  const positionedPapers = $derived(
    positionedEntries.filter(pe => pe.entry.kind === "paper")
  );

  // --- Determine which entries are visible (virtual scroll) ---
  // During search, only show matching papers
  const searchMatches = $derived.by(() => {
    if (!isSearching) return null;
    const q = searchQuery.toLowerCase();
    const matches = new Set<string>();
    for (const pe of positionedPapers) {
      const p = pe.entry.data as Paper;
      if (
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
      ) {
        matches.add(p.id);
      }
    }
    return matches;
  });

  function isEntryVisible(pe: PositionedEntry): boolean {
    if (pe.entry.kind === "milestone") {
      if (!showMilestones) return false;
      return true; //里程碑 always pass position check
    }

    const p = pe.entry.data as Paper;

    // Category filter
    if (!activeCategories.has(p.category)) {
      if (isSearching) return false;
      return true; // Still rendered but dimmed
    }

    // Search filter
    if (searchMatches && !searchMatches.has(p.id)) return false;

    return true;
  }

  function isEntryDimmed(pe: PositionedEntry): boolean {
    if (pe.entry.kind === "paper") {
      const p = pe.entry.data as Paper;
      if (!activeCategories.has(p.category) && !isSearching) return true;
    }
    return false;
  }

  // --- Visible entries within viewport ---
  const visibleEntries = $derived.by(() => {
    const start = scrollTop - VIEWPORT_BUFFER;
    const end = scrollTop + containerHeight + VIEWPORT_BUFFER;

    return positionedEntries.filter(pe =>
      pe.y + pe.rowHeight >= start && pe.y <= end
    );
  });

  // --- Year markers (decade) ---
  const decadeMarkers = $derived.by(() => {
    const [minY, maxY] = yearRange;
    const result: { year: number; y: number }[] = [];
    for (let y = Math.ceil(minY / 10) * 10; y <= maxY; y += 10) {
      // Find the first entry at or after this year
      const entry = positionedEntries.find(pe => pe.entry.year >= y);
      if (entry) {
        result.push({ year: y, y: entry.y });
      }
    }
    return result;
  });

  // --- Era bands ---
  const eraBands = $derived.by(() => {
    return eras.map(era => {
      const startPos = (() => {
        const pe = positionedEntries.find(e => e.entry.year >= era.yearStart);
        return pe ? pe.y : 0;
      })();
      const endPos = (() => {
        const pe = [...positionedEntries].reverse().find(e => e.entry.year <= era.yearEnd);
        return pe ? pe.y + pe.rowHeight : totalHeight;
      })();
      return { era, y: startPos, height: Math.max(endPos - startPos, 0) };
    });
  });

  // --- Related paper IDs (for highlight) ---
  const relatedIds = $derived.by(() => {
    const ref = hoveredPaper || selectedPaper;
    if (!ref) return new Set<string>();
    const ids = new Set<string>();
    if (ref.related) for (const id of ref.related) ids.add(id);
    // Also highlight papers that reference this one
    for (const p of allPapers) {
      if (p.related?.includes(ref.id)) ids.add(p.id);
    }
    return ids;
  });

  // --- Scroll handling ---
  function onScroll(e: Event) {
    const el = e.target as HTMLDivElement;
    scrollTop = el.scrollTop;
  }

  export function scrollToPaper(paper: Paper) {
    const pe = positionedPapers.find(p => (p.entry.data as Paper).id === paper.id);
    if (pe && scrollContainer) {
      scrollContainer.scrollTo({ top: pe.y - 100, behavior: "smooth" });
    }
  }

</script>

<div
  class="scroll-exhibit"
  bind:this={scrollContainer}
  onscroll={onScroll}
  role="list"
  aria-label="Timeline of AI/ML papers and milestones"
>
  <div class="scroll-content" style="height: {totalHeight}px;">
    <!-- Era bands (background) -->
    {#if showEras}
      {#each eraBands as band}
        <div
          class="era-band"
          style="top: {band.y}px; height: {band.height}px; --era-color: {band.era.color};"
        >
          <span class="era-label">{band.era.name}</span>
          <span class="era-desc">{band.era.description}</span>
        </div>
      {/each}
    {/if}

    <!-- Decade markers -->
    {#each decadeMarkers as marker}
      <div class="decade-marker" style="top: {marker.y}px;">
        {marker.year}
      </div>
    {/each}

    <!-- Visible entries (virtual scrolled) -->
    {#each visibleEntries as pe (pe.entry.kind + "-" + pe.entry.data.id)}
      {#if pe.entry.kind === "paper"}
        <div
          class="row-wrapper"
          style="top: {pe.y}px; height: {pe.rowHeight}px;"
          role="listitem"
        >
          <PaperRow
            paper={pe.entry.data as Paper}
            rowHeight={pe.rowHeight}
            isSelected={selectedPaper?.id === pe.entry.data.id}
            isHovered={hoveredPaper?.id === pe.entry.data.id}
            isRelated={relatedIds.has(pe.entry.data.id)}
            isDimmed={isEntryDimmed(pe)}
            onSelect={onSelect}
            onHover={onHover}
          />
        </div>
      {:else}
        <div
          class="milestone-row"
          style="top: {pe.y}px;"
          role="listitem"
        >
          <span class="milestone-type">{pe.entry.data.type}</span>
          <span class="milestone-title">{pe.entry.data.title}</span>
          <span class="milestone-year">({pe.entry.data.year})</span>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .scroll-exhibit {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: auto;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-content {
    position: relative;
    width: 100%;
  }

  .row-wrapper {
    position: absolute;
    left: 0;
    right: 0;
  }

  .milestone-row {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 1rem 0.25rem 1.5rem;
    height: 24px;
    border-left: 2px solid #5e72e4;
    background: rgba(94, 114, 228, 0.04);
    font-family: "SF Mono", "JetBrains Mono", "Fira Code", monospace;
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .milestone-type {
    flex-shrink: 0;
    color: #5e72e4;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .milestone-title {
    flex: 1;
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .milestone-year {
    flex-shrink: 0;
    color: #666;
    font-size: 9px;
  }

  .era-band {
    position: absolute;
    left: 0;
    right: 0;
    background: color-mix(in oklab, var(--era-color) 7%, transparent);
    pointer-events: none;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
  }

  .era-label {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: var(--era-color);
    opacity: 0.3;
    font-family: system-ui, sans-serif;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    white-space: nowrap;
    pointer-events: none;
  }

  .era-desc {
    position: absolute;
    top: 2rem;
    right: 1rem;
    color: var(--era-color);
    opacity: 0.15;
    font-family: system-ui, sans-serif;
    font-size: 11px;
    max-width: 200px;
    text-align: right;
  }

  .decade-marker {
    position: absolute;
    left: 0.75rem;
    color: #333;
    font-family: "SF Mono", "JetBrains Mono", "Fira Code", monospace;
    font-size: 9px;
    font-weight: 600;
    pointer-events: none;
    z-index: 1;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #2a2a2a;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #3a3a3a;
  }

  @media (prefers-reduced-motion: reduce) {
    .scroll-exhibit {
      scroll-behavior: auto;
    }
  }
</style>
