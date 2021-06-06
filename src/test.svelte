<script>
  let v1 = [
    { a: 1, b: 2 },
    { a: 1, b: 5 },
  ];

  function plus() {
    v1[0].b += 1;
  }
  function minus(i) {
    if (v1[0].b) v1[0].b -= 1;
  }
  export let local_sum;
  $: local_sum = v1.reduce((t, n) => t + n.b, 0); // {@debug v1}
</script>

{#each v1 as { b }, i}
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
