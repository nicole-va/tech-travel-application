module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'react-hooks'
    ],
    "rules": {
        'react/jsx-no-constructed-context-values': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'no-unused-expressions': 'off',
        'import/prefer-default-export': 'off',
        //'no-unused-vars': ['warn', { argsIgnorePattern: '^' }],
        'react/jsx-one-expression-per-line': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-console': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-no-bind': 'off',
        //'prettier/prettier': 'error',
        'react/jsx-key': 'off',
    }
}
