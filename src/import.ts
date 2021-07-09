import { rules as ruleModules } from 'eslint-plugin-import'
import type { RuleModules, RulesRecord } from './types'

const allRulesOn = Object.keys(ruleModules as RuleModules).reduce<RulesRecord>(
  (acc, name) => ({ ...acc, [`import/${name}`]: ['error'] }),
  {},
)

export default {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],

  rules: {
    ...allRulesOn,

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
}
