import useSwr from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export const useFlights = ({sorter = 'price', option = 'lower', filters =[], ...params}) => {
    let result = '';
    if(filters.length){
        result += `&filter=${filters.join(',')}`;
    }
    for( const [key, value] of Object.entries(params)){
        result += `&${key}=${value}`
    }
    return useSwr(`/api/flights?sorter=${sorter}&option=${option}${result}`, fetcher);
}