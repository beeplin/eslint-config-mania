# eslint-config-mania

## install

```bash
npm i -D eslint eslint-config-mania prettier
```

## usage

in your `eslintrc.json`:

```js
{
  "extends": [
    // required. must be on top. basic config supporting typescript, import, jest and prettier
    // see https://eslint.org/docs/rules/
    // and https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
    // and https://github.com/benmosher/eslint-plugin-import
    // and https://github.com/jest-community/eslint-plugin-jest
    // and https://github.com/prettier/eslint-config-prettier
    "mania",

    // optional. speed up by disabling module-aware rules
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    "mania/no-module-aware",

    // optional. speed up by disabling type-aware rules
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
    "mania/no-type-aware",

    // optional. add rules for node
    // see https://github.com/mysticatea/eslint-plugin-node
    "mania/node",

    // optional. add rules for react
    // see https://github.com/yannickcr/eslint-plugin-react
    // and https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    // and https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    "mania/react",

    // optional. add rules for vue
    // see https://github.com/vuejs/eslint-plugin-vue
    // and https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    "mania/vue",

    // optional. run prettier as a part of eslint rules.
    // NOT recommended. it's better to run prettier via your editor's prettier plugin
    // see https://github.com/prettier/eslint-plugin-prettier
    // and https://prettier.io/docs/en/integrating-with-linters.html
    "mania/run-prettier-in-eslint"
  ]
}
```
