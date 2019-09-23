module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "<rootDir>/__build__/jest-transformer"
    },
    testMatch: [
        "**/?(*.)spec.ts"
    ],

    moduleDirectories: [
        "src", "node_modules"
    ],

    moduleNameMapper: {
        "^commonly/(.*)$": "<rootDir>/src/$1"
    },

    collectCoverageFrom: [
        "src/**/*.ts", "!src/type/**/*.ts", "!src/**/index.ts"
    ],

    setupFiles: [
        "jest-plugin-context/setup"
    ]
}
