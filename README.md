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

#### `linebreak-style [2,"unix"]`
Enforce consistent UNIX linebreak style. ([Docs](https://eslint.org/docs/rules/linebreak-style))

#### `semi [2,"always"]`
Require semicolons instead of ASI. ([Docs](https://eslint.org/docs/rules/semi))

#### `comma-style ["error","last"]`
Enforce consistent comma style with comma after and on the same line as an array element, object property, or variable declaration. ([Docs](https://eslint.org/docs/rules/comma-style))

#### `no-multiple-empty-lines ["error"]`
Disallow multiple empty lines. ([Docs](https://eslint.org/docs/rules/no-multiple-empty-lines))

#### `no-trailing-spaces ["error"]`
Disallow trailing whitespace at the end of lines. ([Docs](https://eslint.org/docs/rules/no-trailing-spaces))

### Code

#### `strict ["error", "safe"]`
Disallow [strict mode](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Strict_mode) in ES6 modules context (modules are "strict" by design), otherwise require it. ([Docs](https://eslint.org/docs/rules/strict))

#### `prefer-const ["error"]`
Require [const](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/const) declarations for variables that are never reassigned after declared. ([Docs](https://eslint.org/docs/rules/prefer-const))

#### `no-unused-vars ["error",{"vars": "local","args": "none"}]`
Disallow unused local variables. Don't check arguments. ([Docs](https://eslint.org/docs/rules/no-unused-vars))

#### `no-empty ["error",{"allowEmptyCatch": true}]`
Disallow empty block statements except empty catch blocks. ([Docs](https://eslint.org/docs/rules/no-empty))

#### `no-duplicate-imports ["error"]`
Disallow duplicate module imports. ([Docs](https://eslint.org/docs/rules/no-duplicate-imports))

#### `prefer-template ["error"]`
Require template literals instead of string concatenation. ([Docs](https://eslint.org/docs/rules/prefer-template))

#### `new-cap ["error"]`
Require constructor names to begin with a capital letter. ([Docs](https://eslint.org/docs/rules/new-cap))

#### `complexity ["error",10]`
Enforce a maximum [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) of 10 allowed in a program which can be one *indicator* for the quality of your code. ([Codecentric Article](https://blog.codecentric.de/en/2011/10/why-good-metrics-values-do-not-equal-good-quality/), [Docs](https://eslint.org/docs/rules/complexity))

### JSDoc

#### `valid-jsdoc ["error",{"requireParamDescription": false,"requireReturnDescription": false,"prefer": {"return": "returns"}}]`
Don't require JSDoc, but *if* attached, enforce it to be valid and consistent. Don't require param or return value *description* (but presence!) and enforce "@return**s**" instead of a mixture of "@return" and "@return**s**". ([Docs](https://eslint.org/docs/rules/valid-jsdoc))

