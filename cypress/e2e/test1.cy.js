describe('template spec', () => {
  it('passes', () => {
    describe('License Country Code and License Number', () => {
      it('should display the correct license number', () => {
        // Visit the page (replace with your own URL)
        cy.visit('file:///C:/Users/Welcome/OneDrive/Desktop/Automation(J)/Automation/test.html');
    
        // Assert that the combined text matches "NLRJ-864-B"
        cy.get('[data-testid="license-country-code"]')
          .should('exist')
          .then(($element) => {
            const countryCode = $element.find('span').text();  // Get the country code
            const licenseNumber = $element.find('.number').text();  // Get the license number part
    
            // Combine the country code with the license number and compare to "NLRJ-864-B"
            const fullLicenseText = countryCode + licenseNumber;
            expect(fullLicenseText).to.equal('NLRJ-864-B');
          });
      });
    });
    
  })
})