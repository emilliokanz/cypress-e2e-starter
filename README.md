# Cypress e2e startedr

This template should help get you started testing external Applications

## Project Setup

### Environment Variables

create .env file to setup base url and sso url

```sh
APP_URL=
KEYCLOAK_URL=
```

### Install dependencies

```sh
npm install
```

### Run test

Select and run specs through the Cypress Dashboard 
```sh
npm run cypress:open
```

Runs all specs and generate video evidence. Video folder will be automatically made
```sh
npm run cypress:run
```

## SSO Login Test
Use the cy.loginSso(username: string, password: string) command to access base app and login with the configured SSO

