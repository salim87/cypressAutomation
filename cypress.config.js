const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6x242j',
  e2e: {
    baseUrl: 'https://webdriveruniversity.com/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
     // return require('./cypress/plugins/index.js')(on, config)
    },
  },
  env:{
    CYPRESS_BASE_URL: 'https://webdriveruniversity.com/'
  }
})
