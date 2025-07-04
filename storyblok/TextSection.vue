<script setup>
defineProps({ blok: Object });
</script>
<template>
  <section v-editable="blok" :style="{ textAlign: blok.text_alignment, backgroundColor: blok.background_color }">
    <p class="font-bold">{{ blok.eyebrow }}</p>

    <!-- Render rich text from blok.text -->
    <div v-html="renderRichText(blok.text)"></div>
  </section>
</template>