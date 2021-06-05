<script>
  export let total_calories;
</script>

<header>
  <h1>snackpack</h1>
  <p>{total_calories} calories for today</p>
  <p style="width:150px; text-align: right;">Settings</p>
</header>

<style>
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    text-align: left;
    border-style: none none solid none;
    border-width: 2px;
  }
</style>
