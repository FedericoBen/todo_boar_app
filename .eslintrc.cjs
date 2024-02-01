/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended'
  ],
  plugins: ['sonarjs', 'react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-key': 0,
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-identical-functions': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'warn',
    'sonarjs/cognitive-complexity': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
        '**/*.spec.ts'
      ],
      env: {
        jest: true
      }
    }
  ]
}
