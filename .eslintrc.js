module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', // Default RN config
    'standard-with-typescript', // Installed in step 2
    'eslint-config-prettier', // Installed in step 3
  ],
  parser: '@typescript-eslint/parser', // Installed in step 2
  plugins: [
    '@typescript-eslint', // Installed in step 2
    'react', // Installed in step 1
    'react-native', // Installed in step 1
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Required for Standard plugin
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
    semi: ['error', 'never'],
    "@typescript-eslint/react-hooks/exhaustive-dep": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars-experimental": "error",
    "no-unused-vars": "off",
    'no-redeclare': 'off',
    'import/export': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
