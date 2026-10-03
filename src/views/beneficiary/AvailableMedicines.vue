<script setup>
import { onMounted, ref } from 'vue'
import { ArrowLeft, Pill } from '@lucide/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const medicines = ref([])
const loading = ref(true)
const errorMessage = ref('')

async function loadMedicines() {
    try {
        medicines.value = await getAvailableMedicines()
    } catch (error) {
        errorMessage.value = error.message || 'Unable to load available medicines.'
    } finally {
        loading.value = false
    }
}

onMounted(loadMedicines)
</script>

<template>
    <section class="flex min-h-screen bg-gray-100">
        <main class="w-full">
            <div class="mx-auto w-full">
                <header class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
                    <div>
                        <h1 class="mt-1 text-2xl font-bold text-gray-900">Available medicines</h1>
                        <p class="mt-1 text-sm text-gray-500">Medicines currently available at the Botika ng Bayan.</p>
                    </div>
                    <button type="button" class="flex items-center gap-2 text-sm font-medium text-blue-700"
                        @click="router.push('/beneficiary-dashboard')">
                        <ArrowLeft :size="17" />
                        Dashboard
                    </button>
                </header>

                <p v-if="errorMessage" class="mt-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                    {{ errorMessage }}
                </p>

                <div v-if="loading" class="mt-8 rounded-xl bg-white p-6 text-sm text-gray-500">
                    Loading available medicines...
                </div>

                <div v-else-if="!medicines.length"
                    class="mt-8 rounded-xl bg-white p-8 text-center text-sm text-gray-500">
                    No medicines are currently available.
                </div>

                <section v-else class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <article v-for="medicine in medicines" :key="medicine.id" class="rounded-xl bg-white p-5">
                        <div class="flex items-center gap-3">
                            <div class="rounded-lg bg-blue-50 p-3 text-blue-700">
                                <Pill :size="22" />
                            </div>
                            <div>
                                <h2 class="font-semibold text-gray-900">{{ medicine.medicine_name }}</h2>
                                <p class="text-sm text-gray-500">{{ medicine.category || 'Medicine' }}</p>
                            </div>
                        </div>
                        <div class="mt-5 flex justify-between border-t border-gray-100 pt-4 text-sm">
                            <span class="text-gray-500">{{ medicine.dosage || 'Dosage on label' }}</span>
                            <span class="font-medium text-green-600">{{ medicine.quantity }} {{ medicine.unit || 'units'
                                }}</span>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    </section>


</template>
