import React from 'react';
import './FlightSearch.css';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Calendar from './Calendar/Calendar';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import FlightList from './FlightList/FlightList';

function FlightSearch() {
    return (
            <section className='flight-search'>
                <div className='flight-search__container'>
                    <Breadcrumbs />
                    <Calendar />
                    <ImageCarousel />
                    <FlightList />
                </div>
            </section>
    )
}

export default FlightSearch;