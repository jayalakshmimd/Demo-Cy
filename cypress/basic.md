### 1.What is Cypress, and what is its purpose?
Cypress is a JavaScript-based end-to-end testing tool designed for modern web test automation. This developer-friendly tool operates directly in the browser using a DOM manipulation technique and enables front-end developers and QA engineers to write automated web tests while eliminating pain points. 
### 2.I am new to Cypress, I wanted to setup and execute my first script. Could you help me with that?
A)Install VS code editor and Node.js
B)Create a new project
C)Create a package.json file npm init -y is a command-line instruction used.
D)Install Cypress:-npm install cypress --save-dev
E)Open Cypress:-npx cypress open
F)Create First Test in cypress/e2e
describe('My First Test', () => {
  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io')
    cy.contains('Documentation').click()
    cy.url().should('include', '/guides')
  })
})
G)Run The test
npx cypress run
or
npx cypress open ----->You should see your my_first_test.spec.js file listed. Click on it to run the test.
H)View Results
### 3.How to handle reusability in the Cypress framework?
1.We can leverage code reusability in cypress with custom commands
  EX:-Custom commands for log in,Custom Command for Selecting Dropdown Option
2.Use Fixtures to store data
3.You can create utility functions for common actions. Place them in a separate file, such as cypress/support/utils.js.
   ### utils.js
  export const fillInput = (selector, value) => {
  cy.get(selector).clear().type(value);
};
   ### testfile.spec.js
   import { fillInput } from '../support/utils';
   describe('Form Tests', () => {
   it('fills in a form', () => {
    cy.visit('/form');
    fillInput('input[name="username"]', 'myUser');
    fillInput('input[name="password"]', 'myPassword');
  });
  });
### 4.What are hooks in Cypress?
These hooks are borrowed from the Mocha Framework. The primary purpose of using hooks is to have an organized test.
    describe('Tutorialspoint', function() {
   before(function() {
      // executes once prior all tests in it block
      cy.log("Before hook")
   })
   after(function() {
      // executes once post all tests in it block
      cy.log("After hook")
   })
   beforeEach(function() {
      // executes prior each test within it block
      cy.log("BeforeEach hook")
   })
   afterEach(function() {
      // executes post each test within it block
      cy.log("AfterEac hook")
   })
   it('First Test', function() {
      cy.log("First Test")
   })
   it('Second Test', function() {
      cy.log("Second Test")
   })
})
### 5.Does Cypress use Mocha?
Yes, Cypress uses Mocha as its default test framework. Mocha is a JavaScript test framework that allows you to write asynchronous tests with a simple syntax. Cypress leverages Mocha’s capabilities to provide a clean structure for writing tests
Key Features of Mocha in Cypress
A)Describe Blocks: You can group related tests together using describe.
B)It Blocks: Each individual test is defined within an it block.
C)Hooks: Mocha provides hooks like before, beforeEach, after, and afterEach to set up preconditions or clean up after tests.
### 6.What are the components of Cypress?
Cypress has two components.
A)Test Runner
  i)App Preview
  ii)URL Preview
  iii)Viewport
  iV)Command log
  V)Test Status
B)Dashboard
The dashboard component in cypress allows us to see and access recorded tests when cypress tests are running from the CI provider. It provides insight into what happened in our test.
### 7.Could you describe the Cypress folder structures?
cypress---->(root directory)
  i)cypress/e2e/---->(This directory is where you should place your test files. Cypress will automatically detect and run tests from this folder. Test files typically have .spec.js or .test.js file extension.)
  ii)cypress/fixtures/---->You can use this directory to store static data or fixture files that your tests might need, such as JSON, CSV, or text files.

  iii)cypress/plugins/---->If you need to extend Cypress’s functionality, you can create custom plugins in this directory. 
  iV)cypress/support/----->This directory is used for storing various support files. You can include custom commands, global variables, or other scripts that you want to load before running your tests.
   support/
   ├── commands.js
   ├── e2e.js
   ├── customUtilities.js
   ├── customPlugins.js
   └── otherCustomSupportFile.js
   V)cypress.config.js----->This configuration file allows you to set global settings for Cypress, such as the base URL, browser options, and other configurations. It’s a JSON file located in the project’s root directory.
