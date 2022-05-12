<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <c-header />

  <main class="min-h-screen my-16">
    <RouterView />
  </main>

  <footer>Some footer</footer>
</template>

<style>
@import "@/assets/css/base.css";
</style>
