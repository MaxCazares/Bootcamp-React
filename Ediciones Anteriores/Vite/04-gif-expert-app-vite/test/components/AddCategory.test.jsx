import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    const busqueda = 'Naruto'

    test('Debe de cambiarl el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: busqueda}})
        // screen.debug()
        expect(input.value).toBe(busqueda)
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: busqueda}})
        fireEvent.submit(form)        
        // screen.debug()
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(busqueda)
    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const form = screen.getByRole('form')
        fireEvent.submit(form)    
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()

    })
})