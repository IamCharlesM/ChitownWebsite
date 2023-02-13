<template>
  <div
    class="hero h-96 lg:w-96 lg:rounded-xl"
    style="background-image: url(../assets/roger-back.jpg)"
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
