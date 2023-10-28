module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'filename-rules',
    'react',
    'react-native',
    '@typescript-eslint',
    'jest',
    'react-hooks',
    'folders',
  ],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    createDefaultProgram: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'no-console': 2,
    'react-hooks/exhaustive-deps': 'error',
    'filename-rules/match': [
      2,
      {
        '.tsx': 'PascalCase',
        '.ts':
          /^(?!types|styles)([a-z]+-)*[a-z]+\.?(test|presets|styles|props|constants|d|slice|thunk|interface|types|setup|hook|context)?(\.test)?(\.ts)?$/,
      },
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
