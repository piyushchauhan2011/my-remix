/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  rules: {
    // your overrides
    "react/forbid-dom-props": ["warn", { forbid: ["style"] }],
    "react/forbid-component-props": ["warn", { forbid: ["style"] }],
  },
};
