import { defineConfig } from "cypress";
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  env: {
    sso_url: process.env.KEYCLOAK_URL,
  },
  e2e: {
    baseUrl: process.env.APP_URL,
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies :true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
