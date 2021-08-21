import { actionTypes } from './actions'
import NewYorkImage1 from '../images/NewYork1.jpg';
import NewYorkImage2 from '../images/NewYork2.jpg';
import NewYorkImage3 from '../images/NewYork3.jpg';
import NewYorkImage4 from '../images/NewYork4.jpg';
import NewYorkImage5 from '../images/NewYork5.jpg';
import NewYorkImage6 from '../images/NewYork6.jpg';
import NewYorkImage7 from '../images/NewYork7.jpg';

export function reducers(store, action) {
    switch (action.type) {
        case actionTypes.init:
            return {
                loggedIn: action.payload.loggedIn
            }
        case actionTypes.loadImages: 
            return {...store, carouselImages: [NewYorkImage1, NewYorkImage2, NewYorkImage3, NewYorkImage4, NewYorkImage5, NewYorkImage6, NewYorkImage7]}
        case actionTypes.flightsLoaded:
            return {...store, flights: action.payload}
        case actionTypes.likeCard:
            const id = action.payload;

            let flights = store.flights 
            const card = flights.find(item => item.id === id)
            const cardIndex = flights.indexOf(card)
            const newCard = {...card, liked: !card.liked}
            flights.splice(cardIndex, 1, newCard)

            return {...store, flights: [...flights]}
        case actionTypes.loggedIn:
            return {...store, loggedIn: true}
        case actionTypes.loggedOut:
            return {...store, loggedIn: false}
        default:
            console.log('unknown action type' + action.type)
            return store
    }
}