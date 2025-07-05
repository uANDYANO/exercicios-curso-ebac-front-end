const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://agenda-contatos-react.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
