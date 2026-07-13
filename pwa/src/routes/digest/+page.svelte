<script lang="ts">
  import {
    DIGEST_BASE,
    fetchDigestIndex,
    fetchDigest,
    digestCategoryMeta,
    type Digest,
    type DigestIndex,
    type DigestCategory,
  } from "$lib/data/digests";

  let index = $state<DigestIndex | null>(null);
  let digest = $state<Digest | null>(null);
  let selectedDate = $state<string | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  const digestCache = new Map<string, Digest>();
  let reqSeq = 0; // guards against out-of-order date fetches clobbering the active one

  $effect(() => {
    fetchDigestIndex()
      .then((idx) => {
        index = idx;
        if (idx.dates.length > 0) selectDate(idx.dates[0]);
        else loading = false;
      })
      .catch(() => {
        error = navigator.onLine
          ? "Digest feed unreachable."
          : "Digest requires a connection — the feed is not cached offline.";
        loading = false;
      });
  });

  async function selectDate(date: string) {
    const seq = ++reqSeq;
    selectedDate = date;
    loading = true;
    error = null;
    try {
      let d = digestCache.get(date);
      if (!d) {
        d = await fetchDigest(date);
        if (seq !== reqSeq) return; // a newer selection superseded this fetch
        digestCache.set(date, d);
      }
      if (seq !== reqSeq) return;
      digest = d;
    } catch {
      if (seq !== reqSeq) return; // don't let a stale rejection wipe a newer render
      error = `No digest object for ${date}.`;
      digest = null;
    } finally {
      if (seq === reqSeq) loading = false;
    }
  }

  const categoryOrder: DigestCategory[] = ["models", "research", "hardware", "tools", "industry", "policy"];
  const otherMeta = { label: "Other", color: "#888" };

  let grouped = $derived.by(() => {
    if (!digest) return [];
    const known = categoryOrder
      .map((cat) => ({
        cat: cat as string,
        meta: digestCategoryMeta[cat],
        items: digest!.items.filter((i) => i.category === cat),
      }))
      .filter((g) => g.items.length > 0);
    // Any item whose category isn't one of the known buckets still shows, under "Other".
    const other = digest.items.filter((i) => !(i.category in digestCategoryMeta));
    return other.length > 0
      ? [...known, { cat: "other", meta: otherMeta, items: other }]
      : known;
  });

  function hostOf(url: string): string {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  }

  // Only http/https survive — blocks javascript:/data: URLs from LLM-generated JSON.
  function safeUrl(url: string): string {
    try {
      const u = new URL(url, DIGEST_BASE);
      return u.protocol === "http:" || u.protocol === "https:" ? url : "#";
    } catch {
      return "#";
    }
  }

  function updatedLabel(iso: string): string {
    const d = new Date(iso);
    return isNaN(d.getTime()) ? "—" : d.toISOString().slice(0, 16).replace("T", " ") + " UTC";
  }
</script>

<svelte:head>
  <title>Daily Digest — AI Atlas</title>
  <meta name="description" content="Daily digest of AI/ML model releases, research, and hardware news" />
</svelte:head>

<div class="digest-app">
  <header class="app-header">
    <h1><a href="/" class="home-link">AI Atlas</a> <span class="crumb">/ digest</span></h1>
    {#if index}
      <span class="updated">updated {updatedLabel(index.updated)}</span>
    {/if}
  </header>

  <div class="digest-body">
    {#if index && index.dates.length > 0}
      <nav class="date-rail" aria-label="Digest dates">
        {#each index.dates as date}
          <button class:active={date === selectedDate} onclick={() => selectDate(date)}>
            {date}
          </button>
        {/each}
      </nav>
    {/if}

    <main class="digest-main">
      {#if loading}
        <p class="state">loading…</p>
      {:else if error}
        <p class="state">{error}</p>
      {:else if digest}
        {#if digest.title}
          <h2 class="digest-title">{digest.title}</h2>
        {/if}
        {#each grouped as group}
          <section>
            <h3 style="--cat-color: {group.meta.color}">{group.meta.label}</h3>
            <ul>
              {#each group.items as item}
                <li style="--cat-color: {group.meta.color}">
                  <a href={safeUrl(item.url)} target="_blank" rel="noopener noreferrer" class="headline">
                    {item.headline}
                  </a>
                  <span class="source">{item.source || hostOf(item.url)}</span>
                  <p class="summary">{item.summary}</p>
                </li>
              {/each}
            </ul>
          </section>
        {/each}
      {:else}
        <p class="state">No digests yet.</p>
      {/if}
    </main>
  </div>
</div>

<style>
  .digest-app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .app-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
  }
  .app-header h1 {
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .home-link {
    color: var(--text);
    text-decoration: none;
  }
  .home-link:hover {
    color: var(--accent);
  }
  .crumb {
    color: var(--text-dim);
    font-weight: 400;
  }
  .updated {
    font-size: 11px;
    color: var(--text-dim);
  }
  .digest-body {
    display: flex;
    flex: 1;
    min-height: 0;
  }
  .date-rail {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 16px 12px;
    border-right: 1px solid var(--border);
    overflow-y: auto;
    flex-shrink: 0;
  }
  .date-rail button {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-dim);
    background: none;
    border: none;
    border-left: 2px solid transparent;
    padding: 4px 10px;
    text-align: left;
    cursor: pointer;
  }
  .date-rail button:hover {
    color: var(--text);
    background: var(--surface);
  }
  .date-rail button.active {
    color: var(--accent);
    border-left-color: var(--accent);
    background: var(--surface);
  }
  .digest-main {
    flex: 1;
    overflow-y: auto;
    padding: 24px 32px 64px;
    max-width: 880px;
  }
  .digest-title {
    font-family: var(--font-ui);
    font-size: 15px;
    font-weight: 500;
    color: var(--text-dim);
    margin-bottom: 20px;
  }
  section {
    margin-bottom: 28px;
  }
  section h3 {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--cat-color);
    margin-bottom: 10px;
  }
  section ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  section li {
    border-left: 2px solid var(--cat-color);
    padding-left: 14px;
  }
  .headline {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    text-decoration: none;
  }
  .headline:hover {
    color: var(--accent);
    text-decoration: underline;
  }
  .source {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-dim);
    margin-left: 8px;
  }
  .summary {
    font-family: var(--font-ui);
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.55;
    margin-top: 3px;
    max-width: 72ch;
  }
  .state {
    font-family: var(--font-mono);
    color: var(--text-dim);
    padding: 24px 0;
  }
  @media (max-width: 640px) {
    .digest-body {
      flex-direction: column;
    }
    .date-rail {
      flex-direction: row;
      overflow-x: auto;
      border-right: none;
      border-bottom: 1px solid var(--border);
      padding: 8px 12px;
    }
    .date-rail button.active {
      border-left: none;
      border-bottom: 2px solid var(--accent);
    }
    .digest-main {
      padding: 16px;
    }
  }
</style>
