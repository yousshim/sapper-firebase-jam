<script context="module">
  export async function preload() {
    const res = await this.fetch("/index.json");
    const data = await res.json();
    if (res.status === 200) {
      return { categories: data.categories };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import successkid from "images/successkid.jpg";
  export let categories;
  console.log(categories);
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>
{#each categories as categorie}
  <div>{categorie.name}</div>
{/each}
<figure>
  <img alt="Success Kid" src={successkid} />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live
    reloading.</strong>
</p>
