<template>
  <div class="hero max-h-screen bg-black overflow-y-clip">
    <div v-if="videoBG === true">
      <video
        autoplay
        loop
        muted
        class="hidden lg:block min-w-[100vw] min-h-screen opacity-40"
      >
        <source src="@/assets/vid.webm" type="video/webm" />
      </video>

      <video
        autoplay
        loop
        muted
        class="lg:hidden min-w-full min-h-screen object-cover opacity-40"
      >
        <source src="@/assets/boysflip.webm" type="video/webm" />
      </video>
    </div>
    <div
      class="hero-content text-center text-neutral-content lg:-translate-y-12"
    >
      <div class="max-w-3xl">
        <H1TitleBodyButton
          class=""
          :titleText="'Chitown Champions'"
          :bodyText="'Affectionately known as a Leadership Program disguised as a Tumbling Team, our mission is to use the fun of tumbling &amp; the focus of competition as catalysts to empower and develop tomorrow\'s leaders.  Positive Coaching & Mentoring are our foundation.'"
          :buttonText="'Register'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoBG: {
    type: Boolean,
    required: true,
  },
});
</script>
