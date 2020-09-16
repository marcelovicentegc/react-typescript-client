const modules = [].join("|");

module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
  },
  transform: {
    "^.+\\.(ts|js|tsx)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!(${modules})/)`],
};
