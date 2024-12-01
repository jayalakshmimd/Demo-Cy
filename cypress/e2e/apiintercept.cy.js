describe("API intercept test",()=>{
    it("Get method",()=>{
        cy.visit("https://dummyapi.io/explorer")
        cy.intercept({
            method:"GET",
            url:"/data/v1/post?limit=10"
        }).as("userList")
       // cy.intercept('GET', '/data/v1/post?limit=10').as("userList")
        cy.contains("Posts List").click()
        cy.wait("@userList",{timeout:7000}).then((res)=>{
            //cy.log(JSON.stringify(res.response.body.data.length))
            expect(res.response.body.data.length).to.equal(10)
        })
    })
})