const { faker } = require("@faker-js/faker")
import loginfixture from '../../../fixtures/login.json'
import loginfixture2 from '../../../fixtures/login2.json'

describe('Login', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = faker.internet.password({ length: 6 })
    let id
    const bodycreatedUser = {
        email: email,
        password: password
    }
    context('Login sucessfully scenarios', () => {
        before(() => {
            cy.createUser(name, email, password).then((response) => {
                id = response.body._id
            })
        })
        it('Login should be sucess', () => {
            cy.genericPost('/login', '', bodycreatedUser).then(response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.message).to.be.eq('Login realizado com sucesso')
                expect(response.body.authorization).to.be.not.null
            })
        })
        after(() => {
            cy.deleteUsers(id)
        })
    })
    context('Login unsucesss scenarios', () => {
        it('User does not exist', () => {
            cy.genericPost('/login', '', loginfixture)
                .then(response => {
                    expect(response.status).to.be.eq(401)
                    expect(response.body.message).to.be.eq('Email e/ou senha inválidos')
                })
        })
        it('trying to log-in without email', () => {
            cy.genericPost('/login', '',loginfixture2)
                .then(response => {
                    expect(response.status).to.be.eq(400)
                    expect(response.body.email).to.be.eq('email é obrigatório')
                })
        })
    })
})