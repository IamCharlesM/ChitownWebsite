<template>
  <div class="flex flex-col">
    <div class="lg:relative bg-white">
      <div class="mx-auto w-full max-w-7xl pt-16 text-center lg:text-left">
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
        class="mt-5 lg:mt-0 relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="../assets/20221214_182902.jpg"
          alt=""
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#dc2626"
          fill-opacity="1"
          d="M0,96L40,122.7C80,149,160,203,240,208C320,213,400,171,480,154.7C560,139,640,149,720,138.7C800,128,880,96,960,85.3C1040,75,1120,85,1200,80C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>

    <TripleCard />
    <CallToAction
      class="hover:animate__bounceInDown animate__bounceInDown"
      appear
    />
  </div>
</template>
