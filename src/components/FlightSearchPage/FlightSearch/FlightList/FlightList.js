import React from 'react';
import './FlightList.css';
import FavoriteFlights from './FavoriteFlights/FavoriteFlights';
import FlightCard from './FlightCard/FlightCard';
import { api } from '../../../../utils/api'

function FlightList() {
    const [flights, setFlights] = React.useState([])

    React.useEffect(() => {
        api.getFlightInfos().then((res) => setFlights(res)).catch((err) => console.log(err))
    }, [])
    
    return (
        <section className='flight-list'>
            <FavoriteFlights counter={10} />
            {flights.map(flight => <FlightCard key={flight.id} from={flight.from} to={flight.to} airline={flight.airline} date={flight.date} price={flight.price} />)}
        </section>
    )
}

export default FlightList;