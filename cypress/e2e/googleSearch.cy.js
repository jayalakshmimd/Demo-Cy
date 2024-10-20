describe("Ts 1-->Testing Search", () => {
    before("visiting a page", () => {
      cy.visit("https://www.google.com/");
    });
  
    it("Tc 1->Test Navigation", () => {

      cy.get(".gLFyf").type("Ratan Tata {enter}");
  
      const pageNav = () => {
        cy.wait(2000); 
        cy.get("body").then(($body) => {
          if ($body.find("#pnnext").length > 0) {
            cy.get("#pnnext").click();
            cy.log('Navigating to next page');
            pageNav();
          } else {
            cy.log("This is the last page");
          }
        });
      };
  
      pageNav(); 
    });
  });
  