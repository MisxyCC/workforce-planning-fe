<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200/50 font-sans text-gray-900">
    <div
      class="w-full max-w-100 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10"
    >
      <!-- Header / Logo Section -->
      <div class="flex flex-col items-center mb-10">
        <div
          class="w-20 h-20 bg-pea/5 rounded-2xl flex items-center justify-center mb-5 text-pea ring-1 ring-pea/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Workforce Planning System NE1
        </h1>
        <p class="text-sm text-gray-500 mt-2">ระบบวางแผนอัตรากำลัง กฟฉ.1</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- <div class="space-y-2">
          <label for="username" class="text-sm font-medium text-gray-700 ml-1">รหัสพนักงาน</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-pea/20 focus:border-pea outline-none transition-all placeholder:text-gray-400"
            placeholder="ระบุรหัสพนักงาน"
            required
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between ml-1">
            <label for="password" class="text-sm font-medium text-gray-700">รหัสผ่าน</label>
            <a href="#" class="text-xs font-medium text-pea hover:text-pea/80 transition-colors"
              >ลืมรหัสผ่าน?</a
            >
          </div>
          <input
            id="password"
            v-model="password"
            type="password"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-pea/20 focus:border-pea outline-none transition-all placeholder:text-gray-400"
            placeholder="••••••••"
            required
          />
        </div> -->

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full py-3 bg-pea hover:bg-pea/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-pea/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mt-2 cursor-pointer"
        >
          <span v-if="!isLoading">เข้าสู่ระบบด้วย PEA SSO</span>
          <span
            v-else
            class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
          ></span>
        </button>
      </form>

      <div class="mt-10 text-center">
        <p class="text-[11px] text-gray-400 uppercase tracking-wider">
          การไฟฟ้าส่วนภูมิภาค | Provincial Electricity Authority
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(false);

const handleLogin = async () => {
  isLoading.value = true;
  // จำลองการเรียก API Login
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isLoading.value = false;
  router.push('/home');
};
</script>
