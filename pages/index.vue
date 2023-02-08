<template>
  <div class="flex flex-col">
    <Hero :videoBG="true" class="" />
    <TripleCard />
    <div class="max-h-72 bg-transparent"></div>
    <CallToAction
      class="hover:animate__bounceInDown animate__bounceInDown"
      appear
    />

    <CallToActionV2 />
  </div>
</template>
