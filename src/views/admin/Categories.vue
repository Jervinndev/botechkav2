<script setup>
import { ref, onMounted } from 'vue';
import { ShieldCheck, ChevronsRight, AlignVerticalSpaceAround, Bell, TriangleAlert, BookPlus, Pill, List, LayoutDashboard } from '@lucide/vue'
import Categorymodal from '../../components/modals/Categorymodal.vue'
import CategorySkeliton from '../../Skelitonloader/CategorySkeliton.vue'
import { getCategories } from '../../services/Fetches'

const categories = ref([]);
const Isflex = ref(true)
const isCategoryModalOpen = ref(false);
const isLoading = ref(true);

async function fetchCategories() {
    isLoading.value = true;
    categories.value = await getCategories();
    isLoading.value = false;
    if (error) {
        console.error('Failed to fetch categories:', error);
    } else {
        categories.value = data;
    }
}

onMounted(() => {
    fetchCategories();
});

</script>

<template>
    <section>
        <div class="flex justify-between items-center ">
            <div>
                <h1 class="font-inter font-bold text-gray-800 text-md">Category</h1>
                <p class="text-sm text-gray-500">Manage your medicine resources</p>
            </div>
            <div class="flex items-center gap-4">
                <Bell class="text-blue-700" />
                <div class="flex items-center justify-center gap-1 border border-gray-500/40 rounded-full p-1">
                    <img src="/src/assets/download (12).jpg" alt="" class="w-10 rounded-full">
                    <!-- <p class="text-sm">Mark Hello po</p> -->
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div class="bg-white p-4 text-black rounded-xl">
                <div class="flex items-center gap-2">
                    <div class="p-2 bg-blue-100/70 rounded-lg">
                        <Pill size="22" class="text-blue-700" />
                    </div>
                    <p class="text-sm font-medium">Total medicines</p>
                </div>
                <h1 class="text-2xl font-black text-gray-700 mt-2">400</h1>

            </div>
            <div class="bg-white p-4 text-black rounded-xl">
                <div class="flex items-center gap-2">
                    <div class="p-2 bg-blue-100/70 rounded-lg">
                        <AlignVerticalSpaceAround size="22" class="text-blue-700" />
                    </div>
                    <p class="text-sm font-medium">Most Stocked Category</p>
                </div>
                <h1 class="text-2xl font-black text-gray-700 mt-2">340</h1>

            </div>
            <div class="bg-white p-4 text-black rounded-xl">
                <div class="flex items-center gap-2">
                    <div class="p-2 bg-blue-100/70 rounded-lg">
                        <TriangleAlert size="22" class="text-blue-700" />
                    </div>
                    <p class="text-sm font-medium">Out of Stock Items</p>
                </div>
                <h1 class="text-2xl font-black text-gray-700 mt-2">200</h1>

            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
            <div class="flex gap-2">
                <input type="text" placeholder="Seach categories...." class="bg-white p-2 px-3 w-2xl rounded-xl">

            </div>
            <div class="flex justify-between items-center gap-3">
                <div>
                    <button @click="isCategoryModalOpen = true"
                        class="p-2 bg-blue-700 text-white rounded-xl px-4 font-inter">Add
                        category</button>
                </div>
                <div p-2>
                    <List @click="Isflex = false" />
                </div>
                <div p-2>
                    <LayoutDashboard @click="Isflex = true" />
                </div>
            </div>
        </div>
        <CategorySkeliton v-if="isLoading" />
        <div v-else class="grid gap-4 mt-4 rounded-xl transition-all duration-100"
            :class="Isflex ? 'grid grid-cols-3' : 'flex'">
            <div v-for="cat in categories" :key="cat.id"
                class="flex flex-col justify-center gap-3 font-inter p-4 bg-white rounded-xl w-full">
                <div>
                    <h1 class="font-bold">{{ cat.category_name }}</h1>
                    <p class="text-sm text-gray-500">{{ cat.description }}
                    </p>
                </div>
                <div class="bg-gray-100 rounded-full">
                    <div class="bg-blue-700 w-0 p-1.5 rounded-full">

                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <h1>78 stocks</h1>
                    <div class="bg-green-100 p-1 px-3 rounded-full">
                        <h1 class="text-green-600">{{ cat.status }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Categorymodal :IsOpen="isCategoryModalOpen" @close="isCategoryModalOpen = false"
        @category-added="fetchCategories" />
</template>