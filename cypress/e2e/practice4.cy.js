

describe("Test Automation Practice",()=>{
before("Visiting the page",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
})
it.skip("Test Case 1--->Testing Table Content",()=>{
   let rowCount=0
cy.get(`table[name="BookTable"]`).find("tr>td:nth-child(1)").each(($ele,index)=>{
    rowCount+=1
    if($ele.text()=="Master In JS")
       {cy.get(`table[name="BookTable"]`).find(`tr>td:nth-child(3)`).eq(index).then((item)=>{
        cy.wrap(item.text()).should("equal","Javascript")
    })
}
       }).then(()=>{
        expect(rowCount,"Total Records").to.equal(6)
       })
     
      
})
it.skip("Testing Radio Button",()=>{
    cy.get(`[type="radio"]`).check("female").should("be.checked")
    cy.get("#female").siblings().should("not.be.checked")
})
it.skip("Test Case 2--->Testing Check Box",()=>{
   cy.get(`[class="form-check form-check-inline"]`).find(`[type="checkbox"]`).check(["monday","friday"]).should("be.checked")
   cy.get(`[class="form-check form-check-inline"]`).find(`[type="checkbox"]`).not(`[value="monday"],[value="friday"]`).should("not.be.checked")
   cy.get(`[class="form-check form-check-inline"]`).find(`[type="checkbox"]`).uncheck("monday").should("not.be.checked")
})
it("Test Case 3--->Testing the list box",()=>{
cy.get("#colors").select("white")
cy.get("#colors").find(`option[value="white"]`).should("be.selected")
cy.get("#colors").find(`option[value="white"]`).invoke('val').as('color');
cy.get("@color").then((col)=>{
    expect(col).equal("white")
  
})
cy.get("#colors").find(`option[value="white"]`).contains("White")
cy.get("#colors").find(`option[value="white"]`).contains("WHite",{matchCase:false})
cy.get("#colors").find(`option[value="white"]`).siblings().should("not.be.selected")
cy.get("#colors").select("red")
cy.get("#colors").find(`option[value="white"]`).should("not.be.selected")
})
})
