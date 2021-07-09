import { rules as tsRuleModules } from '@typescript-eslint/eslint-plugin'
import type { RuleModule, RuleModules, RulesRecord } from './types'

export default {
  rules: getRulesForNoTypeAware(),
}

const tsScope = '@typescript-eslint'

function getRulesForNoTypeAware() {
  const tsTypeAwareRuleNames = Object.keys(tsRuleModules)
    .filter((name) => tsRuleModules[name].meta.docs?.requiresTypeChecking)
    .map((name) => `${tsScope}/${name}`)

  const ts2esExtenstionRuleNameMap = getTs2EsExtensionRuleNameMap()

  const rules = tsTypeAwareRuleNames.reduce<RulesRecord>((acc, tsRuleName) => {
    const esRuleName = ts2esExtenstionRuleNameMap[tsRuleName]
    return {
      ...acc,
      [tsRuleName]: ['off'],
      ...(esRuleName ? { [esRuleName]: ['error'] } : {}),
    }
  }, {})

  return rules
}

function getTs2EsExtensionRuleNameMap(): Record<string, string> {
  const esRuleModules = getEsRuleModules()
  const sameExtensionRuleNames = Object.keys(tsRuleModules).filter(
    (name) =>
      tsRuleModules[name].meta.docs?.extendsBaseRule && Boolean(esRuleModules[name]),
  )
  const ts2esMap = sameExtensionRuleNames.reduce<Record<string, string>>(
    (acc, name) => ({ ...acc, [`${tsScope}/${name}`]: name }),
    {
      [`${tsScope}/naming-convention`]: 'camelcase', // roughly an extension
      [`${tsScope}/return-await`]: 'no-return-await', // not same name ;(
    },
  )
  return ts2esMap
}

function getEsRuleModules(): RuleModules {
  const eslintRulesMap = require('eslint/lib/rules') as Map<string, RuleModule>
  const ruleModules = Array.from(eslintRulesMap).reduce<RuleModules>(
    (acc, [name, rule]) => ({ ...acc, [name]: rule }),
    {},
  )
  return ruleModules
}

// function getAirbnbBaseRules(): RulesRecord {
//   const airbnbBaseRuleTypes = [
//     'best-practices',
//     'errors',
//     'node',
//     'style',
//     'variables',
//     'es6',
//     'imports',
//     'strict',
//   ]
//   const airbnbBaseRules = airbnbBaseRuleTypes.reduce<RulesRecord>((acc, type) => {
//     // eslint-disable-next-line import/no-dynamic-require
//     const config = require(`eslint-config-airbnb-base/rules/${type}`) as Config
//     return { ...acc, ...config.rules }
//   }, {})

//   return airbnbBaseRules
// }
