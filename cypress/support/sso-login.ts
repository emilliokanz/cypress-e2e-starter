export const loginSso = (username: string, password: string) => {
    const ssoUrl = Cypress.env('sso_url')
    const credentials = {_username: username, _password: password}

    cy.visit('/')
    cy.origin(ssoUrl, {args: credentials}, (credentials) => {
      cy.get('#username').type(credentials._username)
      cy.get('#password').type(credentials._password)
      cy.get('[name="login"]').click()
    })
  }