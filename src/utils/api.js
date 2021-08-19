export class Api {
    getFlightInfos() {
        return Promise.resolve([{
            from: 'Moscow (SVO)',
            to: 'New York City (JFK)',
            date: new Date(2020, 5, 28, 14, 50),
            airline: 'Aeroflot',
            price: 23924,
            id: 1
        },
        {
            from: 'Moscow (SVO)',
            to: 'Ufa',
            date: new Date(),
            airline: 'Aeroflot',
            price: 23924,
            id: 2
        }
        ])
    }
}

export const api = new Api()