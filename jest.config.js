module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    collectCoverage: true,
    collectCoverageFrom: ['src/ig-template/**/*.{js,jsx,ts}'],
    testMatch: ["<rootDir>/tests/**/*.{ts, js}"],
    transformIgnorePatterns: [
        "<rootDir>node_modules/(?!(lodash-es"
        + "|incremental-game-template"
        + ")/)",
    ]
}
