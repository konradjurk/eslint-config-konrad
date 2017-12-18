# eslint-config-konrad [![npm](https://img.shields.io/npm/v/eslint-config-konrad.svg)](https://www.npmjs.com/package/eslint-config-konrad)

Set of Javascript rules that I consider useful to remain a good Javascript code style. 👮

## Usage

1. Pick one way to install the addon.

    ```bash
    $ yarn add eslint-config-konrad --dev
    $ npm install eslint-config-konrad --save-dev
    ```

2. Inherit in your eslint config (`.eslintrc` or `.eslintrc.js`)
    ```json
     {
      "extends": "eslint-config-konrad",
      "rules": {}
     }
    ```

## Rules

### Visual

#### `indent [error, 2]`
Enforce consistent indentation of 2 spaces. ([Docs](https://eslint.org/docs/rules/indent))

#### `quotes [2,"single",{"avoidEscape": true}]`
Enforce the consistent use of single quotes, except when a different type avoids escaping. ([Docs](https://eslint.org/docs/rules/quotes))
