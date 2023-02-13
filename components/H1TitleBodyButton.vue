<template>
  <h1 v-if="titleText" class="mb-5 text-4xl lg:text-7xl font-bold text-center">
    {{ titleText }}
  </h1>
  <p v-if="bodyText" class="mb-5 lg:text-xl">
    {{ bodyText }}
  </p>

  <button v-if="buttonClass" :class="buttonClass">{{ buttonText }}</button>
  <button v-else class="btn btn-primary btn-wide normal-case">
    {{ buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  titleText: {
    type: String,
    required: false,
  },
  bodyText: {
    type: String,
    required: false,
  },
  buttonText: {
    type: String,
    required: false,
  },
  buttonClass: {
    type: String,
    required: false,
  },
});
</script>
