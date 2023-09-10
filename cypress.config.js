const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseurl: 'https://www.webdriveruniversity.com/',
  env: {
    webDriverUni_HomePage: 'https://www.webdriveruniversity.com/',
    first_Name: 'Tas',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
