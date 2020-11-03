import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';
import { useFlights } from '../../lib/useFlights';
import styles from '../../styles/Home.module.css';
import { useAppState, Actions } from '../../context/AppStateContext';

const CompaniesFilter = () => {
    const { data, error } = useFlights({filter: 'uidPrice'});
    const { state, dispatch } = useAppState();
    if(error){
        console.log(error);
    }
    if(!data){
        return <div></div>
    }

    const handleChange = ( e ) => {
        const id = state.params.id || '';
        dispatch({type: Actions.CLEAR_SEARCH})
        if(e.target.checked){
            let payload = id.split(',');
            payload.push(e.target.id);
            payload = payload.filter( item => item !== "");
            payload = payload.join(',');
            dispatch({type: Actions.ADD_PARAMS, payload:{id: payload}})
            
            if(!state.filters.includes('uid')){
                dispatch({type: Actions.ADD_FILTER, payload: 'uid'})
            }
        }else{
            let payload = id.split(',');
            payload = payload.filter( item => item !== e.target.id);
            if(payload.length === 0){
                dispatch({type: Actions.REMOVE_FILTER, payload: 'uid'})
            }
            payload = payload.join(',');
            dispatch({type: Actions.ADD_PARAMS, payload:{id: payload}})
        }
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
                            className={styles.overflow}
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