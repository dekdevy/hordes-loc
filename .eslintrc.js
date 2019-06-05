module.exports = {
  'plugins': [
    'sort-imports-es6-autofix'
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'newline-per-chained-call': 'error',
    'no-useless-return': 'error',
    'max-len': ['error', { 'code': 80, 'comments':200, 'tabWidth':2, 'ignoreStrings':true, 'ignoreTemplateLiterals':true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': ['error', { 'args': 'none' }],
    'key-spacing': ['error', { 'align': 'colon' }],
    'block-spacing': 'error',
    'comma-style': ['error', 'last'],
    'brace-style': 'error',
    'lines-between-class-members': ['error', 'always'],
    'no-multiple-empty-lines':['error', {'max': 1}],
    'space-before-blocks': 'error',
    'operator-linebreak': ['error', 'after'],
    'no-trailing-spaces': 'error',
    'camelcase': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}