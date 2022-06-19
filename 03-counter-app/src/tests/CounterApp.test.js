import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas a <CounterApp/>', () => {
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {

        wrapper = shallow(<CounterApp />);

    });
    
    test('Debe mostrar <CounterApp/> correctamente', () => {
            
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100', () => {

        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);

        const valorParrafo = parseInt(wrapper.find('h2').text());

        expect(valorParrafo).toBe(value);

    });

    test('Debe incrementar el contador', () => {
        
        const valor = 11;
        wrapper.find('button').at(0).simulate('click');
        const valorParrafo = parseInt(wrapper.find('h2').text());
        expect(valorParrafo).toBe(valor);

    });

    test('Debe decrementar el contador', () => {
        
        const valor = 9;
        wrapper.find('button').at(2).simulate('click');
        const valorParrafo = parseInt(wrapper.find('h2').text());
        expect(valorParrafo).toBe(valor);

    });

    test('Debe colocar el valor por defecto con el bontn de reset', () => {
    
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valorParrafo = parseInt(wrapper.find('h2').text());
        expect(valorParrafo).toBe(value);

    });    

});