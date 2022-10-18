describe("Newsletter Subscribe Form", ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    it("allows users to subscribe to the email list", ()=> {
        cy.getByData("email-input").type("bob@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("bob@aol.com")
    })
    it('does NOT allow an invalid email address', ()=>{
        cy.getByData("email-input").type("bob")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("does NOT allow users to sign up TWICE", ()=> {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com")
        
    })
})