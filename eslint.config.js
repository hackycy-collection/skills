import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/skills/**',
  ],
  rules: {
    'no-console': 'off',
  },
})
