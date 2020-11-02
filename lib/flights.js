const { result } = require('./flights.json');


const sortByPrice = (flights, lowFirst = true) => {

    return flights.sort( (a, b) => {
        return lowFirst ? a.flight.price.total.amount - b.flight.price.total.amount : b.flight.price.total.amount - a.flight.price.total.amount;
    } )
}

const sortByTime = (flights) => {
    return flights.sort( (a, b) => {
        const aTime = a.flight.legs.reduce( ( previous, current) => previous + +current.duration, 0);
        const bTime = b.flight.legs.reduce( ( previous, current) => previous + +current.duration, 0);
        
        return aTime - bTime;
    })
}

const getFilteredFlights = (flights, from=0, to=100000000000) => {
    return flights.filter( item =>  item.flight.price.total.amount >= from && item.flight.price.total.amount <= to)
}

const filterByUid = (flights, uid) => {
    return flights.filter( item => item.flight.carrier.uid === uid);
}

const getCompanies = (flights) => {
    const uidSet = new Set();
    flights.forEach( item => uidSet.add(item.flight.carrier.uid));
    const sorted = [];
    uidSet.forEach( uid => {
        const filtered = filterByUid(flights, uid);
        const byPrice = sortByPrice(filtered);
        sorted.push(byPrice[0]);
    })
    console.log(sorted.length);

    return sorted;
}


const FlightSorter = {
    price: {
        lower: ({flights}) => sortByPrice(flights),
        higher: ({flights}) => sortByPrice(flights, true),
        
    },
    time: {
        lower: ({flights}) => sortByTime(flights),
        higher: ({flights}) => sortByTime(flights),
    }
}

const Filter = {
    uid: ({flights, id}) => filterByUid(flights, id),
    uidPrice: ({flights}) => getCompanies(flights),
    price: ({flights, from, to}) => getFilteredFlights(flights, from, to)
}

export const getFlights = ({start = 0, sorter = 'price', option='lower', chunk, filter='', ...params} ) => {
    const { flights } = result;

    const sort = FlightSorter[sorter][option];

    const sorted = sort({flights, ...params}).slice(start, chunk&&chunk);

    let toSend = sorted;
    if(filter){
        const filters = filter.split(',');
        filters.forEach( option => {
            const filterFunc = Filter[option];
            const filtered = filterFunc({flights: toSend, ...params});
            toSend = filtered;
        })
    }

    return toSend;
}

