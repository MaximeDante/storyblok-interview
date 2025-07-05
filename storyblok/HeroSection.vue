<template>
  <section :class="sectionClasses" v-editable="blok">
    <div class="container mx-auto px-4 py-12 text-center">
      <p v-if="blok.eyebrow" class="text-sm uppercase text-gray-500 mb-2">
        {{ blok.eyebrow }}
      </p>

      <h1 v-if="blok.headline?.length" class="text-4xl font-bold mb-4">
        <span v-for="segment in blok.headline" :key="segment._uid">
          <span :class="{ 'text-primary': segment.highlight }">
            {{ segment.text }}
          </span>
        </span>
      </h1>

      <p v-if="blok.text" class="text-lg text-gray-600 mb-6">
        {{ blok.text }}
      </p>

      <img
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="mx-auto max-w-full h-auto mt-6"
        :class="{ 'rounded-xl': blok.image_decoration }"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})

const sectionClasses = computed(() => {
  const bg = props.blok.background_color === 'white' ? 'bg-white' : props.blok.background_color
  return `w-full ${bg}`
})
</script>

<style scoped>
.text-primary {
  color: #0070f3;
}
</style>
