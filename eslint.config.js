import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // 1. กำหนดนามสกุลไฟล์ที่ต้องการให้ ESLint เข้าตรวจสอบ
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,ts,mts,tsx,vue}'],
  },

  // 2. กำหนดโฟลเดอร์ที่ต้องการละเว้น (Ignored files)
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules/**'],
  },

  // 3. กฎพื้นฐานสำหรับ Vue 3
  // หากต้องการความเข้มงวดเพิ่มขึ้น สามารถเปลี่ยน 'flat/essential' เป็น 'flat/strongly-recommended' หรือ 'flat/recommended' ได้
  ...pluginVue.configs['flat/essential'],

  // 4. กฎพื้นฐานสำหรับ TypeScript (จัดการ Parser ทับซ้อนกับ Vue ให้โดยอัตโนมัติ)
  ...vueTsEslintConfig(),

  // 5. ปิดกฎของ ESLint ในส่วนที่เกี่ยวกับการจัดฟอร์แมต เพื่อหลีกเลี่ยงการตีกันกับ Prettier
  skipFormatting,

  // 6. พื้นที่สำหรับปรับแต่งกฎ (Custom Rules) ตามความเหมาะสมของทีม
  {
    name: 'app/custom-rules',
    rules: {
      // ปิดการบังคับตั้งชื่อ Component ต้องประกอบด้วย 2 คำขึ้นไป (ช่วยลดความรำคาญในหลายโปรเจกต์)
      'vue/multi-word-component-names': 'off',

      // ปรับให้การใช้ Type 'any' แจ้งเตือนแค่ระดับ Warning แทนที่จะพ่น Error
      '@typescript-eslint/no-explicit-any': 'warn',

      // อนุญาตให้มีตัวแปรที่ไม่ได้ใช้งานได้ หากตัวแปรนั้นนำหน้าด้วยเครื่องหมาย _ (Underscore)
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
