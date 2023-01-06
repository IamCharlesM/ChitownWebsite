<template>
  <div class="flex flex-col">
    <div class="lg:relative bg-white">
      <div
        class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1
            class="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline">Lorem ipsum dolor sit </span>
            {{ " " }}
            <span class="block text-primary xl:inline"
              >amet consectetur adipisicing elit</span
            >
          </h1>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div
            class="mt-10 sm:flex sm:justify-center lg:justify-start flex-col"
          >
            <div class="rounded-md shadow">
              <a
                href="#"
                class="btn btn-primary btn-block btn-lg normal-case text-white"
                >Lorem</a
              >
            </div>
            <div class="mt-3 rounded-md shadow">
              <a
                href="#"
                class="btn btn-secondary btn-block btn-lg normal-case text-red-600"
                >Lorem</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="../assets/20221214_182902.jpg"
          alt=""
        />
      </div>
    </div>

    <TripleCard />
    <CallToAction />
  </div>
</template>
