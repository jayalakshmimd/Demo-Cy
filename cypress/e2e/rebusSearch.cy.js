describe("TS 1--->Search the location",()=>{
before("visiting the page",()=>{
    cy.visit("https://www.redbus.com/")
})
it("Search the location",()=>{
    cy.get(`#src`).type("bng", {force: true})
    cy.get(`div > li:nth-child(1) > div > li`).each(($ele)=>{
cy.log($ele.text())
    })
    cy.get(`div > li:nth-child(1) > div > li`).contains("Marathahalli, Bangalore, Karnataka, India").click()
    cy.get(`#src`).should("have.value","Marathahalli, Bangalore, Karnataka, India")
})
})