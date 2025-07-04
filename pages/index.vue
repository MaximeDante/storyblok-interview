<script setup>
const story = await useAsyncStoryblok('maxime', { // maxime is my own story that I created with simple text
version: 'draft', // or 'published'
});

console.log('STORY', JSON.parse(JSON.stringify(story.value)))
</script>

<template>
<StoryblokComponent v-if="story" :blok="story.content" />
</template>