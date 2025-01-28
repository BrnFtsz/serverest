
const { faker } = require("@faker-js/faker")

import loginPage from "../pages/login/login"

Cypress.Commands.add('createUser', (name, email, password) => {
    cy.request({
        url: 'https://serverest.dev/usuarios',
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'accept': 'application/json',
        },
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: 'true'
        }
    })
})

Cypress.Commands.add('deleteUsers', (id) => {
    cy.request({
        url: 'https://serverest.dev/usuarios/' + id,
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'accept': 'application/json',
        },
    })
})

Cypress.Commands.add('genericPost', (endpoint, authorization = '', body) => {
    cy.request({
        url: 'https://serverest.dev' + endpoint,
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'accept': 'application/json',
            'Authorization': authorization
        },
        body: body,
        failOnStatusCode: false
    })
})
Cypress.Commands.add('genericGet', (endpoint, authorization = '', valorparams = '', query = '') => {
    cy.request({
        url: 'https://serverest.dev' + endpoint + query,
        qs: {
            _id: valorparams
        },
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'accept': 'application/json',
            'Authorization': authorization
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('loginFront', () => {
    const name = faker.person.fullName(), email = faker.internet.email(), password = faker.internet.password()
    cy.createUser(name, email, password)
    cy.get(loginPage.emailInput).type(email)
    cy.get(loginPage.passwordInput).type(password)
    cy.get(loginPage.buttonEntrar).click()
})