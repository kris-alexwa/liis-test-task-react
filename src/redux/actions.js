export const actionTypes = {
    init: 'INIT_APP',
    loadImages: 'LOAD_IMAGES',
    likeCard: 'LIKE_CARD',
    loadFlightsAsync: 'LOAD_FLIGHTS_ASYNC',
    flightsLoaded: 'FLIGHTS_LOADED',
    loggedIn: 'LOGGED_IN',
    loggedOut: 'LOGGED_OUT'
}

export const actions = {
    init: () => {
        const loggedIn = localStorage.getItem('loggedIn') === 'true'
        return { type: actionTypes.init, payload: { loggedIn: loggedIn } }
    },
    loadImages: { type: actionTypes.loadImages },
    loadFlightsAsync: { type: actionTypes.loadFlightsAsync },
    flightsLoaded: flights => ({ type: actionTypes.flightsLoaded, payload: flights }),
    likeCard: (id) => ({ type: actionTypes.likeCard, payload: id }),
    loggedIn: () => {
        localStorage.setItem('loggedIn', 'true')
        return { type: actionTypes.loggedIn }
    },
    loggedOut: () => {
        localStorage.removeItem('loggedIn')
        return { type: actionTypes.loggedOut }
    }
}