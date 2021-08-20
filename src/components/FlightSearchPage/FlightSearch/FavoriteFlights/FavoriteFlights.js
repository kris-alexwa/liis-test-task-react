import React from 'react';
import './FavoriteFlights.css';

function FavoriteFlights(props) {
    return (
            <p className='favorite-flight'>Добавлено в избранное: <span className='favorite-flight__counter'>{props.counter}</span> рейсов</p>
    )
}

export default FavoriteFlights;