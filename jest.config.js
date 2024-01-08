module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/paraphrase.ts',
    ],
    testTimeout: 10000
  };
  