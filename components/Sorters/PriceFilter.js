import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';
import { Actions, useAppState } from '../../context/AppStateContext';
import {useState} from 'react';

const TransferFilter = () => {

    const {state, dispatch } = useAppState();
    const [isTyping, setIsTyping] = useState(false);

    const handleChange = ( e ) => {
        const params = {
            [e.target.id]: e.target.value
        }
        dispatch({type: Actions.ADD_PARAMS, payload: params});
        dispatch({type: Actions.CLEAR_SEARCH});
        if(!state.filters.includes('price')){
            dispatch({type: Actions.ADD_FILTER, payload: 'price'});
        }

    }

    return (
        <PanelSection title="Цена">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>От &nbsp;</span>
                <InputForm 
                    type="text" 
                    id="from" 
                    name="price-from" 
                    onChange={handleChange}
                    placeholder="0"
                />
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>До &nbsp;</span>
                <InputForm 
                    type="text" 
                    id="to" 
                    name="price-to" 
                    onChange={handleChange}
                    placeholder="10000"
                />
            </div>
        </PanelSection>
    )
}

export default TransferFilter;