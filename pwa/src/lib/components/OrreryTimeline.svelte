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
  }: {
    papers: Paper[];
    minYear: number;
    maxYear: number;
    selectedPaper: Paper | null;
    hoveredPaper: Paper | null;
    onSelectPaper: (paper: Paper | null) => void;
    onHoverPaper: (paper: Paper | null) => void;
  } = $props();

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let dpr = 1;
  let mouseAngle = $state(0); // radians from top, clockwise
  let mouseInside = $state(false);
  let mouseLocalX = $state(0);
  let mouseLocalY = $state(0);

  const yearSpan = maxYear - minYear;
  const categoryOrder: PaperCategory[] = [
    "foundations", "symbolic-ai", "neural-networks", "statistical-learning",
    "deep-learning", "computer-vision", "nlp", "transformers",
    "llms", "reinforcement-learning", "generative-models", "diffusion-models",
    "alignment-safety", "multimodal", "scaling-efficiency", "retrieval-memory",
    "agents", "robotics", "ai-safety", "interpretability",
  ];

  // Spatial index for hit testing
  let tickIndex: { x: number; y: number; r: number; paper: Paper }[] = [];

  // Year → angle (radians, 0 = top, clockwise)
  function yearToAngle(year: number): number {
    return ((year - minYear) / yearSpan) * Math.PI * 2 - Math.PI / 2;
  }

  // Angle → year
  function angleToYear(rad: number): number {
    let t = (rad + Math.PI / 2) / (Math.PI * 2);
    if (t < 0) t += 1;
    if (t >= 1) t -= 1;
    return Math.round(minYear + t * yearSpan);
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

    tickIndex = [];

    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(cx, cy) - 20;
    const minR = maxR * 0.15; // central hub
    const ringSpan = maxR - minR;
    const numRings = categoryOrder.length;
    const ringStep = ringSpan / numRings;

    // ── Background face (mater) ──
    // Outer ring border
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, maxR + 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, minR, 0, Math.PI * 2);
    ctx.stroke();

    // ── Ring lines (concentric circles for each category) ──
    for (let i = 0; i <= numRings; i++) {
      const r = minR + i * ringStep;
      ctx.strokeStyle = i % 5 === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // ── Decade radial lines (reticulated face) ──
    for (let y = Math.ceil(minYear / 10) * 10; y <= maxYear; y += 10) {
      const angle = yearToAngle(y);
      const x1 = cx + Math.cos(angle) * minR;
      const y1 = cy + Math.sin(angle) * minR;
      const x2 = cx + Math.cos(angle) * (maxR + 6);
      const y2 = cy + Math.sin(angle) * (maxR + 6);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Decade label outside the ring
      const lx = cx + Math.cos(angle) * (maxR + 16);
      const ly = cy + Math.sin(angle) * (maxR + 16);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(y), lx, ly);
    }

    // ── Year tick marks (fine, every 5 years) ──
    for (let y = minYear; y <= maxYear; y += 5) {
      if (y % 10 === 0) continue; // skip decades (already drawn)
      const angle = yearToAngle(y);
      const x1 = cx + Math.cos(angle) * (maxR - 3);
      const y1 = cy + Math.sin(angle) * (maxR - 3);
      const x2 = cx + Math.cos(angle) * (maxR + 3);
      const y2 = cy + Math.sin(angle) * (maxR + 3);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // ── Paper ticks on their category rings ──
    const activeCats = new Set(papers.map((p) => p.category));
    for (let ringI = 0; ringI < numRings; ringI++) {
      const cat = categoryOrder[ringI];
      const ringR = minR + (ringI + 0.5) * ringStep;
      const color = categoryMeta[cat].color;
      const isRingActive = activeCats.has(cat);

      if (!isRingActive) continue;

      const ringPapers = papers.filter((p) => p.category === cat);
      for (const paper of ringPapers) {
        const angle = yearToAngle(paper.year);
        const isSelected = selectedPaper?.id === paper.id;
        const isHovered = hoveredPaper?.id === paper.id;
        const isDimmed = (hoveredPaper || selectedPaper) && !isSelected && !isHovered;

        // Tick mark: radial line on the ring
        const tickLen = isSelected ? ringStep * 0.7 : isHovered ? ringStep * 0.6 : ringStep * 0.35;
        const tickWidth = isSelected ? 3 : isHovered ? 2.5 : 1.5;
        const alpha = isDimmed ? 0.1 : isSelected ? 1.0 : isHovered ? 0.9 : 0.5;

        const x1 = cx + Math.cos(angle) * (ringR - tickLen / 2);
        const y1 = cy + Math.sin(angle) * (ringR - tickLen / 2);
        const x2 = cx + Math.cos(angle) * (ringR + tickLen / 2);
        const y2 = cy + Math.sin(angle) * (ringR + tickLen / 2);

        if (isSelected || isHovered) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = color;
        }

        ctx.globalAlpha = alpha;
        ctx.strokeStyle = color;
        ctx.lineWidth = tickWidth;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Hit test point: midpoint of tick
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        tickIndex.push({ x: midX, y: midY, r: 8, paper });
      }
    }

    // ── Relation arcs (curved lines between related papers) ──
    if (papers.length > 0) {
      for (const paper of papers) {
        if (!paper.related) continue;
        for (const relId of paper.related) {
          const rel = papers.find((p) => p.id === relId);
          if (!rel) continue;
          const a1 = yearToAngle(paper.year);
          const a2 = yearToAngle(rel.year);
          const r1 = minR + (categoryOrder.indexOf(paper.category) + 0.5) * ringStep;
          const r2 = minR + (categoryOrder.indexOf(rel.category) + 0.5) * ringStep;

          const x1 = cx + Math.cos(a1) * r1;
          const y1 = cy + Math.sin(a1) * r1;
          const x2 = cx + Math.cos(a2) * r2;
          const y2 = cy + Math.sin(a2) * r2;

          // Draw curved arc through center area
          ctx.strokeStyle = categoryMeta[paper.category].color;
          ctx.globalAlpha = 0.08;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          // Quadratic curve with control point near center
          const cpx = cx + Math.cos((a1 + a2) / 2) * minR * 0.5;
          const cpy = cy + Math.sin((a1 + a2) / 2) * minR * 0.5;
          ctx.moveTo(x1, y1);
          ctx.quadraticCurveTo(cpx, cpy, x2, y2);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    // ── Alidade (mouse pointer) ──
    if (mouseInside) {
      const angle = mouseAngle;
      const x1 = cx + Math.cos(angle) * minR;
      const y1 = cy + Math.sin(angle) * minR;
      const x2 = cx + Math.cos(angle) * (maxR + 10);
      const y2 = cy + Math.sin(angle) * (maxR + 10);

      // Pointer line
      ctx.strokeStyle = "rgba(94, 114, 228, 0.3)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Year readout at the tip
      const tipX = cx + Math.cos(angle) * (maxR + 28);
      const tipY = cy + Math.sin(angle) * (maxR + 28);
      ctx.fillStyle = "#5e72e4";
      ctx.font = "bold 11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const yr = angleToYear(angle);
      ctx.fillText(String(yr), tipX, tipY);
    }

    // ── Central hub ──
    ctx.fillStyle = "rgba(20, 20, 20, 0.9)";
    ctx.beginPath();
    ctx.arc(cx, cy, minR * 0.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Central label
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.font = "bold 11px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("AI/ML", cx, cy - 6);
    ctx.font = "9px monospace";
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillText(`${minYear}—${maxYear}`, cx, cy + 8);

    // Paper count
    ctx.font = "bold 20px monospace";
    ctx.fillStyle = "rgba(94, 114, 228, 0.4)";
    ctx.fillText(String(papers.length), cx, cy + 26);
  }

  function hitTest(x: number, y: number): Paper | null {
    for (const tick of tickIndex) {
      const dx = tick.x - x;
      const dy = tick.y - y;
      if (Math.sqrt(dx * dx + dy * dy) <= tick.r) {
        return tick.paper;
      }
    }
    return null;
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseLocalX = x;
    mouseLocalY = y;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    mouseAngle = Math.atan2(y - cy, x - cx);
    mouseInside = true;

    const paper = hitTest(x, y);
    onHoverPaper(paper);
    canvas.style.cursor = paper ? "pointer" : "default";
    render();
  }

  function handleClick(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const paper = hitTest(x, y);
    if (paper) {
      onSelectPaper(paper);
    } else {
      onSelectPaper(null);
    }
  }

  function handleMouseLeave() {
    mouseInside = false;
    onHoverPaper(null);
    canvas.style.cursor = "default";
    render();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hoveredPaper) onSelectPaper(hoveredPaper);
    }
  }

  $effect(() => {
    papers;
    selectedPaper;
    hoveredPaper;
    render();
  });

  $effect(() => {
    if (!canvas) return;
    const observer = new ResizeObserver(() => render());
    observer.observe(canvas);
    return () => observer.disconnect();
  });

  $effect(() => {
    if (!canvas) return;
    ctx = canvas.getContext("2d")!;
    dpr = window.devicePixelRatio || 1;
    render();
  });
</script>

<canvas
  bind:this={canvas}
  class="orrery-canvas"
  onmousemove={handleMouseMove}
  onclick={handleClick}
  onmouseleave={handleMouseLeave}
  onkeydown={handleKeydown}
  tabindex="0"
  role="img"
  aria-label="AI/ML history orrery dial with {papers.length} papers on {categoryOrder.length} concentric rings"
></canvas>

{#if hoveredPaper && !selectedPaper}
  <div
    class="orrery-tooltip"
    style="left: {mouseLocalX}px; top: {mouseLocalY < 120 ? mouseLocalY + 20 : mouseLocalY - 70}px"
  >
    <div class="ot-cat" style="color: {categoryMeta[hoveredPaper.category].color}">
      {categoryMeta[hoveredPaper.category].label}
    </div>
    <div class="ot-title">{hoveredPaper.title}</div>
    <div class="ot-meta">{hoveredPaper.authors} · {hoveredPaper.year}</div>
  </div>
{/if}

<style>
  .orrery-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
  .orrery-canvas:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
  .orrery-tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 100;
    background: rgba(14, 14, 14, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 8px 12px;
    max-width: 300px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .ot-cat {
    font-size: 9px;
    font-family: monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 3px;
  }
  .ot-title {
    font-size: 11px;
    color: #e0e0e0;
    font-family: monospace;
    line-height: 1.3;
    margin-bottom: 3px;
  }
  .ot-meta {
    font-size: 10px;
    color: #888;
    font-family: monospace;
  }
</style>
