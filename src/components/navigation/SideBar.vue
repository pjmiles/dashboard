<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// })
import { ref } from 'vue'
import avatar from '@/assets/avatar.jpg'
import navigationItems from './navigationItems'
import logo from '@/assets/logo.jpg'

const isHovered = ref(null)
const activeNav = ref(null)

const setActiveNav = (index) => {
  activeNav.value = index
}
</script>

<template>
  <div class="bg-[#f2e9e0] w-[250px] sticky top-0 h-screen rounded-l-lg lg:flex flex-col">
    <!-- logo -->
    <div class="flex space-x-1 justify-center p-8">
      <img alt="logo" :src="logo" class="w-8 h-8" />
      <h1 class="font-medium text-lg">Crowz</h1>
    </div>
    <!-- user profile -->
    <div class="flex flex-col justify-center items-center">
      <div class="bg-orange-200 rounded-full">
        <img alt="avatar" :src="avatar" class="rounded-full w-[50px] h-[50px]" />
      </div>
      <p class="mt-2 font-bold">Robert Grant</p>
      <p class="text-[10px] text-gray-500 font-sans">Marketing Director</p>
    </div>
    <!-- navigation -->
    <ul class="flex flex-col flex-grow justify-center items-center gap-[20px]">
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        @click="setActiveNav(index)"
        class="flex gap-2 items-center font-sans cursor-pointer"
      >
        <router-link
          v-if="item.path"
          :to="item.path"
          class="flex items-center gap-2 text-[12px]"
          :class="{ 'font-bold': activeNav === index, 'hover:font-bold': true }"
        >
          <p @mouseover="isHovered = index" @mouseleave="isHovered = null">{{ item.label }}</p>
          <span v-if="item.icon" v-show="isHovered === index">
            <p class="w-5 bg-red-400 text-white rounded-full text-center text-sm">
              {{ item.icon }}
            </p>
          </span>
        </router-link>
      </li>
    </ul>
    <!-- log out -->
    <div class="flex justify-center space-x-1 mb-2">
      <p class="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center text-center cursor-pointer">
        <i class="pi pi-sign-in text-[11px]"></i>
      </p>
      <p class="text-[12px] font-sans">Log out</p>
    </div>
  </div>
</template>

<style scoped></style>
