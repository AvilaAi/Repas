<template>
  <a
    :href="href"
    target="_blank"
    class="p-2 border-2 border-red-200 hover:bg-red-500 hover:text-white transition-colors rounded"
  >
    <slot></slot
  ></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
