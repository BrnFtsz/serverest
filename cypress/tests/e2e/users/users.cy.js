const { faker } = require("@faker-js/faker")

import usersPage from "../../../pages/users/users"
let textfromList
describe('Users', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('should be possible register new user', () => {
        cy.loginFront()
        cy.get(usersPage.newUsers).click()
        cy.get(usersPage.nameInput).type(faker.person.fullName())
        cy.get(usersPage.emailInput).type(faker.internet.email())
        cy.get(usersPage.passwordInput).type(faker.internet.password())
        cy.get(usersPage.checkbox).click()
        cy.get(usersPage.registerButton).click()
        cy.get(usersPage.title).invoke('text').should('be.eq','Lista dos usuários')

    })
    it('trying to register new user without info a email', () => {
        cy.loginFront()
        cy.get(usersPage.newUsers).click()
        cy.get(usersPage.emailInput).type(faker.internet.email())
        cy.get(usersPage.passwordInput).type(faker.internet.password())
        cy.get(usersPage.checkbox).click()
        cy.get(usersPage.registerButton).click()
        cy.get(usersPage.alert).invoke('text').should('be.eq','×Nome é obrigatório')
    })
    it('trying to register new user without info a name', () => {
        cy.loginFront()
        cy.get(usersPage.newUsers).click()
        cy.get(usersPage.nameInput).type(faker.person.fullName())
        cy.get(usersPage.passwordInput).type(faker.internet.password())
        cy.get(usersPage.checkbox).click()
        cy.get(usersPage.registerButton).click()
        cy.get(usersPage.alert).invoke('text').should('be.eq','×Email é obrigatório')
    })
})

