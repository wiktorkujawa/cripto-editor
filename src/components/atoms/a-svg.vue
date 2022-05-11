<template>
  <span class="a-svg">
    <component :is="dynamicComponent" :aria-label="ariaLabel" />
  </span>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    src: { type: String, required: true },
    ariaLabel: { type: String, default: "" },
  },
  computed: {
    dynamicComponent() {
      if (!this.src) {
        return null;
      }
      return defineAsyncComponent(() =>
        import(`../../assets/icons/i-${this.src}.vue`)
      );
    },
  },
};
</script>

<style lang="postcss">
.a-svg {
  display: block;
}

.a-svg svg {
  height: inherit;
  width: inherit;
}

.a-svg.fill-current [fill] {
  fill: currentColor;
}

.a-svg.stroke-current [stroke] {
  stroke: currentColor;
}
</style>
