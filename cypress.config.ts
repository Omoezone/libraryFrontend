import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/signup.cy.ts",
      "cypress/e2e/login.cy.ts",
      "cypress/e2e/deleteTestUser.cy.ts"
    ],
  },
});
