module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/kiali/setupTextEncoder.ts', '<rootDir>/src/kiali/setupTests.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@patternfly|@openshift-console|lodash-es|react-i18next|i18next|uuid|d3|d3-.*|internmap|delaunator|robust-predicates|victory.*|refractor|react-markdown|remark-.*|rehype-.*|unified|unist-.*|bail|is-plain-obj|trough|vfile|vfile-.*|micromark.*|mdast-.*|hast-.*|property-information|comma-separated-tokens|space-separated-tokens|decode-named-character-reference|character-entities|devlop|ccount|escape-string-regexp|markdown-table|zwitch|longest-streak|web-namespaces|html-void-elements|stringify-entities|character-entities-html4|character-entities-legacy|trim-lines|is-absolute-url)/)'
  ],
  moduleNameMapper: {
    '^@patternfly/chatbot$': '<rootDir>/src/kiali/mocks/chatbotMock.ts',
    '^@patternfly/chatbot/(.*)$': '<rootDir>/src/kiali/mocks/chatbotMock.ts',
    '^@openshift-console/dynamic-plugin-sdk$': '<rootDir>/src/kiali/mocks/consoleSdkMock.ts',
    '^@openshift-console/dynamic-plugin-sdk/(.*)$': '<rootDir>/src/kiali/mocks/consoleSdkMock.ts',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/kiali/mocks/styleMock.ts',
    '\\.svg$': '<rootDir>/src/kiali/mocks/svgMock.tsx',
    '\\.(gif|ttf|eot|png|woff2?)$': '<rootDir>/src/kiali/mocks/fileMock.ts',
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
  snapshotSerializers: ['enzyme-to-json/serializer']
};
