<template>
  <div class="p-home" v-if="coinData">
    <div class="o-container o-container--lg pt-16 my-16">
      <c-window-editor :apiData="coinData" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      coinData: null,
      error: null,
    };
  },
  async created() {
    // GET request using fetch with async/await
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const data = await response.json();
    this.coinData = data;
  },
};
</script>

<style></style>
