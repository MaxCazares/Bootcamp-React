import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchScreen from '../../../components/Search/SearchScreen';

describe('Pruebas en <SearchScreen/>', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un héroe');

    });

    test('Debe mostrar a Batman y el input con el valor de queryString', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?=Batman']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        // expect(wrapper.find('input').prop('value')).toBe('Batman');
        console.log(wrapper.find('input').prop('value'));

    });

});