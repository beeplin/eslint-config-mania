// eslint-disable-next-line @typescript-eslint/naming-convention
const { ESLint } = require('eslint')

describe.each([
  'base',
  'no-module-aware',
  'no-type-aware',
  'node',
  'react',
  'vue',
  'run-prettier-in-eslint',
])('%s', (configName) => {
  it.each(['a.ts', 'a.js', 'a.test.ts', 'a.test.js'])(
    'makes config for %s',
    async (fileName) => {
      const eslint = new ESLint({
        useEslintrc: false,
        overrideConfigFile: `./${configName}.js`,
      })
      const config = await eslint.calculateConfigForFile(fileName)
      expect(config).toMatchSnapshot()
    },
  )
})
