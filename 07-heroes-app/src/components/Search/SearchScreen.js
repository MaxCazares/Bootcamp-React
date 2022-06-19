import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import getHeroesByName from '../../selectors/getHeroesByName';
import HeroCard from '../Heroes/HeroCard';
import { useMemo } from 'react';

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [values, handleInputchange] = useForm({
        searchText: q
    });

    const {searchText} = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = e => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <div className='container mt-5'>
            <h1>Búsquedas</h1>
            <hr/>
            <div className='row'> 
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr/>
                    <form className='d-grid gap-2' onSubmit={handleSearch}>
                        <input 
                            type='text' 
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputchange}
                        />
                        <button 
                            type='submit' 
                            className='btn btn-outline-warning mt-1'>
                            Buscar
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        (q === '') 
                            ? <div className='alert alert-info'>Buscar un héroe</div>
                            : (heroesFiltered.length === 0) 
                                && <div className='alert alert-danger'>No hay resultados</div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default SearchScreen;