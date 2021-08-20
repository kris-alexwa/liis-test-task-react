import React from 'react';
import './FlightSearchPage.css';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import FlightSearch from './FlightSearch/FlightSearch';


function FlightSearchPage(props) {
    return (
        <>
            <section className='flight-search-page'>
                <div className='flight-search-page__container'>
                    <LogoutBtn handleLogOut={props.handleLogOut} />
                    <FlightSearch />
                </div>
            </section>
        </>
    )
}

export default FlightSearchPage;