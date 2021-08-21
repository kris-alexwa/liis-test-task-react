import React from 'react';
import './FlightList.css';
import FlightCard from './FlightCard/FlightCard';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../redux/actions';

function FlightList(props) {
    const flights = useSelector(store => store?.flights) ?? []
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(actions.loadFlightsAsync)
    }, [dispatch])

    return (
        <section className='flight-list'>
            {flights.map(flight => <FlightCard key={flight.id} from={flight.from} to={flight.to} airline={flight.airline} date={flight.date} price={flight.price} liked={flight.liked}
                counterLikedCard={props.counterLikedCard} handleFlightCardBtn={props.handleFlightCardBtn} flightCard={flight} />
            )}
        </section>
    )
}

export default FlightList;