<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="trounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4" v-if="meal.strInstructions">
        {{ meal.strInstructions?.split(' ').slice(0, 20).join(' ') }}...
      </p>
    </div>
    <div class="p-3">
      <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';
const props = defineProps({
  meal: Object,
});
</script>
