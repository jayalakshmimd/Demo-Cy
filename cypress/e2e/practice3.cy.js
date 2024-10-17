describe("Testing Dropdown",()=>{
    before("visit",()=>{
cy.visit("https://letcode.in/dropdowns")
cy.clearAllCookies()
    })
    it("Test Case 1--->selecting Mango from the drop down",()=>{
cy.get("#fruits").select("Mango")
cy.get(".subtitle").should("have.text","You have selected Mango")
    })
    it.only("Test Case 2--->validating the fruits list",()=>{
        let fruits=["Apple","Mango","Orange","Banana","Pine Apple"]
        cy.get("#fruits").within(()=>{
            cy.get("option").each($ele,()=>{
cy.wrap($ele).includes(fruits)
let fruit=$ele.text
cy.log("Fruit",fruit)
expect(fruits).to.include(fruit)
            })
        })
    })
})