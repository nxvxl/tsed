// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  ...require("@tsed/jest-config")(__dirname, "platform-serverless"),
  coverageThreshold: {
    global: {
      branches: 64.29,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
