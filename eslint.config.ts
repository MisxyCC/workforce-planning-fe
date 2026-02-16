import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginPlaywright from 'eslint-plugin-playwright'
import pluginVitest from '@vitest/eslint-plugin'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'
import unusedImports from 'eslint-plugin-unused-imports'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
  {
    name: 'app/custom-rules',
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // ปิดการบังคับตั้งชื่อ Component ต้องประกอบด้วย 2 คำขึ้นไป (ช่วยลดความรำคาญในหลายโปรเจกต์)
      'vue/multi-word-component-names': 'off',

      // ปรับให้การใช้ Type 'any' แจ้งเตือนแค่ระดับ Warning แทนที่จะพ่น Error
      '@typescript-eslint/no-explicit-any': 'warn',

      // อนุญาตให้มีตัวแปรที่ไม่ได้ใช้งานได้ หากตัวแปรนั้นนำหน้าด้วยเครื่องหมาย _ (Underscore)
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      "unused-imports/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "varsIgnorePattern": "^_",
                "args": "after-used",
                "argsIgnorePattern": "^_",
            },
        ]
    },
  },
)
