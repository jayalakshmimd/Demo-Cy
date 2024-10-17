// Scroll the element into view and click it
cy.get('element-selector').scrollIntoView().click();
// Scroll a specific element 500px down
cy.get('element-selector').scrollTo(0, 500);

// Scroll the element to the top
cy.get('element-selector').scrollTo('top');

// Scroll the element to the bottom
cy.get('element-selector').scrollTo('bottom');
//>>>>>Time out<<<<<<
//Changing default settings(inside cypress.config.js)
cy.wait(5000);//waiting a fixed period of time
cy.wait('@getData'); // Wait for the alias "getData" to complete
cy.get('.button', { timeout: 10000 }); // Wait up to 10 seconds for the element


