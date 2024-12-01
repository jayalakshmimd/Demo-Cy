
1)Tool tip automation



Cypress.add(“validateToolTip”,()

Cy.trigger(“mouseDown”)

Cy.get(“source”).drag(“dest”)


Function waitingForEle(){
Return Cy.get(“selector”).to.be(visible)
}
Cy.waitUntil(waitingForEle)

let x = false;
let y = "0";
let z = 0;
console.log(x == y);//true
console.log(x === z);//false
 
let a;
if(true) {       
  let a=10;              
console.log(a)//10
 }
console.log(a)//Undefined
 

<div data-testid="license-country-code" required class="country eu"><span>NL</span>
<div class="number"><div class="letter">R</div><div class="letter">J</div><div class="stripe">-</div><div class="letter">8</div><div class="letter">6</div><div class="letter">4</div><div class="stripe">-</div><div class="letter">B</div></div></div>

Assertion to See if text holds

NLRJ-864-B
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



https://testautomationpractice.blogspot.com/