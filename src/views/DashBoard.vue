<template>
  <div class="w-full p-[60px]">
    <div class="flex gap-9">
      <div>
        <div class="w-full flex justify-between">
          <p class="text-3xl font-semibold">Dashboard</p>
          <span class="space-x-5 mt-1 mr-[112px]">
            <i
              class="pi pi-info-circle bg-red-400 text-white text-lg rounded-lg cursor-pointer"
            ></i>
            <i class="pi pi-cog text-lg cursor-pointer"></i>
          </span>
        </div>
        <div class="grid grid-cols-3 w-[600px] mt-[50px]">
          <div>
            <span class="flex items-center space-x-5">
              <div class="border-b border-gray-300 pb-1 flex items-center space-x-5">
                <p class="text-xs">Views</p>
                <i
                  class="pi pi-info-circle bg-green-400 text-white text-lg rounded-full cursor-pointer"
                ></i>
              </div>
            </span>
            <p class="text-2xl">27,6m</p>
          </div>
          <div>
            <span class="flex items-center space-x-5">
              <div class="border-b border-gray-300 pb-1 flex items-center space-x-5">
                <p class="text-xs">Followers</p>
                <i
                  class="pi pi-info-circle bg-red-400 text-white text-lg rounded-full cursor-pointer"
                ></i>
              </div>
            </span>
            <p class="text-2xl">219,3k</p>
          </div>
          <div>
            <span class="flex items-center space-x-5">
              <div class="border-b border-gray-300 pb-1 flex items-center space-x-5">
                <p class="text-xs">Reports</p>
                <i
                  class="pi pi-info-circle bg-green-400 text-white text-lg rounded-full cursor-pointer"
                ></i>
              </div>
            </span>
            <p class="text-2xl">1,5k</p>
          </div>
        </div>
      </div>
      <div class="mt-[-30px]">
        <img :src="upgradeImg" class="w-[400px]" />
      </div>
    </div>
    <div class="bg-[#e9f5f3] w-[1000px] h-[200px] rounded-lg mt-5">

    </div>
  </div>
</template>

<script setup>
import upgradeImg from '@/assets/upgradeImg.png'
</script>

<style scoped></style>
