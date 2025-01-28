const { faker } = require("@faker-js/faker")
const name = faker.person.fullName(), email = faker.internet.email(), password = faker.internet.password()
import loginPage from "../../../pages/login/login"

describe('Login', () => {
let id
    beforeEach(() => {
        cy.visit('')
    })
    context('Login sucessfully scenarios', () => {
        before(() => {
            cy.createUser(name, email, password).then((response) => {
                id = response.body._id
            })
        })
        it('Login should be sucess', () => {
            cy.get(loginPage.emailInput).type(email)
            cy.get(loginPage.passwordInput).type(password)
            cy.get(loginPage.buttonEntrar).click()
            cy.get(loginPage.tittle).contains('Bem Vindo').invoke('text').should('be.eq','Bem Vindo  '+ name )
        })
    })
    context('uncess scenarios on login suite', ()=> {
        it('Trying to log-in with wrong password', () => {
            cy.get(loginPage.emailInput).type(email)
            cy.get(loginPage.passwordInput).type(123456)
            cy.get(loginPage.buttonEntrar).click()
            cy.get(loginPage.alert).contains('Email e/ou senha').invoke('text').should('be.eq','Email e/ou senha inválidos')
        })
        it('Trying to log-in witout email info', () => {
            cy.get(loginPage.passwordInput).type(123456)
            cy.get(loginPage.buttonEntrar).click()
            cy.get(loginPage.alert).contains('Email').invoke('text').should('be.eq','Email é obrigatório')
        })
    })
    after(() => {
        cy.deleteUsers(id)
    })
})
