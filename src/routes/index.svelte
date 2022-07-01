<script context="module">
  export const load = ({ session }) => {
    return {
      props: {
        endpointSession: session,
        // this has cookies we set in getSession(hooks.js)
      },
    };
  };
</script>

<script>
  import { session } from "$app/stores";
  console.log($session);
  // this has cookies we set in getSession(hooks.js)

  export let endpointSession;

  const doSomething = async () => {
    const res = await fetch("/api/get-cookies");
    const data = await res.json();
    console.log(data);
    // this should have cookies returned from endpoint
  };
  const setCookie = () => {
    let name = "webjeda";
    let value = new Date().toDateString();
    let expires = 500000;
    let path = "/";
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; expires=" +
      expires +
      "; path=" +
      path;
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

First set some cookie by clicking this button
<div>
  <button on:click={setCookie}>set some cookie</button>
</div>

On refresh you should see this in cookies

<pre>
  <code>
    {JSON.stringify($session, null, 2)}
  </code>
</pre>

<div>
  <button on:click={doSomething}>Do something</button>
</div>

<pre>
  <code>
    {JSON.stringify(endpointSession, null, 2)}
  </code>
</pre>
