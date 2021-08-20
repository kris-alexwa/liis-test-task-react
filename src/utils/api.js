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
            airline: 'S7',
            price: 23924,
            id: 2
        },
        {
            from: 'St. Petersburg',
            to: 'Moscow',
            date: new Date(),
            airline: 'Rossya',
            price: 23924,
            id: 3
        },
        {
            from: 'Moscow (SVO)',
            to: 'St. Petersburg',
            date: new Date(),
            airline: 'Utair',
            price: 23924,
            id: 4
        },
        {
            from: 'St. Petersburg',
            to: 'Ufa',
            date: new Date(),
            airline: 'Aeroflot',
            price: 23924,
            id: 5
        },
        {
            from: 'Ufa',
            to: 'Moscow (SVO)',
            date: new Date(),
            airline: 'Aeroflot',
            price: 23924,
            id: 6
        }
        ])
    }
}

export const api = new Api()