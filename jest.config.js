module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts}'],
    testMatch: ["<rootDir>/tests/**/*.{ts, js}"],
}
