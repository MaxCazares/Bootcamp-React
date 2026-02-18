import HeroCard from "./HeroCard";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import { useMemo } from "react";

const HeroList = ({publisher}) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no es un editor valido`)
    }

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    );
}
 
export default HeroList;