import React from 'react';
import './FlightList.css';
import FlightCard from './FlightCard/FlightCard';
import { api } from '../../../../utils/api'

function FlightList(props) {
    const [flights, setFlights] = React.useState([])
    
    React.useEffect(() => {
        api.getFlightInfos().then((res) => setFlights(res)).catch((err) => console.log(err))
    }, [])

    return (
        <section className='flight-list'>
            {flights.map(flight => <FlightCard key={flight.id} from={flight.from} to={flight.to} airline={flight.airline} date={flight.date} price={flight.price}
                counterLikedCard={props.counterLikedCard} handleFlightCardBtn={props.handleFlightCardBtn} flightCard={flight} />
            )}
        </section>
    )
}

export default FlightList;