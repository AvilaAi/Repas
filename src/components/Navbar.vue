<template>
  <header class="bg-white shadow h-16 flex items-cetner justify-between">
    <router-link :to="{ name: 'home' }" class="flex items-center px-5">
      Home
    </router-link>

    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full hover:bg-purple-100 transition-colors"
      >
        Search meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full hover:bg-purple-100 transition-colors"
      >
        Meals by letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full hover:bg-purple-100 transition-colors"
      >
        Meals by ingredients
      </router-link>
    </div>
  </header>
</template>
