import React from 'react';
import { useSelector } from 'react-redux';
import './FavoriteFlights.css';

function FavoriteFlights() {
    const flights = useSelector(store => store?.flights) ?? []
    const counter = flights.filter(item => item.liked).length
    return (
            <p className='favorite-flight'>Добавлено в избранное: <span className='favorite-flight__counter'>{counter}</span> рейсов</p>
    )
}

export default FavoriteFlights;