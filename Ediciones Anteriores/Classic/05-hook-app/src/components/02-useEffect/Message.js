import React, { Fragment, useEffect, useState } from 'react';
import './effects.css'

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0,});
    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = e => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };

    }, []);

    return (
        <Fragment>
            <h1>Eres genial</h1>
            <p>x: {x} - y: {y}</p>      
        </Fragment>
    );
}

export default Message;