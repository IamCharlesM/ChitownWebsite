<template>
  <h1 class="mb-5 text-4xl lg:text-7xl font-bold text-center">
    {{ titleText }}
  </h1>
  <p class="mb-5 lg:text-xl">
    {{ bodyText }}
  </p>
  <button class="btn btn-primary btn-wide">{{ buttonText }}</button>
</template>

<script setup>
const props = defineProps({
  titleText: {
    type: String,
    required: true,
  },
  bodyText: {
    type: String,
    required: false,
  },
  buttonText: {
    type: String,
    required: false,
  },
});
</script>
