<script setup>
import { X, Check } from '@lucide/vue'

const props = defineProps({
    IsOpen: Boolean
})
const emit = defineEmits(['close'])
</script>

<template>
    <!-- Success Alert -->
    <!-- <div
        class="fixed top-4 right-4 z-50 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
        <Check size="20" />
        <span class="font-medium">Medicine saved successfully!</span>
    </div> -->

    <!-- <div class="fixed top-4 right-4 z-50 max-w-md rounded-lg bg-red-600 px-6 py-3 text-white shadow-lg">
        <span class="font-medium">{{ errorMessage }}</span>
    </div> -->

    <!-- Modal Background / Backdrop -->
    <section v-if="IsOpen"
        class="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm w-full h-full flex items-center justify-center p-4 overflow-y-auto">
        <div class="p-6 bg-white max-w-2xl w-full rounded-xl shadow-xl my-8 font-inter">
            <div>
                <div class="flex justify-between items-start">
                    <div>
                        <h1 class="font-black text-[#404040] font-inter text-lg">ADD NEW MEDICINE</h1>
                        <p class="text-sm text-[#808080] font-inter">insert ka muna pare</p>
                    </div>
                    <X class="cursor-pointer text-gray-500 hover:text-black" @click="emit('close')" />
                </div>

                <div class="grid grid-cols-1 gap-4 mt-6">
                    <div class="grid gap-2">
                        <div>
                            <h1 class="text-lg text-blue-700 font-bold">Identity</h1>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-1">
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Medicine name <span
                                        class="text-red-700">*</span></label>
                                <input type="text"
                                    class="p-2 w-full border border-gray-300 rounded-lg placeholder:opacity-50 focus:outline-blue-600"
                                    placeholder="e.g. Biogesic" required>
                            </div>
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Medicine ID (Auto) </label>
                                <input type="text"
                                    class="p-2 border w-full border-gray-300 rounded-lg bg-gray-100 text-slate-600 cursor-not-allowed"
                                    readonly>
                            </div>
                            <div class="grid gap-1 col-span-2">
                                <label class="font-medium text-sm text-slate-600">Category <span
                                        class="text-red-700">*</span></label>
                                <select
                                    class="p-2 border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-blue-600"
                                    required>

                                    <option value="">-- Select Category --</option>
                                    <option>hello</option>
                                    <option value="__other__">Other (specify)</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div class="grid gap-2">
                        <div>
                            <h1 class="text-lg text-blue-700 font-bold">Stock</h1>
                        </div>
                        <div class="grid grid-cols-3 gap-2 mt-1">
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Quantity <span
                                        class="text-red-700">*</span></label>
                                <input type="number"
                                    class="p-2 w-full border border-gray-300 rounded-lg placeholder:opacity-50 focus:outline-blue-600"
                                    placeholder="e.g. 100" min="0" required>
                            </div>
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Dosage <span
                                        class="text-red-700">*</span></label>
                                <select
                                    class="p-2 w-full border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-blue-600"
                                    required>
                                    <option value="">-- Select Dosage --</option>
                                    <option>
                                        hello po
                                    </option>
                                </select>
                            </div>
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Unit <span
                                        class="text-red-700">*</span></label>
                                <select
                                    class="p-2 w-full border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-blue-600"
                                    required>
                                    <option value="">-- Select Unit --</option>
                                    <option>
                                        hi
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-2">
                        <div>
                            <h1 class="text-lg text-blue-700 font-bold">Batch and Supplier</h1>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-1">
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Batch number <span
                                        class="text-red-700">*</span></label>
                                <input type="text"
                                    class="p-2 w-full uppercase border border-gray-300 rounded-lg placeholder:opacity-50 focus:outline-blue-600"
                                    placeholder="e.g. BATCH-A1" required>
                            </div>
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Supplier name <span
                                        class="text-red-700">*</span></label>
                                <input type="text"
                                    class="p-2 w-full border border-gray-300 rounded-lg placeholder:opacity-50 focus:outline-blue-600"
                                    placeholder="e.g. Metro Drug" required>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-2">
                        <div>
                            <h1 class="text-lg text-blue-700 font-bold">Batch and Supplier</h1>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-1">
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Manufacturing Date
                                    <span class="text-red-700">*</span></label>
                                <input type="date"
                                    class="p-2 w-full border border-gray-300 rounded-lg focus:outline-blue-600"
                                    required>
                            </div>
                            <div class="grid gap-1">
                                <label class="font-medium text-sm text-slate-600">Expiration date <span
                                        class="text-red-700">*</span></label>
                                <input type="date"
                                    class="p-2 w-full border border-gray-300 rounded-lg focus:outline-blue-600"
                                    required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex gap-2 items-center justify-end">
                    <button type="button" @click="emit('close')"
                        class="px-4 py-2.5 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
                    <button type="submit"
                        class="px-5 py-2.5  text-white rounded-lg border bg-blue-700 hover:bg-blue-800 transition"
                        :disabled="Isloading">
                        <span v-if="Isloading">Saving...</span>
                        <span v-else>Save Medicine</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>