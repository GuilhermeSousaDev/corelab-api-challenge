export default {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.ts'],
    coverageProvider: 'v8',
    coverageReporters: ['text-summary', 'lcov'],
};