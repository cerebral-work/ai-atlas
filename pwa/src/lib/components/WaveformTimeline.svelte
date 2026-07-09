<script lang="ts">
  import type { Paper, PaperCategory } from "$lib/types";
  import { categoryMeta } from "$lib/data/papers";

  let {
    papers,
    minYear,
    maxYear,
    selectedPaper,
    hoveredPaper,
    onSelectPaper,
    onHoverPaper,
    onScrollProgress,
  }: {
    papers: Paper[];
    minYear: number;
    maxYear: number;
    selectedPaper: Paper | null;
    hoveredPaper: Paper | null;
    onSelectPaper: (paper: Paper | null) => void;
    onHoverPaper: (paper: Paper | null) => void;
    onScrollProgress?: (pct: number) => void;
  } = $props();

  // Layout constants
  const YEAR_WIDTH = 48; // px per year — wide enough for large bars
  const BAR_WIDTH = 28; // px — each paper bar
  const BAR_GAP = 4;
  const MIN_BAR_HEIGHT = 36;
  const MAX_BAR_HEIGHT = 80;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let dpr = 1;
  let scrollContainer: HTMLDivElement;
  let mouseX = $state(0);
  let mouseY = $state(0);

  // Total scroll width
  const totalWidth = $derived((maxYear - minYear + 1) * YEAR_WIDTH);

  // Group papers by year, sorted
  const papersByYear = $derived.by(() => {
    const map = new Map<number, Paper[]>();
    for (const p of papers) {
      const list = map.get(p.year) ?? [];
      list.push(p);
      map.set(p.year, list);
    }
    // Sort each year's papers by category order for consistent visual grouping
    for (const [year, list] of map) {
      list.sort((a, b) => a.category.localeCompare(b.category));
      map.set(year, list);
    }
    return map;
  });

  // Spatial index for hit testing: { x, y, w, h, paper }
  let barIndex: { x: number; y: number; w: number; h: number; paper: Paper }[] = [];

  function yearToX(year: number): number {
    return (year - minYear) * YEAR_WIDTH + YEAR_WIDTH / 2;
  }

  function render() {
    if (!ctx || !canvas) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    barIndex = [];
    const centerY = h / 2;

    // Draw center line (the waveform zero-crossing)
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(w, centerY);
    ctx.stroke();

    // Draw decade grid lines
    for (let y = Math.ceil(minYear / 10) * 10; y <= maxYear; y += 10) {
      const x = yearToX(y);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();

      // Year label
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      ctx.fillText(String(y), x, h - 6);
    }

    // Draw paper bars
    for (const [year, yearPapers] of papersByYear) {
      const yearX = yearToX(year);

      // Alternate bars above/below center
      for (let i = 0; i < yearPapers.length; i++) {
        const paper = yearPapers[i];
        const above = i % 2 === 0;
        const offset = Math.floor(i / 2) * (BAR_WIDTH + BAR_GAP);
        const barH = MIN_BAR_HEIGHT + (paper.related?.length ?? 0) * 8;
        const clampedH = Math.min(barH, MAX_BAR_HEIGHT);

        const barX = above
          ? yearX - BAR_WIDTH / 2 - offset - BAR_GAP
          : yearX + BAR_GAP + offset;
        const barY = above ? centerY - clampedH : centerY;
        const barW = BAR_WIDTH;
        const barHt = clampedH;

        const color = categoryMeta[paper.category].color;
        const isSelected = selectedPaper?.id === paper.id;
        const isHovered = hoveredPaper?.id === paper.id;
        const isDimmed = (hoveredPaper || selectedPaper) && !isSelected && !isHovered;

        // Glow for selected/hovered
        if (isSelected || isHovered) {
          ctx.shadowBlur = 16;
          ctx.shadowColor = color;
        }

        // Bar with rounded top
        const alpha = isDimmed ? 0.15 : isSelected ? 1.0 : isHovered ? 0.9 : 0.65;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        if (above) {
          // Rounded top
          ctx.roundRect(barX, barY, barW, barHt, [4, 4, 0, 0]);
        } else {
          // Rounded bottom
          ctx.roundRect(barX, barY, barW, barHt, [0, 0, 4, 4]);
        }
        ctx.fill();

        // Border
        ctx.strokeStyle = isSelected ? "#fff" : "rgba(255,255,255,0.1)";
        ctx.lineWidth = isSelected ? 1.5 : 0.5;
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Store for hit testing
        barIndex.push({ x: barX, y: barY, w: barW, h: barHt, paper });
      }
    }
  }

  function hitTest(x: number, y: number): Paper | null {
    for (const bar of barIndex) {
      if (x >= bar.x && x <= bar.x + bar.w && y >= bar.y && y <= bar.y + bar.h) {
        return bar.paper;
      }
    }
    return null;
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    const paper = hitTest(mouseX, mouseY);
    onHoverPaper(paper);
    canvas.style.cursor = paper ? "pointer" : "default";
  }

  function handleClick(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const paper = hitTest(x, y);
    onSelectPaper(paper);
  }

  function handleMouseLeave() {
    onHoverPaper(null);
    canvas.style.cursor = "default";
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hoveredPaper) onSelectPaper(hoveredPaper);
    }
  }

  function handleScroll() {
    if (!scrollContainer || !onScrollProgress) return;
    const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (max > 0) {
      onScrollProgress(scrollContainer.scrollLeft / max);
    }
  }

  // Re-render when data/state changes
  $effect(() => {
    papers;
    selectedPaper;
    hoveredPaper;
    render();
  });

  // Re-render on resize
  $effect(() => {
    if (!canvas) return;
    const observer = new ResizeObserver(() => render());
    observer.observe(canvas);
    return () => observer.disconnect();
  });

  // Initialize canvas context after mount
  $effect(() => {
    if (!canvas) return;
    ctx = canvas.getContext("2d")!;
    dpr = window.devicePixelRatio || 1;
    render();
  });
