<script setup>
import { Bell } from '@lucide/vue'
</script>
<template>
    <section class="w-full">
        <div class="flex justify-between items-center ">
            <div>
                <h1 class="font-inter font-bold text-[#404040] text-md">Distribution</h1>
                <p class="text-sm text-[#808080]">Manage your distribution channels and logistics</p>
            </div>
            <div class="flex items-center gap-4">
                <Bell class="text-blue-700" />
                <div class="flex items-center justify-center gap-1 border border-gray-500/40 rounded-full p-1">
                    <img src="/src/assets/download (12).jpg" alt="" class="w-10 rounded-full">
                    <!-- <p class="text-sm">Mark Hello po</p> -->
                </div>
            </div>
        </div>
    </section>
</template>