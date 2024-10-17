/// <refence type=cypress/>
describe("letcode website",()=>{
    it("ex-01 select handling",()=>{
        cy.visit("https://letcode.in/dropdowns")
        cy.get('[id="fruits"]').select('Apple')
        cy.get('[id="fruits"]').within(()=>{
            cy.get('option').each((e)=>{
                cy.log(e.text())
            })
            // .invoke("text").then((text)=>{
            //     cy.log("**** ",text)
            // })
        })
        let superheros = ""
        cy.get('[id="superheros"]').within((ele)=>{
            cy.log("eeee",ele)
            cy.get('option').each((hero)=>{
                if(hero.text()==="Ant-Man"){
                    superheros = hero.text()
                }
            })
        }).then(()=>{
            cy.get('[id="superheros"]').select(superheros)
        })
    })
})