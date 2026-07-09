<script lang="ts">
  import type { Era } from "$lib/types";

  let {
    eras,
    yearToX,
    show = true,
  }: {
    eras: Era[];
    yearToX: (year: number) => number;
    show?: boolean;
  } = $props();
</script>

{#if show}
  <div class="era-bands">
    {#each eras as era}
      {@const x1 = yearToX(era.yearStart)}
      {@const x2 = yearToX(era.yearEnd)}
      {@const width = x2 - x1}
      <div
        class="era-band"
        style="left: {x1}%; width: {width}%; --era-color: {era.color}"
        title="{era.name}: {era.description}"
      >
        <span class="era-label">{era.name}</span>
      </div>
    {/each}
  </div>
{/if}

<style>
  .era-bands {
    position: absolute;
    inset: 0;
    margin-left: var(--gutter);
    pointer-events: none;
    z-index: 0;
  }
  .era-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--era-color) 8%, transparent);
    border-left: 1px solid color-mix(in srgb, var(--era-color) 30%, transparent);
    animation: era-fade-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) backwards;
  }
  .era-label {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 9px;
    color: color-mix(in srgb, var(--era-color) 60%, var(--text-dim));
    white-space: nowrap;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    max-height: 100px;
    overflow: hidden;
  }
  @keyframes era-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Scroll-driven era transitions (progressive enhancement) */
  @supports (animation-timeline: view()) {
    .era-band {
      animation: era-parallax linear both;
      animation-timeline: view() inline;
      animation-range: entry 0% cover 50%;
    }
    @keyframes era-parallax {
      from { opacity: 0.3; }
      to { opacity: 1; }
    }
    .era-label {
      animation: era-label-drift linear both;
      animation-timeline: view() inline;
      animation-range: entry 0% cover 50%;
    }
    @keyframes era-label-drift {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  }
</style>
