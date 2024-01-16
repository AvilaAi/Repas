<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-grey-200 w-full p-2"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const keyword = ref('');
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
const searchMeals = () => {
  store.dispatch('searchMeals', keyword.value);
};
onMounted(() => {
  keyword.value = route.params.name || '';
  if (keyword.value) searchMeals();
});
</script>
