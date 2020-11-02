import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';
import { useFlights } from '../../lib/useFlights';

const CompaniesFilter = () => {
    const { data, error } = useFlights({filter: 'uidPrice'});

    if(error){
        console.log(error);
    }
    if(!data){
        return <div></div>
    }

    const handleChange = ( e ) => {
        console.log(e.target.id);
    }

    const { result } = data;

    return (
        <PanelSection title="Авиакомпании">
            {
                result.map( (item, i) => (
                    <div style={{display: 'flex', justifyContent: 'space-between',}} key = {i + 'carrier'}>
                        <InputForm 
                            type="checkbox"
                            id={item.flight.carrier.uid}
                            name={item.flight.carrier.uid}
                            label={item.flight.carrier.caption}
                            style={ { textOverflow: 'ellipsis' } }
                            onChange={handleChange}
                        />
                        <div style={{whiteSpace: 'nowrap'}}>
                            &nbsp;от { item.flight.price.total.amount }
                        </div>
                    </div>
                ))
            }
        </PanelSection>
    )
}

export default CompaniesFilter;