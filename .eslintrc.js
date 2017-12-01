const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    commonjs: true,
    amd: true,
    es6: true
  },
  settings: {
    'import/resolver': 'reactnative'
  },
  globals: {
    describe: true,
    expect: true,
    it: true,
    jest: true,
    beforeEach: true,
    test: true,
    fetch: true,
    FormData: true,
    navigator: true,
    alert: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react', 'flowtype', 'react-native', 'prettier'],
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  rules: {
    'linebreak-style': [ERROR, 'unix'],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'quotes': [ERROR, 'single'],
    'quote-props': [ERROR, 'as-needed'],
    'semi': [ERROR, 'never'],
    'no-unused-vars': [ERROR, { 'vars': 'all', 'args': 'after-used', 'argsIgnorePattern': '^_' }],
    'comma-spacing': OFF,
    'comma-dangle': OFF,
    'function-paren-newline': OFF,
    'prefer-destructuring': OFF,
    'object-curly-spacing': OFF,
    'object-curly-newline': OFF,
    'arrow-parens': OFF,
    'new-cap': OFF,
    'spaced-comment': OFF,
    'no-confusing-arrow': OFF,
    'object-property-newline': OFF,
    'no-console': OFF,
    'camelcase': OFF,
    'no-return-assign': OFF,
    'prefer-template': OFF,
    'max-len': OFF,
    'require-yield': OFF,
    'no-multiple-empty-lines': OFF,
    'no-prototype-builtins': OFF,
    'no-unused-expressions': OFF,
    'class-methods-use-this': OFF,
    'arrow-body-style': OFF,
    'default-case': OFF,
    'consistent-return': OFF,
    'no-else-return': OFF,
    'no-restricted-properties': OFF,
    'no-restricted-syntax': OFF,
    'no-use-before-define': OFF,
    'brace-style': OFF,
    'no-multi-spaces': [ERROR, {ignoreEOLComments: true}],
    'indent': ['error', ERROR, {SwitchCase: 1}],
    'no-mixed-operators': OFF,
    'import/no-named-as-default': OFF,
    'import/extensions': [ERROR, 'never'],
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF, // TODO: uncomment before production
    'react/no-unescaped-entities': OFF,
    'react/jsx-max-props-per-line': [ERROR, {maximum: 2, when: 'multiline'}],
    'react/prefer-es6-class': OFF,
    'react/prefer-stateless-function': OFF,
    'react/forbid-prop-types': OFF,
    'react/no-unused-prop-types': OFF,
    'react/jsx-space-before-closing': OFF,
    'react/jsx-first-prop-new-line': OFF,
    'react/jsx-boolean-value': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/sort-comp': OFF,
    'react/jsx-closing-bracket-location': [ERROR, 'after-props'],
    'react/jsx-wrap-multilines': OFF,
    'react/no-array-index-key': OFF,
    'react/jsx-filename-extension': [ERROR, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/no-static-element-interactions': OFF
  }
}
