<template>
  <div class="navbar bg-red-600 text-white">
    <div class="navbar-start">
      <!-- ANCHOR Dropdown -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <!-- ANCHOR Mobile Menu -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-600 rounded-box w-52"
        >
          <li v-for="item in navigation" :key="item.name">
            <NuxtLink :target="item.target" :to="item.href">{{
              item.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case"
        >Chitown Champions</NuxtLink
      >
    </div>
    <!-- ANCHOR Main links -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in navigation" :key="item.name">
          <NuxtLink :target="item.target" :to="item.href">{{
            item.name
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-ghost normal-case">Register</a>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "Mission", href: "/mission", target: "", current: false },
  { name: "Contact Us", href: "/contact", target: "", current: false },
  {
    name: "Schedule",
    href: "https://www.gomotionapp.com/team/ilcc/page/class-registration",
    current: false,
    target: "_blank",
  },
  {
    name: "Events",
    href: "https://www.gomotionapp.com/team/ilcc/page/calendar#/team-events/upcoming",
    current: false,
    target: "_blank",
  },
];
</script>
