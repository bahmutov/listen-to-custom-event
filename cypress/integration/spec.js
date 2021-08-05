/// <reference types="cypress" />

it('sends an event', () => {
  cy.visit('/')
  cy.document().invoke('addEventListener', 'loading', cy.stub().as('loading'))
  // on load the app should have sent an event
  cy.get('@loading')
    .should('have.been.calledOnce')
    .its('firstCall.args.0.detail')
    .should('deep.equal', {
      message: 'Loading...',
    })
})
