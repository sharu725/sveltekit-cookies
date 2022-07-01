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
  console.log($session);
  // this has cookies we set in getSession(hooks.js)

  let endpointSession = {};

  const doSomething = async () => {
    const res = await fetch("/api/get-cookies");
    const data = await res.json();
    console.log(data);
    endpointSession = data;
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
<p>First set some cookie by clicking this button</p>
<div>
  <button on:click={setCookie}>set some cookie</button>
</div>

<p>On refresh you should see this in cookies.</p>

<pre>
  <code>
    {JSON.stringify($session?.cookies, null, 2)}
  </code>
</pre>

<p>Click this button to see the cookies in console.</p>
<div>
  <button on:click={doSomething}>Do something</button>
</div>

<pre>
  <code>
    {JSON.stringify(endpointSession, null, 2)}
  </code>
</pre>

<p>
  These are your browser cookies. You can check them inspect open(Ctrl+Shift+i)
  in chrome >> navigate to Application tab to check cookies.
</p>

<button class="btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--mdi"
    width="1rem"
    height="1rem"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
    /></svg
  >
  <a href="https://github.com/ntkme/github-buttons"> Download</a>
</button>

<style>
  button {
    cursor: pointer;
  }
  .btn {
    display: flex;
    place-items: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
