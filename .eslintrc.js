module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": ["error"]
  }
};
