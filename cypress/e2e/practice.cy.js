describe("Dynamic Table",()=>{
    let inputData=[{"name":"Arun","age":29},{"name":"Rachana","age":28},{"name":"Jaya","age":30}]

    before(()=>{
cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html")
cy.contains("Table Data").click()
cy.get("#jsondata").clear()
cy.get("#jsondata").type(JSON.stringify(inputData),{ parseSpecialCharSequences: false, force: true })
cy.get(".styled-click-button").click()
    })
it("Tc->01,Checking Caption",()=>{

cy.get("#dynamictable").find("caption").should('exist').then((ele)=>{
    expect(ele.text()).contains("Dynamic Table")
}) 

})
it("Tc->02,Checking Table Header",()=>{
cy.get("#dynamictable>tr:nth-child(2)>th:nth-child(1)").should('have.text',"name")
cy.get("#dynamictable>tr:nth-child(2)>th:nth-child(2)").should('have.text',"age")
})
it("Tc->03,Checking if names are entered properly",()=>{
        cy.get("#dynamictable>tr>td:nth-child(1)").each(($ele,index)=>{
cy.wrap($ele).should("have.text",inputData[index].name)//using wrap
        })
    })
        it("Tc->04,Checking if age are entered properly",()=>{
            cy.get("#dynamictable>tr>td:nth-child(2)").each(($ele,index)=>{
                let age=$ele.text()//using text and assigning extracted value
    expect(age).contains(inputData[index].age)
            })
   
})
})