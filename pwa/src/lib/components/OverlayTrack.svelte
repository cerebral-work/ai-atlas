<script lang="ts">
  import { hardware } from "$lib/data/hardware";
  import { neuroEvents } from "$lib/data/neuro";
  import { milestones } from "$lib/data/milestones";
  import { yearRange } from "$lib/data/papers";

  let {
    showHardware = true,
    showNeuro = true,
    showCompute = false,
    showMilestones = true,
  }: {
    showHardware?: boolean;
    showNeuro?: boolean;
    showCompute?: boolean;
    showMilestones?: boolean;
  } = $props();

  const [minYear, maxYear] = yearRange;
  const yearSpan = maxYear - minYear;

  function yearToPercent(year: number): number {
    return ((year - minYear) / yearSpan) * 100;
  }

  // --- Filter data ---
  const hwItems = $derived(showHardware ? hardware : []);
  const neuroItems = $derived(showNeuro ? neuroEvents : []);
  const msItems = $derived(showMilestones ? milestones.filter(m => m.type !== "event") : []);
</script>

<div class="overlay-track left-track">
  {#if showNeuro}
    <div class="track-header">NEURO</div>
    <div class="track-body">
      {#each neuroItems as n}
        <div
          class="track-item neuro-item"
          style="top: {yearToPercent(n.year)}%;"
          title="{n.year}: {n.title}"
        >
          <span class="track-dot neuro-dot"></span>
          <span class="track-label">{n.title}</span>
        </div>
      {/each}
    </div>
  {/if}
  {#if showMilestones}
    <div class="track-header">MIL</div>
    <div class="track-body">
      {#each msItems as m}
        <div
          class="track-item ms-item"
          style="top: {yearToPercent(m.year)}%;"
          title="{m.year}: {m.title}"
        >
          <span class="track-dot ms-dot" data-type={m.type}></span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<div class="overlay-track right-track">
  {#if showHardware}
    <div class="track-header">HW</div>
    <div class="track-body">
      {#each hwItems as h}
        <div
          class="track-item hw-item"
          style="top: {yearToPercent(h.year)}%;"
          title="{h.year}: {h.name}"
        >
          <span class="track-dot hw-dot"></span>
          <span class="track-label">{h.name}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .overlay-track {
    width: 120px;
    flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #0a0a0a;
  }

  .left-track {
    border-right: 1px solid #2a2a2a;
  }

  .right-track {
    border-left: 1px solid #2a2a2a;
  }

  .track-header {
    font-family: system-ui, sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #555;
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid #2a2a2a;
    text-align: center;
  }

  .track-body {
    flex: 1;
    position: relative;
    height: 100%;
  }

  .track-item {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 4px;
    transform: translateY(-50%);
    cursor: default;
  }

  .track-dot {
    flex-shrink: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .neuro-dot { background: #8e44ad; }
  .hw-dot { background: #27ae60; }
  .ms-dot { background: #5e72e4; }

  .track-label {
    font-family: "SF Mono", monospace;
    font-size: 8px;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90px;
  }

  @media (max-width: 768px) {
    .overlay-track {
      display: none;
    }
  }
</style>
