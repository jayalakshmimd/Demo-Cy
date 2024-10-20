
class homePage{
    elements ={
        loginBtn : () => cy.get("#signin"),
        logOffBtn : () => cy.get("#logout")
    }
    clickOnSignin(){
        this.elements.loginBtn().click()
    }
}
module.exports = new homePage();
//to call in test file
import homePage from "../../pages/homePage"
homePage.clickOnSignin();