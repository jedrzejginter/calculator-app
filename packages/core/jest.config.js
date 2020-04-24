module.exports = {
  roots: ["<rootDir>"],
  testRegex: "/__tests__/.*\\.spec\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
