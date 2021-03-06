module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    // Code
    "complexity": [
      "error",
      10
    ],
    "prefer-const": "error",
    "strict": [
      "error",
      "safe"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none"
      }
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-duplicate-imports": "error",
    "prefer-template": "error",
    "new-cap": "error",

    // Visual
    "indent": [
      "error",
      2
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",

    // JSDoc
    "valid-jsdoc": [
      "error",
      {
        "requireParamDescription": false,
        "requireReturnDescription": false,
        "prefer": {
          "return": "returns"
        }
      }
    ]
  }
};
