describe('API TESTING 1', ()=>{

	it('Index page visit', ()=>{
cy.visit("https://testpages.eviltester.com/")
cy.request({
    method:"Post",
    url:"https://plausible.io/api/event",
    body:{"n":"pageview","u":"https://testpages.eviltester.com/styled/index.html","d":"testpages.eviltester.com","r":"https://testpages.eviltester.com/styled/page?app=testpages&t=Others"}
}).then((res)=>{
    cy.log(res)
    cy.writeFile("cypress/fixtures/test.json",{"jaya":res.body})

    })
})
})