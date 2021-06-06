<script>
  import { fade, fly } from "svelte/transition";
  import Modal from "./Modal.svelte";

  let showModal = false;
  export let name;
  export let weight;
  export let cal;
  export let amount;
  export let currentWeight;
  export let currentCal;
  $: currentWeight = amount ? weight * amount : weight;
  $: currentCal = amount ? cal * amount : cal;

  const plus = () => {
    amount += 1;
    amount = amount;
  };
  //  const minus = () => {
  //    amount -= 1;
  //  };
</script>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">
      {amount} modal
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

<div class={amount ? "bb card" : "card"}>
  <div
    class="info"
    on:click={() => (amount ? (amount = amount) : (amount = 1))}
  >
    <h2>{name}</h2>
    <span>{currentWeight} г • {currentCal} Ккал</span>
  </div>
  <div class="act">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={() => (showModal = true)}>Подробнее</a>
    <div class="counter">
      {#if amount}
        <button
          in:fly={{ delay: 100, x: 5 }}
          out:fade
          class="decr"
          on:click={() => (amount ? (amount -= 1) : (amount = 0))}
        />
        <h2 in:fly={{ delay: 50, y: 10 }} out:fly={{ delay: 50, y: 10 }}>
          {amount}
        </h2>
      {/if}
      <button class="incr" on:click={plus} />
    </div>
  </div>
</div>

<style>
  .incr {
    border: none;
    background-color: #58be34;
    font-size: 20px;
    height: 1.05em;
    width: 1.05em;
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
    height: 1.05em;
    width: 1.05em;
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
</style>
