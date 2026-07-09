<script lang="ts">
  let {
    label,
    active = false,
    onclick,
  }: {
    label: string;
    active?: boolean;
    onclick: () => void;
  } = $props();
</script>

<button {onclick} class:active class="toggle-btn">
  {label}
</button>

<style>
  .toggle-btn {
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text-dim);
    padding: 4px 10px;
    border-radius: var(--radius-md);
    font-size: 11px;
    cursor: pointer;
    font-family: var(--font-ui);
    transition: all 0.15s;
  }
  .toggle-btn:hover {
    border-color: var(--accent-dim);
    color: var(--text);
  }
  .toggle-btn.active {
    background: var(--accent-dim);
    border-color: var(--accent);
    color: var(--accent);
  }
  .toggle-btn:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 1px;
  }
</style>
