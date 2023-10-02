module.exports = {
  'env': {
    'es6': true,
    'node': true,
    browser: true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2020,
    sourceType: 'module',
  },
  'rules': {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'camelcase': ['error', {'properties': 'always'}],
    'prefer-arrow-callback': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-newline': ['error', {'consistent': true}],
    'brace-style': ['error', '1tbs'],
    'space-infix-ops': 'error',
    'no-unused-vars': 'warn',
  },
};