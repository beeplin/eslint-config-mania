module.exports = {
  root: true,
  env: { node: true },
  extends: ['atp/test'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
