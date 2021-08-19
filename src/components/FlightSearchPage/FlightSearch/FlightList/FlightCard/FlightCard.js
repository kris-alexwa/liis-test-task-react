import React from 'react';
import './FlightCard.css';
import AirplaneIcon from '../../../../../images/icons/airplane.png'
import RouteArrowIcon from '../../../../../images/icons/route-arrow-icon.png'
import LineIcon from '../../../../../images/icons/line-icon.png'
import { format } from 'date-fns';

function FlightCard(props) {
    const displayDate = format(props.date, 'dd MMMM, yyyy');
    const displayTime = format(props.date, 'HH:mm');

    const [liked, setLiked] = React.useState(false);

    function handleLike(event) {
        event.preventDefault();
        setLiked(!liked)
    }

    const likeBtnClassName = `flight-card__like-btn ${liked ? 'flight-card__like-btn_active' : ''}`

    return (
        <div className='flight-card'>
            <div className='flight-card__container'>
                <img className='flight-card__airplane-icon' src={AirplaneIcon} alt='Иконка самолета' />
                <div className='info'>
                    <div className='info__route'>
                        <p className='info__city info__city_from'>{props.from}</p>
                        <img className='info__arrow-icon' src={RouteArrowIcon} alt='Иконка стрелки' />
                        <p className='info__city info__city_to'>{props.to}</p>
                    </div>
                    <div className='info__date-time'>
                        <p className='info__when info__when_date'>{displayDate}</p>
                        <img className='info__line-icon' src={LineIcon} alt='Иконка тире' />
                        <p className='info__when info__when_time'>{displayTime}</p>
                    </div>
                    <p className='info__airline'>{props.airline}</p>
                </div>
            </div>
            <div className='flight-card__container'>
                <button type='submit' className={likeBtnClassName} onClick={handleLike}></button>
                <p className='price'>Price:&#8194;<span className='price__accent'>{props.price} ₽</span></p>
            </div>
        </div>
    )
}

export default FlightCard;