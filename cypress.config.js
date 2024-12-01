const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
     //log in headless mode
      on("task", {
        log(args) {
          console.log(...args);
          return null;
        }
      });
    //report configs
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
   
    //all this modify the setting of test runner(here I kept default ones as it is)
    defaultCommandTimeout: 4000,//Wait for most commands to complete
    testIsolation:false,
    requestTimeout: 5000,//Wait for a network request to complete
    responseTimeout: 30000,//Wait for a response from a network request
retries: {//Retry failed tests a specified number of times
runMode: 0,
openMode: 0,
},
    pageLoadTimeout: 60000,   //Wait for a page to load using cy.visit() 
  },
});
