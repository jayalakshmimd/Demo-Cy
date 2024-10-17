/*Report Generation
1.Install plugins
npm i --save-dev cypress-mochawesome-reporter
2.Add below line in cypress.config.js
reporter: 'cypress-mochawesome-reporter',
require('cypress-mochawesome-reporter/register/plugin')(on);
3.add below line incypress/support/e2e.js
import 'cypress-mochawesome-reporter/register';
4.Execute test
npx cypress run --browser chrome --headed --spec "cypress\e2e\ReportingTests\*.cy.js"
5.HTML report
the HTML report will be generated in the cypress/reports/HTML folder
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/