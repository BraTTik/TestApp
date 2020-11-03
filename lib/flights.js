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

const filterByTransfer = (flights, num) => { 
    num = num.split(',');
    num = num.sort((a,b) => a - b );
    let res = [];
    console.log(num);
    num.forEach( i => {
        const filtered = flights.filter( item => {
                            const dSegments = item.flight.legs[0].segments;
                            const aSegments = item.flight.legs[1].segments;
                            console.log(aSegments.length)
                            return dSegments.length === +i + 1 && aSegments.length === +i + 1;
                        })
        res = [...res, ...filtered]
    })
    console.log(res.length);
    return res;
}

const getFilteredFlights = (flights, from=0, to=100000000000) => {
    if(from === ''){
        from = 0
    }
    if(to ===''){
        to=100000000000
    }
    const filtered = flights.filter( item =>  item.flight.price.total.amount >= from && item.flight.price.total.amount <= to)
    return filtered;
}

const filterByUid = (flights, uid) => {
    const ids = uid.split(',')
    return flights.filter( item => ids.includes(item.flight.carrier.uid));
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
        higher: ({flights}) => sortByPrice(flights, false),
        
    },
    time: {
        lower: ({flights}) => sortByTime(flights),
        higher: ({flights}) => sortByTime(flights),
    }
}

const Filter = {
    uid: ({flights, id}) => filterByUid(flights, id),
    uidPrice: ({flights}) => getCompanies(flights),
    price: ({flights, from, to}) => getFilteredFlights(flights, from, to),
    transfer: ({flights, num}) => filterByTransfer(flights, num)
}

export const getFlights = ({start = 0, sorter = 'price', option='lower', chunk, filter='', ...params} ) => {
    const { flights } = result;

    const sort = FlightSorter[sorter][option];

    const sorted = sort({flights, ...params})
    let toSend = sorted;
    if(filter){
        const filters = filter.split(',');
        filters.forEach( option => {
            const filterFunc = Filter[option];
            const filtered = filterFunc({flights: toSend, ...params});
            toSend = filtered;
        })
    }
    console.log(toSend.length);

    return toSend.slice(start, chunk&&+start + +chunk);;
}

