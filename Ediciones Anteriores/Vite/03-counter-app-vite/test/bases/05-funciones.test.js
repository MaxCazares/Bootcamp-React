const { getUser, getUsuarioActivo } = require("../../src/bases/05-funciones")

describe('pruebas en 05-funciones', () => {
    test('getUser', () => {

        const testUser = {
            uid: 'abc123',
            username: 'El hdsptm'
        }

        const user = getUser()

        expect(testUser).toEqual(user)
    })

    test('getUsuarioActivo debe de ser un objeto', () => {
        const name = 'Max'
        const testUsuarioActivo = {
            uid: 'abc567',
            username: name
        }
        const usuarioActivo = getUsuarioActivo(name)

        expect(testUsuarioActivo).toEqual(usuarioActivo)

    })

})