const { defineConfig } = require('cypress')
EXAMPLE:-
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://example.com',
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720
  },
})
  Vi)node_modules/---->This directory contains all the Node.js packages and dependencies used by Cypress and your project.
  Vii)package.json---->This file defines your project’s metadata and dependencies. It’s used for managing Node.js packages and scripts for running Cypress tests
  Viii)package-lock.json--->This file is automatically generated and helps ensure that your project dependencies remain consistent across different environments. It’s used by Node.js’s package manager, npm.
 iX)README.md-->You can include a readme file with documentation, instructions, or information about your Cypress project.
  X)Other Files and Folders---->Depending on your project’s needs, you may have additional files or folders for application code, test data, reports, or CI/CD configurations.

  cypress/e2e/--->have tests
  cypress.config.js---->configurations
  The optional fixtures/, plugins/, and support/.
  ### 8.What are the disadvantages of using Cypress?
  A)There is no multi-language.
  B)Driving two browsers at once is not possible.
  C)Limited support for mobile testing.
  D)No multiple tabs support.
  ### 9.How can I get the browser Properties in Cypress?
  Cypress.browser returns browser object
  it('log browser info', () => {
  console.log(Cypress.browser)
  // {
  //   channel: 'stable',
  //   displayName: 'Chrome',
  //   family: 'chromium',
  //   isChosen: true,
  //   majorVersion: 80,
  //   name: 'chrome',
  //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  //   version: '80.0.3987.87',
  //   isHeaded: true,
  //   isHeadless: false
  // }
})
### 10.How can I read files in Cypress?
i)cy.readFile()
cy.readFile('path/to/file.txt').then((content) => {
  // Do something with the content
});

ii)cy.fixture()
cy.fixture('example.json').then((data) => {
  // Use the loaded data
});
### 11.How can I debug in Cypress?
i)cy.log() and console.log() by configuring cypress tasks
ii)cy.debug() --->One must have their Developer Tools open for .debug() to hit the breakpoint.
iii)cy.pause()---->The .pause() command stops cy commands from running and allows interaction with the application under test.

### 12.How do you handle timeouts in Cypress tests?
i)Default Timeouts:-You can adjust these defaults in your cypress.config.js file.
{
  "defaultCommandTimeout": 8000,
  "requestTimeout": 15000
}
ii)Per Command Timeouts:-You can set timeouts for specific commands directly within your tests using the { timeout: <ms> } option
cy.get('.my-element', { timeout: 10000 }).should('be.visible');
iii)Waiting for response:-If you're waiting for a network response, you can use
cy.intercept('GET', '/api/endpoint').as('getData');
cy.visit('/my-page');
cy.wait('@getData', { timeout: 10000 });
iV)Assertions with Timeouts:-If an assertion is taking longer than expected, you can also set a timeout for that.
cy.get('.my-element').should('have.text', 'Expected Text', { timeout: 5000 });
V)Custom Commands:-If you find yourself needing specific wait logic, consider creating custom commands that encapsulate your waiting logic.
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});
Vi)Fixed Waits:-cy.wait().it's usually better to wait for elements or responses rather than adding fixed waits.
### 13.what is specPattern?
The specPattern configuration option allows you to define which test files Cypress should look for when running tests. It is particularly useful for organizing your test files or when you want to target specific tests.
// cypress.config.js
module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.js' // Pattern to match spec files
  }
}
Benefits
i)Organization: Helps keep your test files organized by specifying naming conventions or directory structures.
ii)Selective Testing: You can run specific groups of tests by adjusting the pattern, which can speed up your development process when you only want to test a subset of your tests.
### 14.what is chromeWebSecurity
It is a configuration option in Cypress that controls whether or not Cypress applies certain security measures when running tests in Chrome-based browsers.
By default,it is set to true. to turn off set.
cypress.config.js
module.exports = {
  e2e: {
    chromeWebSecurity: false
  }
}
When to Disable:-
You might consider setting chromeWebSecurity to false in scenarios like:
i)Testing applications that embed content from different domains (e.g., iframes).
ii)Working with third-party services or APIs that require cross-origin requests.
### 15.what is retries
retries refer to the ability to automatically rerun failed tests or commands a specified number of times before ultimately marking them as failed. This feature is particularly useful for dealing with flaky tests that may fail due to intermittent issues, such as timing problems or network instability.
cypress.config.js
module.exports = {
  e2e: {
    retries: {
      runMode: 2,   // Number of retries when running tests in "run" mode
      openMode: 0   // Number of retries when running tests in "open" mode
    }
  }
}
usage:-
describe('My Test Suite', { retries: 2 }, () => {
  it('should do something flaky', () => {
    // Test code here
  });
});
### 16.How you store some value one method and reuse in next method in cypress?
i)Using Cypress Aliases
describe('Store and Reuse Values', () => {
  it('should store a value and reuse it', () => {
    // Store a value using an alias
    cy.get('.some-element').invoke('text').as('storedValue');

    // Reuse the stored value
    cy.get('@storedValue').then((value) => {
      cy.log(value); // You can use the value here
    });
  });
});
ii)Using Cypress Commands
// In cypress/support/commands.js
Cypress.Commands.add('storeValue', (value) => {
  cy.wrap(value).as('myValue');
});

