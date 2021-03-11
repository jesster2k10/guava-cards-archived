module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    'arrow-body-style': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*.test.tsx',
          '**/*.spec.tsx',
          'test/**/*.ts',
          '__test__/**/*',
          'spec/**/*.ts',
          'vite.config.ts',
        ],
      },
    ],
    'no-param-reassign': ['error', {props: false}],
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {enums: false, typedefs: false, variables: false},
    ],
    'import/extensions': [
      'error',
      {js: 'never', ts: 'never', tsx: 'never', jsx: 'never', json: 'always'},
    ],
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  },
};
