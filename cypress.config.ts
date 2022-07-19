// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,import/extensions,global-require
      return require('./tests/e2e/plugins/index.js')(on, config);
    },
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support/index.js',
  },
});
