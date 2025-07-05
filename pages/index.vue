<script setup>
const story = await useAsyncStoryblok('about', { // Fetching the about story
version: 'draft', // or 'published'
});

console.log('STORY', JSON.parse(JSON.stringify(story.value)))
</script>

<template>
<StoryblokComponent v-if="story" :blok="story.content" />
</template>