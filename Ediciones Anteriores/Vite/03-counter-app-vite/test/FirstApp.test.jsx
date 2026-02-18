import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en el componente FirstApp', () => {
    // test('Debe de hacer match con el snapshot', () => {

    //     const { container } = render(<FirstApp />)
    //     expect(container).toMatchSnapshot()

    // })

    test('Debe de mostrar el nombre en un h2', () => {

        const name = 'Lau'
        const title = `${name}'s First App`
        const { container, getByText, getByTestId } = render(<FirstApp title={name} />)

        expect(getByText(title)).toBeTruthy()

        // const h2 = container.querySelector('h2')
        // expect(h2.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('verificar el factorial', () => {
        const n = 5
        let factorial = 1

        for (let i = 1; i <= n; i++) 
            factorial *= i;    
        
        const { getByText } = render(<FirstApp factorial={n} />)
        
        expect(getByText(factorial).innerHTML).toContain(factorial.toString())
    })

})