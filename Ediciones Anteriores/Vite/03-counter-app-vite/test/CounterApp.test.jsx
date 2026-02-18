import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const value = 100

    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={value}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el valor inicial de 100', () => {        
        render(<CounterApp value={value}/>)
        expect(screen.getByTestId('test-counter').innerHTML).toContain(value.toString())
        expect(screen.getByText(value)).toBeTruthy() 
    })

    test('debe de incrementar con el boton de +1', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(value + 1)).toBeTruthy()

    })

    test('debe de incrementar con el boton de -1', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(value - 1)).toBeTruthy()

    })

    test('debe de funcionar el boton de reset', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByRole('button', {name: 'btn-increase'}))
        fireEvent.click(screen.getByRole('button', {name: 'btn-decrease'}))
        fireEvent.click(screen.getByRole('button', {name: 'btn-increase'}))
        fireEvent.click(screen.getByRole('button', {name: 'btn-decrease'}))
        fireEvent.click(screen.getByRole('button', {name: 'btn-decrease'}))
        screen.debug()
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        expect(screen.getByTestId('test-counter').innerHTML).toBe(value.toString())

    })
})