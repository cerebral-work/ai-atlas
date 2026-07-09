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
  <div class="about-overlay" role="dialog" aria-label="About" onclick={onClose}>
    <div class="about-panel" onclick={(e) => e.stopPropagation()}>
      <button class="close-btn" onclick={onClose}>✕</button>
      <h2>AI/ML History</h2>
      <p class="about-intro">
        An interactive timeline of AI/ML research, hardware, and neuroscience —
        140 papers, 56 devices, 88 milestones, 10 eras. All data is client-side,
        offline, hand-curated.
      </p>
      <h3>How to Read It</h3>
      <ul class="about-howto">
        <li>Toggle overlay bands (Moore's Law, Global Compute, Hardware, Neuroscience)</li>
        <li>Filter categories with the chips below the header</li>
        <li>Click papers for detail, lineage, and cross-references</li>
        <li>Use keyboard: arrows to navigate, / to search, 1-9 for categories</li>
      </ul>
      <h3>Insights</h3>
      <ol class="about-insights">
        <li><strong>The 23× acceleration</strong> — 33 papers span 1936-2009 (74 years). 107 papers span 2010-2026 (16 years). The field publishes 23× more papers per year in the modern era.</li>
        <li><strong>Transformer is the most connected paper</strong> — "Attention Is All You Need" (2017) has 4 outgoing references and is referenced by BERT, GPT-2, ViT, and dozens more. It is the single most influential architecture in the dataset.</li>
        <li><strong>Two AI winters are visible</strong> — 1969-1979 and 1987-1993 show near-zero paper density. The winters were caused by funding and infrastructure, not science — backpropagation was published in 1974 (Werbos) and 1986 (Rumelhart) during the winter.</li>
        <li><strong>Hardware enabled the revolution</strong> — AlexNet (2012) required NVIDIA Kepler GTX 680 GPUs. Without CUDA (2006) and GPU compute, deep learning might have stayed theoretical.</li>
        <li><strong>Neuroscience flows both ways</strong> — Early entries (1904-1958) flow neuroscience → AI. From 2014 onward, the flow reverses — AI models become tools for understanding the brain.</li>
      </ol>
      <h3>Data Methodology</h3>
      <p class="about-method">
        Papers are hand-curated landmarks, not exhaustive. Bibliographies for 5
        categories are in the papers/ directory. Hardware data from TOP500 and
        vendor specs. Neuro data from historical sources.
      </p>
      <p class="about-credit">
        Built by <a href="https://cerebral.work" target="_blank" rel="noopener">cerebral.work</a> — an embedded operating partner for solo technical founders.
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
  .about-howto, .about-insights {
    font-size: 11px;
    line-height: 1.6;
    color: var(--text);
    padding-left: 20px;
  }
  .about-howto li, .about-insights li {
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
