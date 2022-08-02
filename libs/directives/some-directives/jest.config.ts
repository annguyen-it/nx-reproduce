/* eslint-disable */
export default {
  displayName: 'directives-some-directives',
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true, // Added manually
    },
  },
  coverageDirectory: '../../../coverage/libs/directives/some-directives',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  // transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],

  // Added manually
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  moduleNameMapper: {
    '^@nx-reproduce/(.*)$': '<rootDir>/../../../libs/$1/src/index.ts',
    tslib: 'tslib/tslib.es6.js',
  },
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|@angular|@taiga-ui|rxjs)',
  ],
};