// In your test file
describe('Custom Command Example', () => {
  it('should store and reuse a value', () => {
    // Store a value
    cy.storeValue('Hello, World!');

    // Reuse the stored value
    cy.get('@myValue').then((value) => {
      cy.log(value); // Logs "Hello, World!"
    });
  });
});
iii)Using let or const Variables
describe('Variable Scope Example', () => {
  let myValue; // Declare a variable

  it('should store a value', () => {
    cy.get('.some-element').invoke('text').then((text) => {
      myValue = text; // Assign the value
    });
  });

  it('should reuse the value', () => {
    cy.log(myValue); // Logs the stored value
  });
});
iV)Using Local Storage or Session Storage
describe('Storage Example', () => {
  it('should store a value in localStorage', () => {
    const myValue = 'Hello, World!';
    window.localStorage.setItem('myKey', myValue); // Store in localStorage
  });

  it('should retrieve the value from localStorage', () => {
    cy.window().then((win) => {
      const value = win.localStorage.getItem('myKey');
      cy.log(value); // Logs "Hello, World!"
    });
  });
});
### 17.How to read the value from the Cypress Configuration file?
cypress.config.js
// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'https://example.com',
    env: {
      apiUrl: 'https://api.example.com',
    },
  },
};
i)Accessing Configuration in Tests
describe('Access Configuration Values', () => {
  it('should read a config value', () => {
    const baseUrl = Cypress.config('baseUrl'); // Replace 'baseUrl' with your config key
    cy.log(baseUrl); // Logs the base URL defined in the config
  });
});
ii)Using Environment Variables:- set configuration values via environment variables, you can access them using Cypress.env()
describe('Access Environment Variables', () => {
  it('should read an environment variable', () => {
    const apiUrl = Cypress.env('apiUrl'); // Access the environment variable
    cy.log(apiUrl); // Logs the API URL
  });
});
### 18.How can I change the baseUrl in Cypress dynamically?
npx cypress run --config baseUrl=https://example.com/
### 19.How to interact with DOM elements in Cypress?
A)Selecting Elements Using Selectors
  i)cy.get('.my-class') // Selects elements with the class 'my-class'
  ii)cy.get('#my-id') // Selects the element with ID 'my-id'
  iii)cy.get('[data-test="my-data-attribute"]') // Selects by custom data attribute
B)Interacting with Elements
  i)Clicking:
  cy.get('.my-button').click() // Clicks on the button
  ii)Typing:
  cy.get('input[name="username"]').type('myUsername') // Types into an input field
  iii)Clearing:
  cy.get('input[name="username"]').clear() // Clears the input field
  iV)Checking/Unchecking Checkboxes:
  cy.get('input[type="checkbox"]').check() // Checks the checkbox
  cy.get('input[type="checkbox"]').uncheck() // Unchecks the checkbox
  V)Selecting from Dropdowns:
    cy.get('select').select('Option 1') // Selects an option from a dropdown
### 20.How to use XPath in Cypress?
A)cypress-xpath plugin → npm install -D cypress --xpath
B)test.js: require(‘cypress-xpath’) // applicable for all tests or individually in each spec file
C)cy.xpath(“//ul[@id=’homefeatured’]/li”).should(‘have.length’,7)
### 21.How is the test data maintained in Cypress?
A)Using Fixtures
B)Environment Variables
C)Using Local Storage or Session Storage
### 22.How to execute tests in order in Cypress?
In your cypress/e2e folder create a file named tests-in-order.cy.js and inside it import the tests in the order you want them to execute like this:
  import './1test.cy.js'
  import './2test.cy.js'
  import './3test.cy.js'
  npx cypress run --spec "cypress/e2e/tests-in-order.cy.js" 
### 23.Delay in cy
cy.get("textarea#box").type("Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.",{ delay: 100 }); })  
### 24.Writing to the file
cy.writeFile('path/to/message.txt', 'Hello World')
### 25.Case insensitive match in cy
cy.contains('hello', { matchCase: false }).should('be.visible');
### 26.Key board events 
A)cy.get('input[name="username"]').type('Hello{enter}');
B)cy.get('input[name="username"]').type('{shift}{tab}');
C)cy.get('input[name="username"]').type('{ctrl}s'); //Ctrl + S (Save)
### 27.Screenshot capturing in cy
cy.screenshot('clicking-on-nav')//Giving name
cy.screenshot('')//save file with the testcase/it block name
