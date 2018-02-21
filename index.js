module.exports = {
  extends: ['rapt', 'plugin:react/recommended'],
  globals: {
    __DEV__: false,
  },
  plugins: ['react', 'react-native'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    'react/jsx-key': 0,
    'react/prop-types': 0,
    'react/no-did-update-set-state': 1,
  },
}
