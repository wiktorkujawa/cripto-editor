<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 h-16">
    <nav
      class="text-h2 md:flex hidden gap-x-5 px-5 h-full items-center bg-red-500"
    >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>
