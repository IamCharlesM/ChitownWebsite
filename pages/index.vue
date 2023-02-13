<template>
  <div class="flex flex-col">
    <Hero :videoBG="true" class="" />
    <div
      class="flex flex-col space-y-8 lg:flex-row max-w-screen justify-around lg:space-y-0 my-8"
    >
      <TripleCard />
      <TripleCard />
      <TripleCard />
      <TripleCard />
    </div>
    <div class="w-full max-h-screen py-8 bg-white overflow-y-scroll">
      <CallToAction />
    </div>
  </div>
</template>
