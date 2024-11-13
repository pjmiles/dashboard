<template>
  <div class="w-full px-[60px] py-8">
    <div class="w-full flex justify-between space-x-[80px]">
      <div class="w-1/2 mb-2">
        <div class="flex justify-between items-center">
          <p class="text-3xl font-semibold">Dashboard</p>
          <span class="space-x-5 mt-1 flex">
            <i class="pi pi-info-circle bg-red-400 text-white text-lg rounded-lg cursor-pointer"></i>
            <i class="pi pi-cog text-lg cursor-pointer"></i>
          </span>
        </div>
        <div class="grid grid-cols-3 gap-x-4 w-full justify-between mt-[50px]">
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
          <div class="ml-8">
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
          <div class="ml-14">
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

      <div class="border bg-[#f2e9e0] w-1/2 h-[140px] rounded-2xl">
        <div class="p-5">
          <div class="rounded-full w-[20px] h-[20px] bg-blue-300 ml-1 mb-3">
            <img :src="avatar" alt="avatar" class="w-[20px] h-[20px] rounded-full" />
          </div>
          <div class="flex justify-between">
            <div>
              <p class="font-semibold">
                <span class="text-red-400">Upgrade</span> Your <br />
                Crowd
              </p>
              <p class="text-gray-400 text-[9px]">Pro plan for better results</p>
            </div>
            <div>
              <div
                class="bg-red-400 text-white w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <p class="text-[12px]">Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between gap-5 mt-[50px]">
      <div class="w-1/2 h-[200px]">
        <div class="flex flex-wrap justify-between items-center mt-3">
          <p class="text-xl">Activity</p>
          <p class="text-gray-400 text-[12px] font-thin ml-[100px] mr-4 sm:mr-0">
            Data updates every 3 hours
          </p>
          <div>
            <button class="flex items-center space-x-2 py-2 px-3 text-[12px] border rounded-full">
              <span>01-07 May</span>
              <i class="pi pi-angle-down"></i>
            </button>
          </div>
        </div>
        <div class="max-w-[170p] h-[170px]">
          <img :src="chartType" alt="chart" class="w-full h-full object-fit" />
        </div>
      </div>
      <div class="w-1/2 h-[200px] p-2">
        <p class="ml-5 text-xl mb-2">Top Performers</p>
        <div>
          <ul class="space-y-1">
            <li class="px-6 py-2">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 w-1/3">
                  <div class="flex-shrink-0 rounded-full bg-slate-400 w-[25px] h-[25px]">
                    <img
                      :src="avatar"
                      alt="avatar"
                      class="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <p class="text-[12px] font-bold">Vovly Anionvoro</p>
                </div>
                <p class="text-gray-400 text-[10px] flex-grow text-left ml-10">
                  @satpartricswilldhjdhdj
                </p>
                <p class="text-[12px] font-bold">39%</p>
              </div>
            </li>
            <li class="px-6 py-2">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 w-1/3">
                  <div class="flex-shrink-0 rounded-full bg-yellow-400 w-[25px] h-[25px]">
                    <img
                      :src="avatar"
                      alt="avatar"
                      class="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <p class="text-[12px] font-bold">Mark Nolly</p>
                </div>
                <p class="text-gray-400 text-[10px] flex-grow text-left ml-10">@satpartricswill</p>
                <p class="text-[12px] font-bold">18%</p>
              </div>
            </li>
            <li class="px-6 py-2">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 w-1/3">
                  <div class="flex-shrink-0 rounded-full bg-blue-500 w-[25px] h-[25px]">
                    <img
                      :src="avatar"
                      alt="avatar"
                      class="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <p class="text-[12px] font-bold">Nenci Villy</p>
                </div>
                <p class="text-gray-400 text-[10px] flex-grow text-left ml-10">@satpartricswill</p>
                <p class="text-[12px] font-bold">25%</p>
              </div>
            </li>
          </ul>
          <div class="flex items-center cursor-pointer space-x-1 px-6 py-2">
            <p class="text-[12px] font-medium">View More</p>
            <i class="pi pi-angle-right text-sm"></i>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between gap-1 bg-[#e9f5f3] w-full h-[200px] p-10 rounded-2xl mt-[50px]"
    >
      <div>
        <h2 class="text-2xl font-medium mb-4">Channels</h2>
        <p class="text-[12px]">
          Your Channels <br />
          statistics for <strong>1 weeks</strong> <br />
          period.
        </p>
      </div>
      <div class="flex gap-5 justify-around">
        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div class="bg-pink-500 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]">
            <i class="pi pi-globe text-sm rounded-lg text-white"></i>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Dribble</p>
          <p class="text-[10px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            +2 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>

        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div class="bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]">
            <p class="text-white text-[11px]">Be</p>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Biance</p>
          <p class="text-[10px] text-gray-400">@grantart</p>
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
          <p class="text-[10px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            +4 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>

        <div
          class="bg-white border rounded-xl w-[110px] h-[130px] flex flex-col items-center text-center shadow-2xl cursor-pointer hover:shadow-lg"
        >
          <div
            class="bg-orange-600 rounded-full w-7 h-7 flex items-center justify-center mt-[-15px]"
          >
            <i class="pi pi-pinterest text-sm rounded-lg text-white"></i>
          </div>
          <p class="text-[12px] mt-2 font-semibold">Pinterest</p>
          <p class="text-[10px] text-gray-400">@grantart</p>
          <p class="text-xl font-medium mt-[20px]">
            +2 <span class="text-[10px] align-top ml-[1px]">%</span>
          </p>
        </div>
      </div>

      <!-- Last card with negative margin-right positioning -->
      <div
        class="bg-sky-500 border rounded-xl w-[110px] h-[130px] flex flex-col p-3 shadow-2xl cursor-pointer hover:shadow-lg mr-[-8%]"
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
import avatar from '@/assets/avatar.jpg'
import chartType from '@/assets/chart-2.png'
</script>

<style scoped></style>
