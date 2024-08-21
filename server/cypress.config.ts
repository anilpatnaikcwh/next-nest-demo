import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://localhost:8080/api",
    screenshotOnRunFailure: false,
    specPattern: ["**/categories.cy.ts", "**/products.cy.ts"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
