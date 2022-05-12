<template>
  <c-header />
  <c-nav-menu :isOpened="isOpened" />

  <button
    @click="handleNav()"
    class="md:hidden fixed cursor-pointer top-4 right-4 w-8 z-10"
  >
    <div v-if="isOpened" class="text-h1 -translate-y-4">&times;</div>
    <a-svg class="cursor-pointer" src="menu" v-else />
  </button>

  <main class="min-h-screen my-16">
    <RouterView />
  </main>

  <c-footer />
</template>

<style>
@import "@/assets/css/base.css";
</style>

<script>
import { RouterView } from "vue-router";
export default {
  components: { RouterView },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    handleNav() {
      console.log("handle");
      this.isOpened = !this.isOpened;
    },
  },
};
</script>
