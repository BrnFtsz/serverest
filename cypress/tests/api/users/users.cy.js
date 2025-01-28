const { faker } = require("@faker-js/faker")

describe('Users', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = faker.internet.password({ length: 6 })
    let id
    const bodycreatedUser = {
        email: email,
        password: password
    }
    context('create a user and search for him', () => {
        before(() => {
            cy.createUser(name, email, password).then((response) => {
                id = response.body._id
            })
        })
        it('search for users should be sucessfull', () => {
            cy.genericGet('/usuarios', '','',"/"+id).then(response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.nome).to.be.eq(name)
                expect(response.body.email).to.be.eq(email)
                expect(response.body.password).to.be.eq(password)
                expect(response.body.administrador).to.be.eq('true')
                expect(response.body._id).to.be.not.null
            })
        })
        after('Delete him after the test',() => {
            cy.deleteUsers(id)
        })
    })
    context('search for users on a diff endpoint', ()=>{
        before(() => {
            cy.createUser(name, email, password).then((response) => {
                id = response.body._id
            })
        })
        it('search for users should be sucessfull', () => {
            cy.genericGet('/usuarios','',id,'').then(response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.quantidade).to.be.not.null
            })
        })

        after('Delete him after the test',() => {
            cy.deleteUsers(id)
        })
    })
    context('Delete some user', ()=>{
        before(() => {
            cy.createUser(name, email, password).then((response) => {
                id = response.body._id
            })
        })
        it('User has to be deleted sucessfully', () => {
            cy.deleteUsers(id).then(response =>{
                expect(response.status).to.be.eq(200)
                expect(response.body.message).to.be.eq('Registro excluído com sucesso')
            })
            })
    })
    
})