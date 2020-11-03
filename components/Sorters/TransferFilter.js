import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';
import { useAppState, Actions } from '../../context/AppStateContext'

const TransferFilter = () => {
    const { state, dispatch } = useAppState();


    const handleChange = ( e ) => {
        const id = state.params.num || '';
        dispatch({type: Actions.CLEAR_SEARCH})
        
        if(e.target.checked){
            let payload = id.split(',');
            payload.push(e.target.dataset.num);
            payload = payload.filter( item => item !== "");
            payload = payload.join(',');
            dispatch({type: Actions.ADD_PARAMS, payload:{num: payload}})
            
            if(!state.filters.includes('transfer')){
                dispatch({type: Actions.ADD_FILTER, payload: 'transfer'})
            }

        }else{

            let payload = id.split(',');
            payload = payload.filter( item => item !== e.target.dataset.num);
            if(payload.length === 0){
                dispatch({type: Actions.REMOVE_FILTER, payload: 'transfer'})
            }
            payload = payload.join(',');
            dispatch({type: Actions.ADD_PARAMS, payload:{num: payload}})
        }
    }


    return (
        <PanelSection title="Фильтровать">
            <InputForm 
                type="checkbox" 
                id="no-transfer" 
                name="no-transfer" 
                data-num="0"
                label="Без пересадок"
                onChange={handleChange}
            />
            <InputForm 
                type="checkbox" 
                id="transfer" 
                name="transfer" 
                label="1 пересадка"
                data-num="1"
                onChange={handleChange}
            />
        </PanelSection>
    )
}

export default TransferFilter;