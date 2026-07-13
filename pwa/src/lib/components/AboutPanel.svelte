<script lang="ts">
  let {
    show = false,
    onClose,
  }: {
    show?: boolean;
    onClose: () => void;
  } = $props();
</script>

{#if show}
  <div class="about-overlay" role="dialog" aria-modal="true" aria-label="About AI Atlas" tabindex="-1"
    onclick={onClose} onkeydown={(e) => e.key === "Escape" && onClose()}>
    <div class="about-panel">
      <button class="close-btn" onclick={onClose}>✕</button>
      <h2>AI Atlas</h2>
      <p class="about-intro">
        An interactive scrolling exhibit of AI/ML research — ~700 papers, 198 concept explainers,
        66 milestones, 23 categories, spanning 1901 to 2025. All data is client-side, offline,
        hand-curated.
      </p>
      <h3>How to Read It</h3>
      <ul class="about-howto">
        <li>Scroll the timeline — density accelerates from 1 paper/year (1900s) to 100+/year (2020s)</li>
        <li>Toggle overlay tracks: NEU (neuroscience), MIL (milestones), HW (hardware)</li>
        <li>Filter by category using the chips below the header (1-9 keyboard shortcuts)</li>
        <li>Click any paper for detail drawer — summary, concepts, lineage, related work</li>
        <li>Open the Glossary (G) for 198 concept explainers with full technical breakdowns</li>
        <li>Search (/) filters papers by title, author, venue, or concept</li>
      </ul>
      <h3>What's Here</h3>
      <dl class="about-stats">
        <dt>Papers</dt><dd>~700 landmark publications across 23 categories</dd>
        <dt>Explainers</dt><dd>198 deep concept breakdowns — what, how, why, history</dd>
        <dt>Milestones</dt><dd>66 non-paper breakthroughs — datasets, products, organizations, events</dd>
        <dt>Overlay tracks</dt><dd>Neuroscience events, hardware devices, compute milestones</dd>
      </dl>
      <h3>Design Note</h3>
      <p class="about-method">
        The exhibit uses variable row heights — early papers get more space (76px each),
        recent papers compress (28px each). This makes the field's acceleration visceral:
        you scroll slowly through foundations, then the modern era blurs past. Density is the content.
      </p>
      <p class="about-credit">
        Built by <a href="https://cerebral.work" target="_blank" rel="noopener">cerebral.work</a>.
        Bibliographies in the papers/ directory. Data hand-curated, no automated scraping.
      </p>
    </div>
  </div>
{/if}

<style>
  .about-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-panel {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    animation: about-fade 0.2s cubic-bezier(0.25, 1, 0.5, 1);
  }
  @keyframes about-fade {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    color: var(--text-dim);
    cursor: pointer;
    font-size: 16px;
    padding: 4px 8px;
    font-family: var(--font-ui);
  }
  .close-btn:hover {
    color: var(--text);
  }
  .about-panel h2 {
    font-size: 18px;
    margin-bottom: 12px;
    color: var(--accent);
    font-family: var(--font-ui);
  }
  .about-panel h3 {
    font-size: 13px;
    color: var(--text-dim);
    margin-top: 16px;
    margin-bottom: 8px;
    font-family: var(--font-ui);
  }
  .about-intro, .about-method {
    font-size: 12px;
    line-height: 1.6;
    color: var(--text);
  }
  .about-howto {
    font-size: 11px;
    line-height: 1.6;
    color: var(--text);
    padding-left: 20px;
  }
  .about-howto li {
    margin-bottom: 4px;
  }
  .about-credit {
    margin-top: 16px;
    font-size: 11px;
    color: var(--text-dim);
  }
  .about-credit a {
    color: var(--accent);
    text-decoration: none;
  }
  .about-credit a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .about-panel {
      max-width: 90vw;
      max-height: 90vh;
    }
  }
</style>
