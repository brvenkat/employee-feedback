module.exports = {
  "testRegex": "/*.(test).(tsx?)$",
  "setupFilesAfterEnv": ["<rootDir>/tests/setupTests.ts"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}