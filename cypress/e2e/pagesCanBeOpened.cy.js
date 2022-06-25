/* eslint-disable no-undef */
describe('React Node Template', function () {
  it('Front page can be opened', function () {
    cy.visit('http://localhost:3001')
    cy.contains('React Node Template')
    cy.contains('with mobile responsive navbar')
  })
  it('Navbar can be used to navigate', function () {
    cy.visit('http://localhost:3001')
    cy.get('#firstOption').click()
    cy.contains('First Option')
  })
})