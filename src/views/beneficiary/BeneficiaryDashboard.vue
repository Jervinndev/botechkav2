<script setup>
import { ChevronsRight, ShieldCheck, BookPlus, AlignVerticalSpaceAround, TriangleAlert } from '@lucide/vue'
</script>


<template>
    <div class="flex justify-between items-center ">
        <div>
            <h1 class="font-inter font-bold text-[#404040] text-md">Dashboard</h1>
            <p class="text-sm text-[#808080]">Manage your medicine resources</p>
        </div>
        <div>
            <Bell class="text-blue-700" />
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div class="bg-white p-4 text-black rounded-xl">
            <div class="flex items-center gap-2">
                <div class="p-2 bg-blue-100/70 rounded-lg">
                    <BookPlus size="22" class="text-blue-700" />
                </div>
                <p class="text-sm font-medium">Available Medicines</p>
            </div>
            <h1 class="text-2xl font-black text-gray-700 mt-2">2,000</h1>
        </div>
        <div class="bg-white p-4 text-black rounded-xl">
            <div class="flex items-center gap-2">
                <div class="p-2 bg-blue-100/70 rounded-lg">
                    <AlignVerticalSpaceAround size="22" class="text-blue-700" />
                </div>
                <p class="text-sm font-medium">Next Dispensing Date</p>
            </div>
            <h1 class="text-2xl font-black text-gray-700 mt-2">24 days left</h1>
        </div>
        <div class="bg-white p-4 text-black rounded-xl">
            <div class="flex items-center gap-2">
                <div class="p-2 bg-blue-100/70 rounded-lg">
                    <TriangleAlert size="22" class="text-blue-700" />
                </div>
                <p class="text-sm font-medium">Your Status</p>
            </div>
            <h1 class="text-2xl font-black text-gray-700 mt-2">Not Eligible</h1>
        </div>
    </div>
</template>