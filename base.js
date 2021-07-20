const importRuleModules = require('eslint-plugin-import').rules

const allImportRulesOn = Object.keys(importRuleModules).reduce(
  (acc, name) => ({ ...acc, [`import/${name}`]: ['error'] }),
  {},
)

module.exports = {
  ignorePatterns: ['dist', 'lib'],
  reportUnusedDisableDirectives: true,
  parserOptions: { project: './tsconfig.json' },

  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],

  rules: {
    'array-callback-return': ['error', { checkForEach: false }],
    'arrow-body-style': ['off'],
    '@typescript-eslint/await-thenable': ['warn'],
    camelcase: ['off'],
    'capitalized-comments': ['off'],
    '@typescript-eslint/class-literal-property-style': ['warn'],
    'class-methods-use-this': ['warn'],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ],
    eqeqeq: ['error', 'smart'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    'func-names': ['warn'],
    'func-style': ['off'],
    'id-denylist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    'line-comment-position': ['off'],
    'max-classes-per-file': ['warn'],
    'max-depth': ['warn'],
    'max-lines': ['warn'],
    'max-lines-per-function': ['warn'],
    'max-nested-callbacks': ['warn'],
    'max-params': ['warn'],
    'max-statements': ['warn'],
    '@typescript-eslint/member-ordering': ['warn'],
    'multiline-comment-style': ['off'],
    'no-alert': ['warn'],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-else-return': ['error', { allowElseIf: false }],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-empty-interface': ['warn'],
    'no-eq-null': ['off'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-extraneous-class': ['warn'],
    'no-inline-comments': ['off'],
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: true,
      },
    ],
    'no-negated-condition': ['warn'],
    'no-nested-ternary': ['off'],
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'ctx',
          'context',
          'e',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    '@typescript-eslint/no-parameter-properties': ['off'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    '@typescript-eslint/no-require-imports': ['off'],
    'no-restricted-exports': ['off'],
    'no-restricted-globals': ['off'],
    'no-restricted-imports': ['off'],
    'no-restricted-properties': ['off'],
    'no-restricted-syntax': ['off'],
    '@typescript-eslint/no-shadow': ['warn', { builtinGlobals: true, hoist: 'all' }],
    'no-ternary': ['off'],
    '@typescript-eslint/no-type-alias': ['off'],
    'no-undefined': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    'no-warning-comments': ['warn'],
    'one-var': ['error', { initialized: 'never' }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['class', 'export', 'function'] },
    ],
    'prefer-arrow-callback': ['off'], // see https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'prefer-named-capture-group': ['off'],
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
    'require-atomic-updates	': ['off'],
    '@typescript-eslint/require-await': ['warn'],
    'require-unicode-regexp': ['warn'],
    'sort-imports': ['off'],
    'sort-keys': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/typedef': ['off'],

    ...allImportRulesOn,

    'import/no-restricted-paths': ['off'],
    'import/no-internal-modules': ['off'],
    'import/no-relative-parent-imports': ['off'],
    'import/unambiguous': ['off'],
    'import/no-commonjs': ['off'],
    'import/no-nodejs-modules': ['off'],
    'no-import-module-exports': ['off'],
    'import/exports-last': ['off'],
    // 'import/order': ['off'],
    'import/prefer-default-export': ['off'],
    // 'import/max-dependencies': ['off'],
    'import/no-unassigned-import': ['off'],
    'import/group-exports': ['off'],
    'import/no-default-export': ['off'],
    'import/no-named-export': ['off'],
    'import/no-anonymous-default-export': ['off'],
    'import/dynamic-import-chunkname': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    'import/named': ['off'],
    'import/namespace': ['off'],
    'import/default': ['off'],
    'import/no-named-as-default-member': ['off'],
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-member-accessibility': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-unsafe-call': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-unsafe-argument': ['off'],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        '@typescript-eslint/no-unsafe-member-access': ['off'],
        '@typescript-eslint/restrict-template-expressions': ['off'],
      },
    },
    {
      files: [
        'test/*',
        'tests/*',
        '__tests__/*',
        '*.test.js',
        '*.spec.js',
        '*.test.ts',
        '*.spec.ts',
      ],
      extends: ['plugin:jest/all'],
      rules: {
        'max-classes-per-file': ['off'],
        'max-depth': ['off'],
        'max-lines': ['off'],
        'max-lines-per-function': ['off'],
        'max-nested-callbacks': ['off'],
        'max-params': ['off'],
        'max-statements': ['off'],
        '@typescript-eslint/no-magic-numbers': ['off'],
        'jest/no-disabled-tests': ['warn'],
        'jest/no-hooks': ['off'],
        'jest/require-top-level-describe': ['off'],
        'jest/prefer-expect-assertions': ['off'],
      },
    },
  ],
}
