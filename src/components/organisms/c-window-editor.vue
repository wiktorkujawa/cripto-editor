<template>
  <div class="md:flex w-full gap-x-4">
    <div class="w-full">
      <h2 class="text-h5 text-center">Editor</h2>
      <textarea
        id="editor"
        :class="{
          'c-window-editor-block__borders': borders,
          'c-window-editor-textarea__dirty': dirty,
        }"
        rows="10"
        class="c-window-editor-textarea"
        v-model="editorContent"
        @blur="onBlur"
        @change="onChange"
      />
    </div>

    <div class="w-full">
      <h2 class="text-h5 text-center">Translation</h2>
      <div
        id="translation"
        class="c-window-editor-block__borders"
        v-html="content.translation"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apiData: { type: Array, default: () => [] },
    value: { type: String, default: "" },
    borders: { type: Boolean, default: true },
  },
  data() {
    return {
      dirty: false,
      editorContent:
        '<h2>In 1998, Wei Dai published a description of "b-money", characterized as an anonymous, distributed electronic cash system.</h2><p>Shortly thereafter, Nick Szabo described bit gold. Like {{ Name/BTC }} and other cryptocurrencies that would follow it, bit gold (not to be confused with the later gold-based exchange, {{ Name/BITGOLD }}) was described as an electronic currency system which required users to complete a proof of work function with solutions being cryptographically put together and published.</p>',
    };
  },
  computed: {
    content() {
      return {
        apiData: this.apiData || "",
        translation: this.editorContent.replace(/\{{([^}]+)\}}/gi, (_, n) =>
          this.replaceTag(n)
        ),
      };
    },
  },
  methods: {
    replaceTag(tag) {
      const tagParams = tag.split("/").map((item) => item.replaceAll(" ", ""));
      let tagReplacement;
      if (tagParams.length == 2) {
        let method = tagParams[0].toLowerCase();
        let symbol = tagParams[1].toUpperCase();
        tagReplacement = this.apiData.find((item) => item.symbol === symbol);
        if (tagReplacement) {
          tagReplacement = tagReplacement[method];
        }
      }
      if (tagReplacement) {
        return tagReplacement;
      }
      return tag;
    },
    onBlur() {
      this.dirty = true;
    },
    onChange() {
      this.dirty = true;
    },
  },
};
</script>

<style>
.c-window-editor-textarea {
  @apply bg-transparent block border-b border-slate-900 outline-none resize-y text-h10 transition-colors w-full;
}

.c-window-editor-textarea:disabled {
  @apply opacity-50;
}

.c-window-editor-block__borders {
  @apply border rounded-md text-p2;

  border-color: #d5d5d5;
  padding: 3px 10px;
}

.c-window-editor-textarea__dirty:invalid {
  @apply border-red-500 text-red-500;
}
</style>
