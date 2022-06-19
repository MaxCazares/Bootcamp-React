import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {

    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}

export default GifGridItem;

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}