<template>
  <div class="w-full px-[60px] py-8">
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
    <div
      class="flex items-center gap-[80px] bg-[#e9f5f3] w-[900px] h-[200px] p-10 rounded-2xl mt-5"
    >
      <div>
        <h2 class="text-2xl font-medium mb-4">Channels</h2>
        <p class="text-[12px]">
          Your Channels <br />
          statistics for <strong>1 weeks</strong> <br />
          periord.
        </p>
      </div>
      <div class="flex gap-5">
        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div class="bg-pink-500 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]">
            <i class="pi pi-globe text-sm rounded-lg text-white"></i>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Dribble</p>
          <p class="text-[12px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            +2 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>
        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div class="bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]">
            <!-- <i class="pi pi-circle text-sm rounded-lg text-white">Be</i> -->
            <p class="text-white text-[11px]">Be</p>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Biance</p>
          <p class="text-[12px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            -7 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>
        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div
            class="bg-yellow-500 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]"
          >
            <i class="pi pi-instagram text-sm rounded-lg text-white"></i>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Instagram</p>
          <p class="text-[12px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            +4 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>
        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div
            class="bg-orange-500 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]"
          >
            <i class="pi pi-pinterest text-sm rounded-lg text-white"></i>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Pintrest</p>
          <p class="text-[12px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            +2 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>
      </div>
      <div
        class="bg-sky-500 border rounded-xl w-[110px] h-[130px] flex flex-col p-3 shadow-2xl cursor-pointer hover:shadow-lg mr-[-300px]"
      >
        <p class="text-[12px] mt-2 font-semibold text-white">
          Full <br />
          Stats
        </p>
        <p class="text-xl font-medium mt-[20px]">
          <i class="pi pi-chevron-circle-right rounded-lg bg-white"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import upgradeImg from '@/assets/upgradeImg.png'
</script>

<style scoped></style>
