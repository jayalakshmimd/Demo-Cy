describe("test Table",()=>{
    before("visit",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html")
    })
    it("TC01-test table data",()=>{
       
        const data = [{"name" : "Bob", "age" : 20}, {"name": "George", "age" : 42}, {"name" : "Mike", "age" : 23}, {"name" : "Michele", "age" : 25}, {"name" : "John", "age" : 27}]
        const dataString = JSON.stringify(data)
        console.log("datastring",dataString)
        cy.log("data0",data[0])
        cy.get('summary').contains('Table Data').click()
        cy.get('[id="jsondata"]').clear().type(dataString,{ parseSpecialCharSequences: false })
        cy.get('#refreshtable').click()
        cy.get('#dynamictable > tr:nth-child(3)>td:nth-child(1)').should('have.text',data[0].name)
        cy.get('#dynamictable > tr>td:nth-child(1)').each(($text,index)=>{
            cy.log($text)
            cy.wrap($text).should('have.text',data[index].name)
        })
        cy.get('#dynamictable > tr> td:nth-child(2)').each(($text,index)=>{
            cy.wrap($text).should('have.text',data[index].age)
        })
    })
    
})