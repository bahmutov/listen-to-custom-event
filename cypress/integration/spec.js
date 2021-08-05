/// <reference types="cypress" />

it('sends an event to the document', () => {
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

it('sends an event to the ref component', () => {
  cy.visit('/')
  cy.get('[data-cy=ref]').invoke('on', 'clicked', cy.stub().as('clicked'))
  cy.get('button').click().click()
  cy.get('@clicked').should('have.been.calledTwice')
})
