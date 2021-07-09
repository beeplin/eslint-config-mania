import base from './base'
import import_ from './import'
import noModuleAware from './no-module-aware'
import noTypeAware from './no-type-aware'
import react from './react'
import vue from './vue'

export interface Options {
  noModuleAware?: boolean
  noTypeAware?: boolean
  react?: boolean
  vue?: boolean
  // node?: boolean
  // runPrettier?: boolean
}

export default function getConfig(options: Options = {}) {
  return {
    ignorePatterns: ['dist', 'lib'],
    reportUnusedDisableDirectives: true,
    parserOptions: { project: './tsconfig.json' },
    extends: [
      ...base.extends,
      ...import_.extends,
      ...react.extends,
      ...vue.extends,
      'prettier',
    ],
    rules: {
      ...base.rules,
      ...import_.rules,
      ...(options.noModuleAware ? noModuleAware.rules : {}),
      ...(options.noTypeAware ? noTypeAware.rules : {}),
      ...(options.react ? react.rules : {}),
      ...(options.vue ? vue.rules : {}),
    },
    overrides: [
      {
        files: ['*.js', '*.jsx'],
        rules: { ...base.overrides.js.rules },
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
        rules: {
          ...base.overrides.test.rules,
        },
      },
    ],
  }
}
