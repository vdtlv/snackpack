<script>
  import { debug, each } from "svelte/internal";
  import Header from "./header.svelte";
  import { fade, fly } from "svelte/transition";
  import Modal from "./modal.svelte";
  import Test from "./test.svelte";

  // todo: json
  let showModal = false;
  let snacks = [
    {
      name: "Яблоко Гренни Смит",
      amount: 0,
      weight: 200,
      cal: 96,
      currentWeight: 0,
      currentCal: 0,
    },
    {
      name: "Кедровые орехи",
      amount: 0,
      weight: 25,
      cal: 170,
      currentWeight: 0,
      currentCal: 0,
    },
    {
      name: "Банан",
      amount: 0,
      weight: 110,
      cal: 105,
      currentWeight: 0,
      currentCal: 4,
    },
    {
      name: "Миндальные орехи",
      amount: 0,
      weight: 42,
      cal: 90,
      currentWeight: 0,
      currentCal: 3,
    },
  ];

  $: sum = snacks.reduce((t, n) => t + n.currentCal, 0);

  $: console.log(snacks[1].currentWeight);

  let v1 = [
    { a: 100, b: 2 },
    { a: 20, b: 5 },
  ];

  /*function plus() {
    v1[0].b += 1;
  }
  function minus(i) {
    if (v1[0].b) v1[0].b -= 1;
  }*/
  export let local_sum;
  $: local_sum = snacks.reduce((t, n) => t + n.amount * n.cal, 0);
</script>

<main>
  {@debug snacks}

  <Header total_calories={local_sum} />
  <!--  {#each v1 as { b }, i}
    {i + 1}: {b} .

    <button
      on:click={() => {
        if (v1[i].b) v1[i].b -= 1;
      }}>-1</button
    >
    <button
      on:click={() => {
        v1[i].b += 1;
      }}>+1</button
    >
    <hr />
  {/each}
  ok
  {local_sum}
-->
  {#if showModal}
    <Modal on:close={() => (showModal = false)}>
      <h2 slot="header">
        {snacks.amount} modal
        <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
      </h2>

      <ol class="definition-list">
        <li>of or relating to modality in logic</li>
        <li>
          containing provisions as to the mode of procedure or the manner of
          taking effect —used of a contract or legacy
        </li>
        <li>of or relating to a musical mode</li>
        <li>of or relating to structure as opposed to substance</li>
        <li>
          of, relating to, or constituting a grammatical form or category
          characteristically indicating predication
        </li>
        <li>of or relating to a statistical mode</li>
      </ol>

      <a href="https://www.merriam-webster.com/dictionary/modal"
        >merriam-webster.com</a
      >
    </Modal>
  {/if}

  <section class="snack-list">
    {#if snacks.length === 0}
      <p>No snacks today, I'm sorry</p>
    {:else}
      {#each snacks as snack, i}
        <div class={snack.amount ? "bb card" : "card"}>
          <div
            class="info"
            on:click={() =>
              snack.amount ? (snack.amount = snack.amount) : (snack.amount = 1)}
          >
            <h2>{snack.name}</h2>
            <span
              >{snack.amount ? snack.weight * snack.amount : snack.weight} г • {snack.amount
                ? snack.cal * snack.amount
                : snack.cal}
              Ккал</span
            >
          </div>
          <div class="act">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={() => (showModal = true)}>Подробнее</a>
            <div class="counter">
              {#if snack.amount}
                <button
                  in:fly={{ delay: 100, x: 5 }}
                  out:fade
                  class="decr"
                  on:click={() =>
                    snack.amount ? (snack.amount -= 1) : (snack.amount = 0)}
                />
                <h2
                  in:fly={{ delay: 50, y: 10 }}
                  out:fly={{ delay: 50, y: 10 }}
                >
                  {snack.amount}
                </h2>
              {/if}
              <button
                class="incr"
                on:click={() => {
                  snack.amount += 1;
                }}
              />
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </section>
</main>

<style>
  /*snack elem*/
  .incr {
    border: none;
    background-color: #58be34;
    font-size: 20px;
    height: 24px;
    width: 24px;
    border-radius: 100%;
    position: relative;
  }

  .incr:hover,
  .incr:focus {
    background-color: #52b32e;
  }

  .incr:after,
  .incr:before {
    content: "";
    display: block;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .incr:before {
    height: 0.7em;
    width: 0.1em;
  }

  .incr:after {
    height: 0.1em;
    width: 0.7em;
  }

  .decr {
    border: none;
    background-color: #c4c4c4;
    font-size: 20px;
    height: 24px;
    width: 24px;
    border-radius: 100%;
    position: relative;
  }

  .decr:hover,
  .decr:focus {
    background-color: #bdbdbd;
  }

  .decr:after {
    content: "";
    display: block;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .decr:after {
    height: 0.1em;
    width: 0.7em;
  }

  .act {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .counter {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 80px;
    height: 24px;
  }

  .counter > h2 {
    margin-left: 8px;
    margin-right: 8px;
  }

  h2 {
    font-weight: 500;
    font-style: normal;
    margin: 0 0 4px 0;
    font-size: 20px;
    line-height: 24px;
  }

  a {
    font-size: 16px;
    display: flex;
  }

  .card {
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 8px;
    min-width: 240px;
    max-width: 360px;
    padding: 8px 16px;
    flex: 1;
    margin: 0 8px 8px 0;
  }

  .info > span {
    font-weight: 500;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.5);
  }

  .info {
    height: 80px;
  }

  .bb {
    border-color: #222;
  }

  /*page*/
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
