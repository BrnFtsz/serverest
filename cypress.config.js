const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://front.serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 4000,
    responseTimeout: 100000,
    chromeWebSecurity: false
  }
});
