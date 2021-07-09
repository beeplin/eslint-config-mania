const tsRuleModules = require('@typescript-eslint/eslint-plugin').rules
const esRulesMap = require('eslint/lib/rules')

const esRuleModules = Array.from(esRulesMap).reduce(
  (acc, [name, rule]) => ({ ...acc, [name]: rule }),
  {},
)
const tsScope = '@typescript-eslint'

const sameExtensionRuleNames = Object.keys(tsRuleModules).filter(
  (name) =>
    tsRuleModules[name].meta.docs?.extendsBaseRule && Boolean(esRuleModules[name]),
)

const ts2esExtenstionRuleNameMap = sameExtensionRuleNames.reduce(
  (acc, name) => ({ ...acc, [`${tsScope}/${name}`]: name }),
  {
    [`${tsScope}/naming-convention`]: 'camelcase', // roughly an extension
    [`${tsScope}/return-await`]: 'no-return-await', // not same name ;(
  },
)

const tsTypeAwareRuleNames = Object.keys(tsRuleModules)
  .filter((name) => tsRuleModules[name].meta.docs?.requiresTypeChecking)
  .map((name) => `${tsScope}/${name}`)

const rulesToDisableTypeAware = tsTypeAwareRuleNames.reduce((acc, tsRuleName) => {
  const esRuleName = ts2esExtenstionRuleNameMap[tsRuleName]
  return {
    ...acc,
    [tsRuleName]: ['off'],
    ...(esRuleName ? { [esRuleName]: ['error'] } : {}),
  }
}, {})

module.exports = {
  rules: rulesToDisableTypeAware,
}
