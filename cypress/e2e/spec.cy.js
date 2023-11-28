describe('My primera prueba', () => {
  it('Visitando nuestra página', () => {
    cy.visit('http://localhost:8100')

    cy.contains('type').click()
  })
})