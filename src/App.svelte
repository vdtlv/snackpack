<script>
  import Header from "./header.svelte";
  import Snack from "./snack.svelte";
  // import { count } from "./snack.svelte";
  // main variables
  let all_calories = 2;
  // todo: json
  let snacks = [
    {
      name: "Яблоко Гренни Смит",
      weight: 200,
      cal: 96,
    },
    {
      name: "Кедровые орехи",
      weight: 25,
      cal: 170,
    },
    {
      name: "Банан",
      weight: 110,
      cal: 105,
    },
    {
      name: "Миндальные орехи",
      weight: 42,
      cal: 90,
    },
  ];
</script>

<main>
  <Header total_calories={all_calories} />
  <section class="snack-list">
    {#if snacks.length === 0}
      <p>No snacks today, I'm sorry</p>
    {:else}
      {#each snacks as snack}
        <Snack name={snack.name} weight={snack.weight} cal={snack.cal} />
      {/each}
    {/if}
  </section>
</main>

<style>
  .snack-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    margin: 32px -8px -8px 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
