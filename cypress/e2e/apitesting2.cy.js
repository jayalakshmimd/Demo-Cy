import {jaya} from '../fixtures/test.json'

describe('API TESTING 2', ()=>{

	it('Index page visit', ()=>{

cy.request({
    method:"Post",
    url:"https://plausible.io/api/event",
    body:{"n":"pageview","u":"https://testpages.eviltester.com/styled/page?app=testpages&t=About","d":"testpages.eviltester.com","r":"https://testpages.eviltester.com/styled/page?app=testpages&t=Others"},
}).then((res)=>{
    cy.log("jaya" ,jaya)

    })
})
})