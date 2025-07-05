<template>
  <section class="py-12 bg-white" v-editable="blok">
    <div class="container mx-auto px-4 text-center">
      <p v-if="blok.lead" class="text-xl font-semibold text-gray-700 mb-8">
        {{ blok.lead }}
      </p>

      <div class="flex flex-wrap justify-center items-center gap-6">
        <img
          v-for="(logo, index) in blok.logos"
          :key="index"
          :src="logo.filename"
          :alt="logo.alt || 'Client logo'"
          class="h-8 object-contain max-w-[160px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { blok } = defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
