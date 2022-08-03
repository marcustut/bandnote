<script lang="ts">
  import { onMount } from 'svelte'

  let count = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => clearInterval(interval)
  })
</script>

<p>Counter: <code>{count}</code></p>
