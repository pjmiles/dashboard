<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// })
import { ref } from 'vue'
import avatar from '@/assets/avatarimg.jpg'
import navigationItems from './navigationItems'
import logo from '@/assets/logo.jpg'

const isHovered = ref(null)
const activeNav = ref(null)

const setActiveNav = (index) => {
  activeNav.value = index
}
</script>

<template>
  <div class="bg-purple-200 w-[250px] h-screen rounded-l-lg flex flex-col">
    <!-- logo -->
    <div class="flex space-x-1 justify-center p-8">
      <img alt="logo" :src="logo" class="w-8 h-8"/>
      <h1 class="font-medium text-lg">Crowz</h1>
    </div>
    <!-- user profile -->
    <div class="flex flex-col justify-center items-center p-4">
      <img alt="avatar" :src="avatar" class="rounded-full w-[80px] h-[80px]" />
      <p class="mt-2 text-2xl">Robert Grant</p>
      <p class="text-sm text-gray-500">Managing Director</p>
    </div>
    <!-- navigation -->
    <ul class="flex flex-col flex-grow justify-center items-center gap-6 mt-[-150px]">
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        @click="setActiveNav(index)"
        class="flex gap-2 items-center cursor-pointer"
      >
        <router-link
          v-if="item.path"
          :to="item.path"
          class="flex items-center gap-2"
          :class="{ 'font-medium': activeNav === index, 'hover:font-medium': true }"
        >
          <p @mouseover="isHovered = index" @mouseleave="isHovered = null">{{ item.label }}</p>
          <span v-if="item.icon" v-show="isHovered === index">
            <p class="w-6 bg-red-400 text-white rounded-full text-center">{{ item.icon }}</p>
          </span>
        </router-link>
      </li>
    </ul>
    <!-- log out -->
    <div class="flex justify-center space-x-1 mb-[50px]">
      <p class="bg-black text-white rounded-full w-6 text-center cursor-pointer">
        <i class="pi pi-arrow-circle-right"></i>
      </p>
      <p>Log out</p>
    </div>
  </div>
</template>

<style scoped></style>
