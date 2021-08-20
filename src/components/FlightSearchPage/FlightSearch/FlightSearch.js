import React from 'react';
import './FlightSearch.css';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Calendar from './Calendar/Calendar';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import FlightList from './FlightList/FlightList';
import FavoriteFlights from './FavoriteFlights/FavoriteFlights';

function FlightSearch() {
    const [likedCard, setLikedCard] = React.useState([])

    function handleFlightCardBtn(flightCard) {
        const cards = likedCard.some((card) => card.id === flightCard.id)
        if (cards) {
            return;
        }
        setLikedCard([...likedCard, flightCard])
    }

    React.useEffect(() => {
       
    }, [likedCard])

    return (
        <section className='flight-search'>
            <div className='flight-search__container'>
                <Breadcrumbs />
                <Calendar />
                <ImageCarousel />
                <FavoriteFlights counter={likedCard.length} />
                <FlightList handleFlightCardBtn={handleFlightCardBtn} />
            </div>
        </section>
    )
}

export default FlightSearch;