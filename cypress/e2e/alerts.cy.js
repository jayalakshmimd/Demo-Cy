/*Alerts:
Cypress will automatically close alerts. But to do validation, we have to do it programmatically using events. 

it.only executes only that test case and not other test cases in the describe test suite.*/
describe('Alerts', ()=>{
	// 1. JavaScript Alert: It will have some text and an 'OK' button.
	it('JS Alert', ()=>{
		cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
		cy.get("button[onclick='jsAlert()']").click();
	    
        // validating text on Alert window
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
	
        // alert window automatically closed by cypress
        // after closing, validate alert window
        cy.get("#result").should('have.text','You successfully clicked an alert')
	})
	
    // 2. JavaScript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons.
    it('JS Confirm', ()=>{
		cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
		
        // default cypress closes with OK automatically.
        // to close alert clicking Cancel button:
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        // true here means cypress closes using default ok
        // to click using cancel use false
        cy.on('window:confirm',()=> false); 
	
        // alert window automatically closed by cypress
        // after closing, validate alert window
        cy.get('#result').should('have.text','You clicked: Cancel')

	})
	// 3. JavaScript Prompt Alert: It will have some text with a text box for user input along with 'OK' button.
    // provide text and OK(1event) (OR) provide text and click Cancel (2events)
    // before opening alert, we have to pass text in input box
    // cypress closes by default clicking ok button
    it('JS prompt alert', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then( (win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();
        
        //validate for ok button automatically closed by cypress
        //cy.get("#result").should('have.text', 'You entered: welcome');
        
        cy.on('window:prompt',()=>false);
        // validate for cancel button
        cy.get("#result").should('have.text', 'You entered: welcome');
    }) 

	// 4. Authenticated Alert
    it('Authenticated Alert', ()=>{
        // pass username password, as parameters in visit method, to skip alert window
        cy.visit('http://the-internet.herokuapp.com/basic_auth', {auth: {username:"admin", password:"admin"}});
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")

    
        // pass username password,  along with URL
        cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    })
})
