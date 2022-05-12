<template>
  <nav
    class="text-h2 z-10 fixed left-0 mt-5 duration-300 ease-in top-0 p-10 bg-red-500 md:hidden max-w-max h-screen"
    :class="{
      '-translate-x-full': !isOpened,
    }"
  >
    <div class="mb-5 text-h5"><RouterLink to="/">Home</RouterLink></div>
    <div class="mb-5 text-h5"><RouterLink to="/about">About</RouterLink></div>
  </nav>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  props: {
    isOpened: { type: Boolean, default: false },
  },
};
</script>

<style></style>
