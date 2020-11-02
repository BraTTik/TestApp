import { getFlights } from '../../lib/flights';

export default (req ,res)=>{
    const { query } = req;

    console.log('query =>', query);

    const result = getFlights({...query});

    res.statusCode = 200;
    res.json({message: 'ok', result});
}