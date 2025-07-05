<template>
  <section :class="sectionClasses" v-editable="blok">
    <div class="container mx-auto px-4 py-12">
      <div v-if="blok.headline?.length" class="text-center mb-10">
        <h2 class="text-3xl font-bold">
          <span v-for="segment in blok.headline" :key="segment._uid">
            <span :class="{ 'text-primary': segment.highlight }">
              {{ segment.text }}
            </span>
          </span>
        </h2>
        <p v-if="blok.lead" class="mt-2 text-gray-600">
          {{ blok.lead }}
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="card in blok.cards"
          :key="card._uid"
          class="p-6 rounded-xl text-center bg-white shadow-sm"
          :class="{ 'border border-gray-200': card.border }"
        >
          <div class="text-4xl font-bold text-primary mb-2">
            {{ card.bold_text }}
          </div>
          <div class="text-sm text-gray-500 mb-1 font-semibold">
            {{ card.label }}
          </div>
          <p class="text-gray-600 text-sm">
            {{ card.text }}
          </p>
        </div>
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

const sectionClasses = computed(() => {
  const bg = blok.background_color === 'white' ? 'bg-white' : blok.background_color
  return `w-full ${bg}`
})
</script>

<style scoped>
.text-primary {
  color: #0070f3; 
}
</style>
