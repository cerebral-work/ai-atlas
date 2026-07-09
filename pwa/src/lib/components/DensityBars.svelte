<script lang="ts">
  import type { Paper } from "$lib/types";

  let {
    papersByYear,
    yearToX,
    maxPapersInYear,
    show = true,
  }: {
    papersByYear: Map<number, Paper[]>;
    yearToX: (year: number) => number;
    maxPapersInYear: number;
    show?: boolean;
  } = $props();
</script>

{#if show}
  <div class="density-band">
    <div class="band-label">Papers per Year</div>
    <div class="density-track">
      {#each Array.from(papersByYear.entries()) as [year, yearPapers]}
        <div
          class="density-bar"
          style="left: {yearToX(year)}%; height: {(yearPapers.length / maxPapersInYear) * 100}%"
          title="{year}: {yearPapers.length} paper(s)"
        ></div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .density-band {
    position: relative;
    height: 30px;
    margin-left: var(--gutter);
    border-bottom: 1px solid var(--border);
    overflow: hidden;
  }
  .band-label {
    position: absolute;
    left: calc(-1 * var(--gutter));
    top: 4px;
    font-size: 10px;
    color: var(--text-dim);
    white-space: nowrap;
    width: 110px;
    text-align: right;
  }
  .density-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  .density-bar {
    position: absolute;
    bottom: 0;
    width: 3px;
    background: var(--accent);
    opacity: 0.5;
    min-height: 2px;
    transform: translateX(-50%);
  }
</style>
