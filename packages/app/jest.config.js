const path = require("path");

module.exports = {
  roots: ["<rootDir>"],
  testRegex: "/__tests__/.*\\.spec\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.+)$": path.join(__dirname, "/src", "$1"),
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*"],
  coveragePathIgnorePatterns: ["./src/pages"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
