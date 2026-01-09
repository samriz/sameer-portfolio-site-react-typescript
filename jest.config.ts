// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Use ts-jest for TypeScript
  testEnvironment: 'jsdom', // Simulate a browser environment
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Point to the setup file
  // Optional: if you have path aliases in tsconfig.json (e.g., "@/components")
  /*
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  */
};

export default config;