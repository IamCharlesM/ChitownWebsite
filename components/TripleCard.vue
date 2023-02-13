<template>
  <div
    class="hero h-96 lg:w-96 lg:rounded-xl"
    style="background-image: url(_nuxt/assets/roger-back.jpg)"
  >
    <div class="hero-overlay bg-opacity-60 hover:bg-opacity-20"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <H1TitleBodyButton
          :button-text="'test'"
          :buttonClass="'disabled text-6xl cursor-default font-bold font-upper-case drop-shadow-2xl'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  border-radius: 0.75rem !important;
}
.hero-overlay {
  border-radius: 0.75rem !important;
}
</style>