</script>

<div class="waveform-scroll" bind:this={scrollContainer} onscroll={handleScroll}>
  <div class="waveform-inner" style="width: {totalWidth}px">
    <canvas
      bind:this={canvas}
      class="waveform-canvas"
      onmousemove={handleMouseMove}
      onclick={handleClick}
      onmouseleave={handleMouseLeave}
      onkeydown={handleKeydown}
      tabindex="0"
      role="img"
      aria-label="AI/ML history waveform with {papers.length} papers"
    ></canvas>
  </div>
</div>

{#if hoveredPaper && !selectedPaper}
  <div
    class="wave-hud-hover"
    style="left: {mouseX}px; top: {mouseY < 100 ? mouseY + 20 : mouseY - 80}px"
  >
    <div class="hud-cat" style="color: {categoryMeta[hoveredPaper.category].color}">
      {categoryMeta[hoveredPaper.category].label}
    </div>
    <div class="hud-title">{hoveredPaper.title}</div>
    <div class="hud-meta">{hoveredPaper.authors} · {hoveredPaper.year}</div>
  </div>
{/if}

<style>
  .waveform-scroll {
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
  }
  .waveform-scroll::-webkit-scrollbar {
    height: 6px;
  }
  .waveform-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .waveform-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  .waveform-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .waveform-inner {
    position: relative;
    height: 100%;
  }
  .waveform-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .waveform-canvas:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }

  .wave-hud-hover {
    position: absolute;
    pointer-events: none;
    z-index: 100;
    background: rgba(20, 20, 20, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 10px 14px;
    max-width: 320px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .hud-cat {
    font-size: 9px;
    font-family: var(--font-mono, monospace);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }
  .hud-title {
    font-size: 12px;
    color: #e0e0e0;
    font-family: var(--font-mono, monospace);
    line-height: 1.3;
    margin-bottom: 4px;
  }
  .hud-meta {
    font-size: 10px;
    color: #888;
    font-family: var(--font-mono, monospace);
  }
</style>
