import React from 'react';
import './FlightSearchPage.css';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import FlightSearch from './FlightSearch/FlightSearch';


function FlightSearchPage() {
    return (
        <>
            <section className='flight-search-page'>
                <div className='flight-search-page__container'>
                    <LogoutBtn />
                    <FlightSearch />
                </div>
            </section>
        </>
    )
}

export default FlightSearchPage;