<template>
  <div class="w-full p-[60px]">
    <div class="flex gap-9">
      <div class="w-full flex justify-between">
        <p class="text-3xl">DASHBOARD</p>
        <span class="space-x-5 mt-1">
          <i class="pi pi-info-circle bg-red-400 text-white text-lg rounded-lg cursor-pointer"></i>
          <i class="pi pi-cog text-lg cursor-pointer"></i>
        </span>
      </div>
      <div class="rounded-lg border border-blue-600 w-3/5">
        <!-- <img :src="upgradeImg" class=""/> -->
      </div>
    </div>
    <div class="grid grid-cols-3 mt-8 w-[800px]">
      <div>
        <span class="flex space-x-5">
          <p>Views</p>
          <i
            class="pi pi-info-circle bg-green-400 text-white text-lg rounded-full mt-2 cursor-pointer"
          ></i>
        </span>
        <hr />
        <p>27,6m</p>
      </div>
      <div>
        <span class="flex space-x-5">
          <p>Followers</p>
          <i
            class="pi pi-info-circle bg-red-400 text-white text-lg rounded-full mt-2 cursor-pointer"
          ></i>
        </span>
        <hr />
        <p>219,3k</p>
      </div>
      <div>
        <span class="flex space-x-5">
          <p>Reports</p>
          <i
            class="pi pi-info-circle bg-green-400 text-white text-lg rounded-full mt-2 cursor-pointer"
          ></i>
        </span>
        <hr />
        <p>1,5k</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import upgradeImg from '@/assets/upgradeImg.png'
</script>

<style scoped>
/* img{
  width: 100%;
  height: 100%;
} */
</style>
