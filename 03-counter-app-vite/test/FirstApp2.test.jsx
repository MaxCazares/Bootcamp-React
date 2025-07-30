import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en el componente FirstApp', () => {

    const name = 'Lau'
    const title = `${name}'s First App`

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp />)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el nombre en un h2', () => {
        render(<FirstApp title={name} />)
        // screen.debug()

        expect(screen.getByText(title)).toBeTruthy()
        expect(screen.getByTestId('test-title').innerHTML).toContain(title)
    })

    test('verificar el factorial', () => {
        const n = 5
        let factorial = 1

        for (let i = 1; i <= n; i++) 
            factorial *= i;    
        
        render(<FirstApp factorial={n} />)
        expect(screen.getByText(factorial).innerHTML).toContain(factorial.toString())
    })

})