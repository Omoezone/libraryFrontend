
describe('use the book filter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('the filter is used to find a specific book correctly', () => {
        
    })

    it('the tags are used to find a specific book correctly', () => {
        cy.get('.chakra-button.css-1jw7goo:contains("Fantasy")').click();
        cy.wait(5000)   
    })
})

// Etc, etc

