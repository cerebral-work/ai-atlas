<script lang="ts">
  let { children } = $props();

  // Register service worker
  $effect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  });
</script>

<svelte:head>
  <title>AI/ML History — Interactive Timeline</title>
  <meta name="description" content="Interactive timeline of AI/ML research, hardware evolution, and neuroinformatics" />
</svelte:head>

{@render children()}

<style>
  :root {
    --bg: #0a0a0a;
    --surface: #141414;
    --surface2: #1a1a1a;
    --border: #2a2a2a;
    --text: #e0e0e0;
    --text-dim: #888;
    --accent: #5e72e4;
    --accent-dim: #2a3580;
    --red: #e74c3c;
    --yellow: #f1c40f;
    --blue: #3498db;
    --purple: #a29bfe;
    --font-mono: "SF Mono", "JetBrains Mono", "Fira Code", monospace;
    --font-ui: system-ui, -apple-system, "Segoe UI", sans-serif;
    --gutter: 120px;
    --band-height: 60px;
    --radius-sm: 3px;
    --radius-md: 4px;
    --radius-lg: 8px;
  }
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(html, body) {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 14px;
    line-height: 1.5;
  }
</style>
