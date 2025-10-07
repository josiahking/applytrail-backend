// @ts-check
// eslint.config.ts
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  // Global ignores for your project, applied to all configurations.
  {
    ignores: ['node_modules', 'dist', 'coverage', 'prisma', 'src/generated'],
  },

  // Recommended rules for plain JavaScript, applied globally.
  js.configs.recommended,

  // Recommended rules for TypeScript from typescript-eslint.
  // This automatically includes the TypeScript parser and sets up the necessary rules.
  ...tseslint.configs.recommended,

  // Custom configurations and overrides, applied to both JS and TS files.
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      // Enable Node.js globals for all relevant file types.
      globals: {
        ...globals.node,
      },
      // Configure the TypeScript parser to use your tsconfig.json.
      // This is necessary for type-aware linting.
      parserOptions: {
        //project: './tsconfig.json',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // Enforce Prettier formatting rules.
      'prettier/prettier': 'error',

      // Custom rule to allow unused variables prefixed with an underscore.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Allow console statements.
      'no-console': 'off',
    },
  },
  eslintConfigPrettier,
]);
