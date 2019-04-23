module.exports = {
  extends: ['rapt', 'plugin:react/recommended'],
  globals: {
    __DEV__: false,
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-raw-text': 0,

    'react/jsx-key': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-fragments': 1,
    'react/prop-types': 0,
    'react/no-did-update-set-state': 1,
    'react/no-access-state-in-setstate': 2,
    'react/no-deprecated': 1,
    'react/no-unsafe': 1,
    'react/no-redundant-should-component-update': 1,
    'react/no-typos': 1,
    'react/no-this-in-sfc': 1,
    'react/no-unused-state': 1,
    'react/jsx-no-bind': 0,

    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
}
