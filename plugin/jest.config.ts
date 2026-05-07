import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: undefined,
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: [['react-app', { runtime: 'automatic', typescript: true }]] }],
    '^.+\\.(svg|png|jpg|jpeg|gif|woff2?|ttf|eot|otf)$': '<rootDir>/jest.fileTransform.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@patternfly|@openshift-console|lodash-es|d3|d3-.*|delaunator|internmap|robust-predicates|webcola|victory.*)/)'
  ],
  moduleNameMapper: {
    '@openshift-console/dynamic-plugin-sdk': '<rootDir>/src/kiali/services/__mocks__/openshift-console-sdk.ts',
    '\\.(css|scss)$': '<rootDir>/src/kiali/services/__mocks__/styleMock.ts',

    '^app/(.*)$': '<rootDir>/src/kiali/app/$1',
    '^actions/(.*)$': '<rootDir>/src/kiali/actions/$1',
    '^components/(.*)$': '<rootDir>/src/kiali/components/$1',
    '^config$': '<rootDir>/src/kiali/config',
    '^config/(.*)$': '<rootDir>/src/kiali/config/$1',
    '^helpers/(.*)$': '<rootDir>/src/kiali/helpers/$1',
    '^hooks/(.*)$': '<rootDir>/src/kiali/hooks/$1',
    '^i18n$': '<rootDir>/src/openshift/i18n.ts',
    '^pages/(.*)$': '<rootDir>/src/kiali/pages/$1',
    '^reducers/(.*)$': '<rootDir>/src/kiali/reducers/$1',
    '^routes$': '<rootDir>/src/kiali/routes.tsx',
    '^routes/(.*)$': '<rootDir>/src/kiali/routes/$1',
    '^services/(.*)$': '<rootDir>/src/kiali/services/$1',
    '^store/(.*)$': '<rootDir>/src/kiali/store/$1',
    '^styles/(.*)$': '<rootDir>/src/kiali/styles/$1',
    '^types/(.*)$': '<rootDir>/src/kiali/types/$1',
    '^utils/(.*)$': '<rootDir>/src/kiali/utils/$1',
    '^openshift/(.*)$': '<rootDir>/src/openshift/$1'
  },
  setupFiles: [
    '<rootDir>/jest.setup-globals.ts',
    'jest-localstorage-mock',
    'jest-canvas-mock',
    '<rootDir>/src/kiali/setupTests.ts'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
};

export default config;
