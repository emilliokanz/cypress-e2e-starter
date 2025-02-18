describe('Login into Base App through SSO and redirect to Base App', () => {
    it('Access Base App, login through SSO, redirects to Base App', () => {
      cy.loginSso('DummyHRIS02', 'Allo1234')
    })
  })
  