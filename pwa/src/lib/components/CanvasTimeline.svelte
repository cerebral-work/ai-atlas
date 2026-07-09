<script lang="ts">
  import type { Paper, PaperCategory } from "$lib/types";
  import { categoryMeta } from "$lib/data/papers";

  let {
    papers,
    yearToX,
    categoryOrder,
    selectedPaper,
    hoveredPaper,
    onSelectPaper,
    onHoverPaper,
  }: {
    papers: Paper[];
    yearToX: (year: number) => number;
    categoryOrder: PaperCategory[];
    selectedPaper: Paper | null;
    hoveredPaper: Paper | null;
    onSelectPaper: (paper: Paper | null) => void;
    onHoverPaper: (paper: Paper | null) => void;
  } = $props();

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let dpr = 1;
  let mouseX = $state(0);
  let mouseY = $state(0);

  // Spatial index for hit testing
  let dotIndex: { x: number; y: number; r: number; paper: Paper }[] = [];

  function categoryY(cat: PaperCategory): number {
    const idx = categoryOrder.indexOf(cat);
    const half = categoryOrder.length / 2;
    if (idx < half) {
      const t = idx / half;
      return 48 - t * 42;
    } else {
      const t = (idx - half) / half;
      return 52 + t * 42;
    }
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

    dotIndex = [];

    for (const paper of papers) {
      const x = (yearToX(paper.year) / 100) * w;
      const y = (categoryY(paper.category) / 100) * h;
      const color = categoryMeta[paper.category].color;
      const isSelected = selectedPaper?.id === paper.id;
      const isHovered = hoveredPaper?.id === paper.id;
      const r = isSelected ? 10 : isHovered ? 9 : 5;

      if (isSelected || isHovered) {
        ctx.shadowBlur = 12;
        ctx.shadowColor = color;
      }

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.shadowBlur = 0;

      dotIndex.push({ x, y, r: r + 3, paper });
    }
  }

  function hitTest(x: number, y: number): Paper | null {
    for (const dot of dotIndex) {
      const dx = dot.x - x;
      const dy = dot.y - y;
      if (Math.sqrt(dx * dx + dy * dy) <= dot.r) {
        return dot.paper;
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

  // Initialize canvas context after element is mounted
  $effect(() => {
    if (!canvas) return;
    ctx = canvas.getContext("2d")!;
    dpr = window.devicePixelRatio || 1;
    render();
  });
</script>

<canvas
  bind:this={canvas}
  class="canvas-timeline"
  onmousemove={handleMouseMove}
  onclick={handleClick}
  onmouseleave={handleMouseLeave}
  onkeydown={handleKeydown}
  tabindex="0"
  role="img"
  aria-label="AI/ML history timeline with {papers.length} papers"
></canvas>

{#if hoveredPaper}
  {@const flipBelow = mouseY < 80}
  <div class="canvas-tooltip" class:flip-below={flipBelow} style="left: {mouseX}px; top: {flipBelow ? mouseY + 15 : mouseY - 10}px">
    <strong>{hoveredPaper.title}</strong>
    <br />
    <small>{hoveredPaper.authors} ({hoveredPaper.year})</small>
  </div>
{/if}

<style>
  .canvas-timeline {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  .canvas-timeline:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
  .canvas-tooltip {
    position: absolute;
    transform: translate(-50%, -100%);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 6px 10px;
    border-radius: var(--radius-md);
    font-size: 11px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 100;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  .canvas-tooltip.flip-below {
    transform: translate(-50%, 0);
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.4);
  }
  .canvas-tooltip strong {
    color: var(--text);
  }
  .canvas-tooltip small {
    color: var(--text-dim);
  }
</style>
