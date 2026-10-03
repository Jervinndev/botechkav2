<template>
    <div class="space-y-6 max-w-4xl">
        <!-- Header Title -->
        <div>
            <h2 class="text-xl font-bold text-slate-900 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
                </svg>
                Backup & Recovery
            </h2>
            <p class="text-sm text-slate-500">Buong database ay awtomatikong naka-backup sa Supabase cloud at maaari
                ring i-export nang lokal.</p>
        </div>

        <!-- Status Card -->
        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
            <div class="flex items-center gap-3">
                <div
                    class="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                    ✓
                </div>
                <div>
                    <p class="text-sm font-semibold text-emerald-900">Huling backup: Aug 12, 2026, 6:00 AM</p>
                    <p class="text-xs text-emerald-700">Ligtas na na-sync ang mga talaan sa cloud database.</p>
                </div>
            </div>
            <span class="px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full shadow-sm">
                Successful[cite: 1]
            </span>
        </div>

        <!-- Manual Export & Restore Actions -->
        <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h3 class="text-md font-bold text-slate-800">Manual Data Operations</h3>
            <p class="text-sm text-slate-500">Mag-download ng kopya ng buong database o mag-restore gamit ang nakaraang
                backup file.</p>

            <div class="flex flex-wrap gap-4 pt-2">
                <button
                    class="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg text-sm transition shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export backup[cite: 1]
                </button>

                <label
                    class="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm cursor-pointer transition shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Restore now[cite: 1]
                    <input type="file" class="hidden" accept=".json" />
                </label>
            </div>
        </div>

        <!-- Automatic Backup Schedule Settings -->
        <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h3 class="text-md font-bold text-slate-800">Scheduled Automated Backup</h3>
            <p class="text-sm text-slate-500">Piliin kung gaano kadalas mag-aabiso ang sistema para sa awtomatikong
                pag-backup.</p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <label
                    class="border border-slate-200 rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:border-blue-500 transition">
                    <div class="flex items-center justify-between">
                        <span class="font-semibold text-sm text-slate-800">Daily Backup</span>
                        <input type="radio" name="backup_schedule" class="text-blue-600 focus:ring-blue-500" />
                    </div>
                    <span class="text-xs text-slate-500">Kada alas-dose ng gabi aalerto.</span>
                </label>

                <label
                    class="border border-blue-500 bg-blue-50/30 rounded-lg p-4 flex flex-col gap-2 cursor-pointer transition">
                    <div class="flex items-center justify-between">
                        <span class="font-semibold text-sm text-blue-900">Weekly Backup</span>
                        <input type="radio" name="backup_schedule" checked class="text-blue-600 focus:ring-blue-500" />
                    </div>
                    <span class="text-xs text-blue-600">Tuwing Linggo ng gabi.</span>
                </label>

                <label
                    class="border border-slate-200 rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:border-blue-500 transition">
                    <div class="flex items-center justify-between">
                        <span class="font-semibold text-sm text-slate-800">Monthly Backup</span>
                        <input type="radio" name="backup_schedule" class="text-blue-600 focus:ring-blue-500" />
                    </div>
                    <span class="text-xs text-slate-500">Tuwing katapusan ng buwan.</span>
                </label>
            </div>
        </div>
    </div>
</template>