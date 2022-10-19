describe("User Journey", ()=> {
    it("a user can find a course on the home page and complete the courses lessons", ()=>{
        cy.visit("http://localhost:3000")
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
    })
})