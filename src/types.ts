/* eslint-disable @typescript-eslint/no-var-requires */

import type { TSESLint } from '@typescript-eslint/experimental-utils'

export type RuleModule = TSESLint.RuleModule<string, unknown[]>

export type RuleModules = Record<string, RuleModule>

export type Config = TSESLint.Linter.Config

export type RuleEntry = TSESLint.Linter.RuleEntry

export type RulesRecord = TSESLint.Linter.RulesRecord
