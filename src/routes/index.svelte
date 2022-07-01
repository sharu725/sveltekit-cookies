<script context="module">
  export const load = ({ session }) => {
    return {
      props: {
        session,
        // this has cookies we set in getSession(hooks.js)
      },
    };
  };
</script>

<script>
  import { session } from "$app/stores";
  console.log($session)
  // this has cookies we set in getSession(hooks.js)

  const doSomething = async () => {
    const res = await fetch("/api/get-cookies");
    const data = await res.json();
    console.log(data);
    // this should have cookies returned from endpoint
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button on:click={doSomething}>Do something</button>
