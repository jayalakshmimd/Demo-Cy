describe("Scenaio 1-->add item",()=>{
    before("visit page",()=>{
    cy.visit("https://demowebshop.tricentis.com/")
    })
    it("Select item book",()=>{
    cy.get('a[href="/books"]').last().click()
    cy.get(' div:nth-child(1) > div > div.details > div.add-info > div.buttons > input').click()
    cy.get('a[href="/cart"]').first().trigger("mouseover")
    //cy.contains("Shopping cart").scrollIntoView().click()
    cy.get("div.product > div.price > span").within((text)=>{
        cy.log(text.text())
    })
      //cy.get(`[name="checkout"]`).click()
    })
    })