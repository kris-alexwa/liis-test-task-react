export class Api {
    getFlightInfos() {
        return fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/anytime", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "b6fa51777cmsh0554f8671028fdap132908jsndc9f22d6bb94"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return res.json().then(errBody => Promise.reject({ status: res.status, message: errBody.errors + "" })) // возможно не будет работать
            })
            .then(res => {
                const places = res.Places;
                const quotes = res.Quotes;
                const carriers = res.Carriers;

                return quotes.map((item, index) => ({
                    from: findCityNameById(item.OutboundLeg.OriginId, places),
                    to: findCityNameById(item.OutboundLeg.DestinationId, places),
                    date: new Date(item.QuoteDateTime),
                    airline: findCarrierNameById(item.OutboundLeg.CarrierIds[0], carriers),
                    price: item.MinPrice,
                    id: index
                }))
            })
    }
}

function findCityNameById(id, places) {
    const res = places.find(place => place.PlaceId === id)
    return res.Name;
}

function findCarrierNameById(id, carriers) {
    return carriers.find(item => item.CarrierId === id).Name
}

export const api = new Api()