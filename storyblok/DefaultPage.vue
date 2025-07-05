<template>
  <div>
    <StoryblokComponent
      v-for="nestedBlok in blok.body"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
