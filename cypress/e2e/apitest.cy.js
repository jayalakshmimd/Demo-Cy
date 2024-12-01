//1. Verify that the API response status code is 200 OK.
//2. Verify that the API response is in the expected format (e.g. JSON, XML).
//3. Verify that the API response contains all the expected fields.
//4. Verify that the API response contains the correct data for each field.
//5. Verify that the API response time is within acceptable limits.
//6. Verify that the API request parameters are correctly passed to the API.
//7. Verify that the API request method is correct(e.g. GET, POST, PUT, DELETE).
//8. Verify that the API endpoint URL is correct.
//9. Verify that the API response headers are correct.
//10. Verify that the API returns an error message if the request payload is missing.
//11. Verify that the API returns an error message if the requested resource does not exist.
//12. Verify that the API returns a success message if the resource is created successfully.
//13. Verify that the API returns a success message if the resource is updated successfully.
//14. Verify that the API returns a success message if the resource is deleted successfully.
//15. Verify that the API returns a success message if the resource is retrieved successfully.
/*Status Codes:

*/
//https://jsonplaceholder.typicode.com/
//https://www.eviltester.com/
describe("Get Requests",()=>{

    it("Test Case 1--->Get Method(1 data)",()=>{
cy.request({
    method:"GET",
    url:"https://jsonplaceholder.typicode.com/posts/1"


}).then((res)=>{
    expect(res.status).to.equal(200)//status code
    expect(res.body).to.haveOwnProperty("userId")//checking for key
    expect(res.body).to.have.property("id",1)//checking for value
// cy.log(res)
})
    })
    it("Test Case 2--->Get Method(All data)",()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts"
        
        
        }).then((res)=>{
            expect(res.status).to.equal(200)//status code
          expect(res.body).have.length(100)
          expect(res.duration).to.be.lessThan(200); // Assert response time is less than 200 ms
          expect(res.body).to.be.an('array')
        // cy.log(res)
        })
            })
            it("Test Case 3--->Get Method(query params)",()=>{
                cy.request({
                    method:"GET",
                    url:"https://jsonplaceholder.typicode.com/comments",
                    qs:{
                        "postId":1
//Multiple              "postId":2      https://jsonplaceholder.typicode.com/comments?postId=2&postId=1
                    }
                
                
                }).then((res)=>{
                   
                 expect(res.body).have.length(5)
               
                 //cy.log(res.body.length)
                })
                    })
})

describe("Post Requests",()=>{

    it("Test Case 3--->Post Method(1 data)",()=>{
        cy.request({
            method: 'POST',
            url: '/api/endpoint',
            body: {
                key1: 'value1',
                key2: 'value2'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            // Handle the response
            expect(response.status).to.eq(201);
        });
        
    })
})
//module.exports = defineConfig({
  //  env: {
   //     apiToken: process.env.API_TOKEN
   //   },
   // });