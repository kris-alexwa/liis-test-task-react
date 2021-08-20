import React from 'react';
import './FlightSearch.css';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Calendar from './Calendar/Calendar';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import FlightList from './FlightList/FlightList';
import FavoriteFlights from './FavoriteFlights/FavoriteFlights';

function FlightSearch() {
    const [likedCards, setLikedCards] = React.useState([])

    function handleFlightCardBtn(flightCard, liked) {
        const cardExists = likedCards.some((card) => card.id === flightCard.id)
        if (liked) {
            if (!cardExists) {
                return;
            }
            const res = likedCards.filter(likedCard => likedCard.id !== flightCard.id)
            setLikedCards(res)
        } else {
            if (cardExists) {
                return;
            }
            setLikedCards([...likedCards, flightCard])
        }
    }

    return (
        <section className='flight-search'>
            <div className='flight-search__container'>
                <Breadcrumbs />
                <Calendar />
                <ImageCarousel />
                <FavoriteFlights counter={likedCards.length} />
                <FlightList handleFlightCardBtn={handleFlightCardBtn} />
            </div>
        </section>
    )
}

export default FlightSearch;